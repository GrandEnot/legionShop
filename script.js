(function(){
  "use strict";

  // ========== НАСТРОЙКИ EMAILJS ==========
  // 1. Зарегистрируйтесь на https://www.emailjs.com/
  // 2. Создайте сервис (например Gmail), получите Service ID
  // 3. Создайте шаблон письма (Template ID)
  // 4. Вставьте свой PUBLIC KEY (User ID)
  // ----------------------------------------
  const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";      // замените
  const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";      // замените
  const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";    // замените

  // Инициализация EmailJS
  emailjs.init(EMAILJS_PUBLIC_KEY);

  // ========== ДАННЫЕ ТОВАРОВ ==========
  const productsData = [
    {category:"Ударная экипировка", subcategory:"Перчатки", name:"Перчатки боксерские / муай-тай", brandModel:"Fairtex BGV1", sizes:"10,12,14,16 oz", price:12900, desc:"Эргономичные перчатки из премиальной кожи...", image:"img/fairtex-bgv1.jpg"},
    {category:"Ударная экипировка", subcategory:"Перчатки", name:"Перчатки боксерские / муай-тай", brandModel:"Twins Special BGVL-3", sizes:"10,12,14,16 oz", price:12500, desc:"100% натуральная кожа, ручная работа...", image:"img/twins-bgvl3.jpg"},
    // ... скопируйте сюда весь массив productsData из предыдущего кода (все 39 товаров)
    // Я сократил для примера, но вам нужно вставить ПОЛНЫЙ массив
  ];

  // ========== КОРЗИНА ==========
  let cart = JSON.parse(localStorage.getItem('fightCart')) || [];
  const cartCountEl = document.getElementById('cartCount');
  const cartItemsEl = document.getElementById('cartItems');
  const cartTotalEl = document.getElementById('cartTotal');
  const cartSidebar = document.getElementById('cartSidebar');
  const overlay = document.getElementById('overlay');
  const cartToggle = document.getElementById('cartToggle');
  const closeCart = document.getElementById('closeCart');

  function updateCartUI() {
    cartCountEl.textContent = cart.reduce((sum, i) => sum + i.qty, 0);
    let total = 0;
    cartItemsEl.innerHTML = '';
    cart.forEach((item, idx) => {
      total += item.price * item.qty;
      cartItemsEl.innerHTML += `
        <div class="cart-item">
          <div>
            <h4>${item.name}</h4>
            <span>${item.price.toLocaleString()} ₽</span>
          </div>
          <div class="cart-item-controls">
            <button data-idx="${idx}" class="cart-dec">-</button>
            <span>${item.qty}</span>
            <button data-idx="${idx}" class="cart-inc">+</button>
          </div>
        </div>
      `;
    });
    document.querySelectorAll('.cart-dec').forEach(btn => {
      btn.addEventListener('click', () => updateCartQty(btn.dataset.idx, -1));
    });
    document.querySelectorAll('.cart-inc').forEach(btn => {
      btn.addEventListener('click', () => updateCartQty(btn.dataset.idx, 1));
    });
    cartTotalEl.textContent = `Итого: ${total.toLocaleString()} ₽`;
    localStorage.setItem('fightCart', JSON.stringify(cart));
  }

  window.updateCartQty = (idx, delta) => {
    const item = cart[idx];
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) cart.splice(idx, 1);
    updateCartUI();
  };

  function addToCart(product) {
    const existing = cart.find(i => i.id === product.brandModel);
    if (existing) existing.qty++;
    else cart.push({ id: product.brandModel, name: product.name + ' ' + product.brandModel, price: product.price, qty: 1 });
    updateCartUI();
    cartSidebar.classList.add('active');
    overlay.classList.add('active');
  }

  // ========== ОФОРМЛЕНИЕ ЗАКАЗА ==========
  const checkoutModal = document.getElementById('checkoutModal');
  const checkoutForm = document.getElementById('checkoutForm');
  const checkoutSummary = document.getElementById('checkoutSummary');
  const checkoutMessage = document.getElementById('checkoutMessage');
  const checkoutBtn = document.getElementById('checkoutBtn');

  function openCheckoutModal() {
    if (cart.length === 0) {
      alert('Корзина пуста');
      return;
    }
    // Формируем сводку
    let itemsText = cart.map(item => `${item.name} x${item.qty} — ${(item.price*item.qty).toLocaleString()} ₽`).join('\n');
    let total = cart.reduce((sum, i) => sum + i.price*i.qty, 0);
    checkoutSummary.innerHTML = `<strong>Ваш заказ:</strong><br>${itemsText.replace(/\n/g,'<br>')}<br><strong>Итого: ${total.toLocaleString()} ₽</strong>`;
    checkoutForm.reset();
    checkoutMessage.innerHTML = '';
    checkoutModal.classList.add('active');
    cartSidebar.classList.remove('active');
    overlay.classList.add('active');
  }

  checkoutBtn.addEventListener('click', openCheckoutModal);

  checkoutForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(checkoutForm);
    const orderData = {
      name: formData.get('name'),
      phone: formData.get('phone'),
      email: formData.get('email'),
      address: formData.get('address'),
      comment: formData.get('comment') || '—',
      items: cart.map(i => `${i.name} x${i.qty} = ${i.price*i.qty} ₽`).join(', '),
      total: cart.reduce((s, i) => s + i.price*i.qty, 0) + ' ₽'
    };

    checkoutMessage.innerHTML = 'Отправка заказа...';
    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, orderData);
      checkoutMessage.innerHTML = '<div class="checkout-message success">✅ Заказ оформлен! Мы свяжемся с вами.</div>';
      cart = [];
      updateCartUI();
      setTimeout(() => {
        checkoutModal.classList.remove('active');
        overlay.classList.remove('active');
      }, 2000);
    } catch (error) {
      console.error(error);
      checkoutMessage.innerHTML = '<div class="checkout-message" style="color:#d94f4f;">❌ Ошибка отправки. Попробуйте позже.</div>';
    }
  });

  document.getElementById('checkoutModalClose').addEventListener('click', () => {
    checkoutModal.classList.remove('active');
    overlay.classList.remove('active');
  });

  // ========== Закрытие по оверлею ==========
  overlay.addEventListener('click', () => {
    cartSidebar.classList.remove('active');
    checkoutModal.classList.remove('active');
    overlay.classList.remove('active');
  });
  cartToggle.addEventListener('click', () => {
    cartSidebar.classList.add('active');
    overlay.classList.add('active');
  });
  closeCart.addEventListener('click', () => {
    cartSidebar.classList.remove('active');
    overlay.classList.remove('active');
  });

  // ========== ОСТАЛЬНАЯ ЛОГИКА (модальное окно товара, фильтры, рендер) ==========
  // ... сюда вставьте остальной код из предыдущих версий (открытие карточки, фильтры, переключение страниц)
  // Я опускаю для краткости, но вы должны его добавить. Он полностью аналогичен тому, что был раньше.

  // Не забудьте инициализировать:
  updateCartUI();
})();
