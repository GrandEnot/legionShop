(function(){
  "use strict";

  // ===================== ДАННЫЕ ТОВАРОВ =====================
  const productsData = [
    {category:"Ударная экипировка", subcategory:"Перчатки", name:"Перчатки боксерские / муай-тай", brandModel:"Fairtex BGV1", sizes:"10,12,14,16 oz", price:12900, desc:"Эргономичные перчатки из премиальной кожи с уникальной контурной посадкой. Трехслойная пена Fairtex обеспечивает отличную защиту кисти и костяшек. Идеальны для спаррингов и работы на мешках.", image:"img/fairtex-bgv1.png"},
    {category:"Ударная экипировка", subcategory:"Перчатки", name:"Перчатки боксерские / муай-тай", brandModel:"Twins Special BGVL-3", sizes:"10,12,14,16 oz", price:12500, desc:"100% натуральная кожа, ручная работа из Таиланда. Усиленные швы, надежная липучка, превосходная защита при интенсивных тренировках. Подходят для муай-тай и кикбоксинга.", image:"img/twins-bgvl3.png"},
    {category:"Ударная экипировка", subcategory:"Перчатки", name:"Перчатки боксерские / муай-тай", brandModel:"Top King Empower", sizes:"10,12,14,16 oz", price:13500, desc:"Перчатки ручной работы из высококачественной кожи. Многослойная пена отлично поглощает удары, широкая манжета защищает запястье. Дизайн Empower – стиль и надежность.", image:"img/topking-empower.png"},
    {category:"Ударная экипировка", subcategory:"Перчатки", name:"Перчатки для ММА (спарринг)", brandModel:"Venum Elite", sizes:"4,6,8 oz", price:6900, desc:"Легкие перчатки для спаррингов с открытой ладонью. Многослойная пена, усиленная ладонь, отличная вентиляция. Подходят для ММА и грэпплинга.", image:"img/venum-elite-mma.png"},
    {category:"Ударная экипировка", subcategory:"Перчатки", name:"Перчатки для ММА (премиум)", brandModel:"Hayabusa T3", sizes:"4,6,8 oz", price:14900, desc:"Премиальные перчатки с патентованной системой Dual-X для фиксации запястья. Многослойная пена, отличная защита, идеальны для ударной работы и борьбы.", image:"img/hayabusa-t3.png"},
    {category:"Ударная экипировка", subcategory:"Защита корпуса и ног", name:"Защита голени (классические)", brandModel:"Fairtex SP5", sizes:"S,M,L,XL", price:8900, desc:"Классическая защита голени Fairtex SP5 с бесшовным соединением голени и стопы. Двухслойная пена высокой плотности, Syntek кожа.", image:"img/fairtex-sp5.png"},
    {category:"Ударная экипировка", subcategory:"Защита корпуса и ног", name:"Защита голени (двойная защита)", brandModel:"Twins Special SGL10", sizes:"S,M,L,XL", price:8500, desc:"Двойная подкладка и многослойная пена обеспечивают максимальную защиту при жестких спаррингах. Натуральная тайская кожа.", image:"img/twins-sgl10.png"},
    {category:"Ударная экипировка", subcategory:"Защита корпуса и ног", name:"Защита голени (эргономичные)", brandModel:"Top King Pro", sizes:"S,M,L,XL", price:9500, desc:"Эргономичные щитки с приподнятым гребнем для полной защиты. Легкие, с неопреновым соединением для гибкости. Натуральная кожа.", image:"img/topking-pro.png"},
    {category:"Ударная экипировка", subcategory:"Защита корпуса и ног", name:"Защита голени (легкие)", brandModel:"Yokkao Sharknado II", sizes:"XS,S,M,L", price:10900, desc:"Легкая защита Yokkao Sharknado II с тройным слоем амортизирующей пены. Премиальная микрофибра, нескользящая подкладка.", image:"img/yokkao-sharknado.png"},
    {category:"Ударная экипировка", subcategory:"Защита корпуса и ног", name:"Накладки на ноги (футы)", brandModel:"Twins Special", sizes:"S,M,L", price:4500, desc:"Легкие накладки на стопу для защиты подъема. Идеальны для отработки ударов ногами по мешкам и лапам.", image:"img/twins-foot.png"},
    {category:"Ударная экипировка", subcategory:"Защита корпуса и ног", name:"Шлем боксерский (кожа)", brandModel:"Fairtex", sizes:"S,M,L,XL", price:9900, desc:"Кожаный шлем с многослойной защитой. Обеспечивает отличную защиту головы, ушей и скул. Регулируемые ремни для надежной посадки.", image:"img/fairtex-helmet.png"},
    {category:"Ударная экипировка", subcategory:"Защита корпуса и ног", name:"Шлем для ММА (открытое лицо)", brandModel:"Top King", sizes:"S,M,L", price:9500, desc:"Открытый шлем для ММА и спаррингов. Защищает лоб и виски, оставляя полный обзор. Легкий и удобный.", image:"img/topking-mma-helmet.png"},
    {category:"Ударная экипировка", subcategory:"Аксессуары и инвентарь", name:"Бинты боксерские (хлопок)", brandModel:"Fairtex / Twins", sizes:"4.5м", price:900, desc:"Эластичные хлопковые бинты длиной 4.5 м. Обеспечивают надежную фиксацию кисти и запястья.", image:"img/handwraps-cotton.png"},
    {category:"Ударная экипировка", subcategory:"Аксессуары и инвентарь", name:"Бинты боксерские (гелевые)", brandModel:"Venum", sizes:"—", price:1800, desc:"Гелевые бинты Venum Kontact Gel. Быстрая фиксация, отличная защита костяшек и запястья.", image:"img/venum-gel.png"},
    {category:"Ударная экипировка", subcategory:"Аксессуары и инвентарь", name:"Капа профессиональная", brandModel:"Venum / Opro", sizes:"—", price:1800, desc:"Профессиональная капа с технологией точной формовки. Надежная защита зубов и челюсти.", image:"img/mouthguard-pro.png"},
    {category:"Ударная экипировка", subcategory:"Аксессуары и инвентарь", name:"Капа для ММА/тайского бокса", brandModel:"Twins Special", sizes:"—", price:1400, desc:"Удобная капа Twins Special. Хорошая защита, легко формуется под прикус.", image:"img/twins-mouthguard.png"},
    {category:"Ударная экипировка", subcategory:"Аксессуары и инвентарь", name:"Лапы тренерские (кожа)", brandModel:"Fairtex", sizes:"—", price:8500, desc:"Тренерские лапы из натуральной кожи. Отличная амортизация, удобная посадка. Для отработки точности и скорости.", image:"img/fairtex-pads.png"},
    {category:"Ударная экипировка", subcategory:"Аксессуары и инвентарь", name:"Груша боксерская навесная", brandModel:"Fairtex / Twins", sizes:"20-30 кг", price:12900, desc:"Классическая навесная груша из кожи. Отлично подходит для отработки ударов руками и ногами.", image:"img/heavy-bag.png"},
    {category:"Ударная экипировка", subcategory:"Аксессуары и инвентарь", name:"Скакалка скоростная", brandModel:"Venum / Fairtex", sizes:"—", price:1800, desc:"Скоростная скакалка с подшипниками. Легкая, регулируемая длина. Для разминки и кардио.", image:"img/speed-rope.png"},
    {category:"Борцовская экипировка", subcategory:"Кимоно и рашгарды", name:"Кимоно джиу-джитсу (белое/син)", brandModel:"Manto Basic", sizes:"A0,A1,A2,A3,A4", price:13900, desc:"Легкое кимоно Manto Basic 2.0. Куртка 400 GSM pearl weave, штаны 10 oz twill. Прорезиненный воротник.", image:"img/manto-basic.png"},
    {category:"Борцовская экипировка", subcategory:"Кимоно и рашгарды", name:"Кимоно джиу-джитсу (премиум)", brandModel:"Manto X", sizes:"A1,A2,A3", price:21900, desc:"Премиальное кимоно Manto X. Куртка 450 GSM, усиленные швы, стильный дизайн.", image:"img/manto-x.png"},
    {category:"Борцовская экипировка", subcategory:"Кимоно и рашгарды", name:"Рашгард", brandModel:"Manto", sizes:"S,M,L,XL", price:5200, desc:"Компрессионный рашгард Manto. Плоские швы, отводит влагу, не сковывает движения.", image:"img/manto-rashguard.png"},
    {category:"Борцовская экипировка", subcategory:"Кимоно и рашгарды", name:"Рашгард компрессионный", brandModel:"Hayabusa / Metaru", sizes:"S,M,L,XL", price:7200, desc:"Рашгард Hayabusa Metaru с титановым покрытием. Антибактериальный, терморегуляция, отличная компрессия.", image:"img/hayabusa-metaru.png"},
    {category:"Борцовская экипировка", subcategory:"Кимоно и рашгарды", name:"Рашгард", brandModel:"Venum Elite", sizes:"S,M,L,XL", price:5800, desc:"Рашгард Venum Elite. Компрессионная посадка, быстросохнущая ткань.", image:"img/venum-rashguard.png"},
    {category:"Борцовская экипировка", subcategory:"Шорты и аксессуары", name:"Шорты для ММА / BJJ", brandModel:"Manto Fight Shorts", sizes:"S,M,L,XL", price:5800, desc:"Шорты для ММА и BJJ. Эластичный пояс, прочные материалы, отличная вентиляция.", image:"img/manto-shorts.png"},
    {category:"Борцовская экипировка", subcategory:"Шорты и аксессуары", name:"Шорты для ММА (премиум)", brandModel:"Venum Challenger", sizes:"S,M,L,XL", price:6500, desc:"Премиальные шорты Venum Challenger. Легкий полиэстер, быстро сохнут, отличная посадка.", image:"img/venum-challenger.png"},
    {category:"Борцовская экипировка", subcategory:"Шорты и аксессуары", name:"Борцовки (классические)", brandModel:"ASICS Snapdown", sizes:"36-47", price:8900, desc:"Классические борцовки ASICS Snapdown 4. Усиленные накладки, дышащая сетка, отличное сцепление.", image:"img/asics-snapdown.png"},
    {category:"Борцовская экипировка", subcategory:"Шорты и аксессуары", name:"Борцовки для ММА", brandModel:"Venum Elite", sizes:"36-47", price:8500, desc:"Борцовки Venum Elite. Легкие, гибкая подошва, поддержка голеностопа.", image:"img/venum-boots.png"},
    {category:"Борцовская экипировка", subcategory:"Шорты и аксессуары", name:"Спортивный лиф (для женщин)", brandModel:"Manto / Venum", sizes:"XS,S,M,L", price:3200, desc:"Спортивный топ для единоборств. Средняя поддержка, дышащий материал.", image:"img/sports-bra.png"},
    {category:"Одежда и аксессуары", subcategory:"Тренировочная одежда", name:"Шорты тайские (муай-тай)", brandModel:"Fairtex / Twins / Top King", sizes:"S,M,L,XL", price:4500, desc:"Классические тайские шорты. Высокое качество сатина, широкие разрезы для свободы движений.", image:"img/thai-shorts.png"},
    {category:"Одежда и аксессуары", subcategory:"Тренировочная одежда", name:"Шорты тайские (дизайн)", brandModel:"Yokkao", sizes:"S,M,L,XL", price:6500, desc:"Дизайнерские тайские шорты Yokkao. Легкий сатин, яркие принты, отличная вентиляция.", image:"img/yokkao-shorts.png"},
    {category:"Одежда и аксессуары", subcategory:"Тренировочная одежда", name:"Футболка тренировочная", brandModel:"Venum / Manto", sizes:"S-XXL", price:2600, desc:"Дышащая футболка из полиэстера. Быстро сохнет, не сковывает движения.", image:"img/t-shirt.png"},
    {category:"Одежда и аксессуары", subcategory:"Тренировочная одежда", name:"Худи (толстовка)", brandModel:"Venum / Manto", sizes:"S-XL", price:5800, desc:"Удобное худи для тренировок и повседневной носки. Мягкая ткань, капюшон, карманы.", image:"img/hoodie.png"},
    {category:"Одежда и аксессуары", subcategory:"Тренировочная одежда", name:"Бейсболка с логотипом", brandModel:"Venum / Fairtex", sizes:"универс.", price:1800, desc:"Классическая бейсболка с вышитым логотипом. Регулируемый размер.", image:"img/cap.png"},
    {category:"Одежда и аксессуары", subcategory:"Сумки и инвентарь", name:"Сумка спортивная (рюкзак 45л)", brandModel:"Venum / Manto", sizes:"—", price:5200, desc:"Вместительный спортивный рюкзак. Отделение для перчаток, вентиляция.", image:"img/backpack.png"},
    {category:"Одежда и аксессуары", subcategory:"Сумки и инвентарь", name:"Сумка Duffel (80-100л)", brandModel:"Venum / Fairtex", sizes:"—", price:8500, desc:"Большая спортивная сумка Duffel. Помещает всю экипировку: перчатки, шлем, щитки.", image:"img/duffel.png"},
    {category:"Одежда и аксессуары", subcategory:"Сумки и инвентарь", name:"Магнезия жидкая", brandModel:"Tarzan / Liquid Chalk", sizes:"—", price:700, desc:"Жидкая магнезия для надежного хвата. Быстро сохнет, не оставляет следов.", image:"img/liquid-chalk.png"},
    {category:"Одежда и аксессуары", subcategory:"Сумки и инвентарь", name:"Пластырь спортивный (рулон)", brandModel:"Various", sizes:"—", price:300, desc:"Эластичный спортивный пластырь. Фиксация суставов, защита от травм.", image:"img/tape.png"},
    {category:"Одежда и аксессуары", subcategory:"Сумки и инвентарь", name:"Тейп кинезиологический", brandModel:"Various", sizes:"—", price:900, desc:"Кинезио тейп для поддержки мышц и суставов. Не ограничивает движения.", image:"img/kinesio-tape.png"}
  ];

  // ===================== DOM-элементы =====================
  const pages = {
    home: document.getElementById('home'),
    products: document.getElementById('products'),
    contacts: document.getElementById('contacts')
  };
  const navLinks = document.querySelectorAll('.nav-link');

  // Корзина
  let cart = JSON.parse(localStorage.getItem('fightCart')) || [];
  const cartCountEl = document.getElementById('cartCount');
  const cartItemsEl = document.getElementById('cartItems');
  const cartTotalEl = document.getElementById('cartTotal');
  const cartSidebar = document.getElementById('cartSidebar');
  const overlay = document.getElementById('overlay');
  const cartToggle = document.getElementById('cartToggle');
  const closeCart = document.getElementById('closeCart');
  const checkoutBtn = document.getElementById('checkoutBtn');

  // Модальное окно товара
  const productModal = document.getElementById('productModal');
  const modalClose = document.getElementById('modalClose');
  const modalImage = document.getElementById('modalImage');
  const modalTitle = document.getElementById('modalTitle');
  const modalBrand = document.getElementById('modalBrand');
  const modalDesc = document.getElementById('modalDesc');
  const modalPrice = document.getElementById('modalPrice');
  const modalSize = document.getElementById('modalSize');
  const modalAddToCart = document.getElementById('modalAddToCart');
  let currentProduct = null;

  // Модальное окно оформления заказа
  const checkoutModal = document.getElementById('checkoutModal');
  const checkoutForm = document.getElementById('checkoutForm');
  const checkoutSummary = document.getElementById('checkoutSummary');
  const checkoutMessage = document.getElementById('checkoutMessage');
  const checkoutModalClose = document.getElementById('checkoutModalClose');

  // Фильтры
  const categoryFilter = document.getElementById('categoryFilter');
  const subcategoryFilter = document.getElementById('subcategoryFilter');
  const searchInput = document.getElementById('searchInput');
  const sizeFilter = document.getElementById('sizeFilter');
  const priceMin = document.getElementById('priceMin');
  const priceMax = document.getElementById('priceMax');
  const resetFiltersBtn = document.getElementById('resetProductFilters');

  const homeFeatured = document.getElementById('home-featured');
  const filteredProducts = document.getElementById('filteredProducts');

  // ===================== РЕНДЕР КАРТОЧЕК =====================
  function renderProductCard(product) {
    const div = document.createElement('div');
    div.className = 'product-card';
    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}" onerror="this.src='img/placeholder.png'">
      <div class="product-category">${product.category} / ${product.subcategory}</div>
      <div class="product-title">${product.name}</div>
      <div class="product-brand">${product.brandModel}</div>
      <div class="product-sizes"><i class="fas fa-ruler"></i> ${product.sizes}</div>
      <div class="product-price">${product.price.toLocaleString()} <small>₽</small></div>
    `;
    div.addEventListener('click', () => openProductModal(product));
    return div;
  }

  function renderGrid(container, items) {
    if (!container) return;
    container.innerHTML = '';
    items.forEach(p => container.appendChild(renderProductCard(p)));
  }

  // ===================== МОДАЛЬНОЕ ОКНО ТОВАРА =====================
  function openProductModal(product) {
    currentProduct = product;
    modalImage.innerHTML = `<img src="${product.image}" alt="${product.name}" onerror="this.src='img/placeholder.png'">`;
    modalTitle.textContent = product.name;
    modalBrand.textContent = product.brandModel;
    modalDesc.textContent = product.desc;
    modalPrice.textContent = product.price.toLocaleString() + ' ₽';
    modalSize.textContent = product.sizes;
    productModal.classList.add('active');
  }

  function closeProductModal() {
    productModal.classList.remove('active');
    currentProduct = null;
  }

  modalClose.addEventListener('click', closeProductModal);
  productModal.addEventListener('click', (e) => {
    if (e.target === productModal) closeProductModal();
  });

  modalAddToCart.addEventListener('click', () => {
    if (currentProduct) {
      addToCart(currentProduct);
      closeProductModal();
    }
  });

  // ===================== КОРЗИНА =====================
  function updateCartUI() {
    cartCountEl.textContent = cart.reduce((sum, i) => sum + i.qty, 0);
    let total = 0;
    cartItemsEl.innerHTML = '';
    cart.forEach((item, idx) => {
      total += item.price * item.qty;
      const itemDiv = document.createElement('div');
      itemDiv.className = 'cart-item';
      itemDiv.innerHTML = `
        <div>
          <h4>${item.name}</h4>
          <span style="color: var(--accent)">${item.price.toLocaleString()} ₽</span>
        </div>
        <div class="cart-item-controls">
          <button class="cart-dec" data-idx="${idx}">-</button>
          <span>${item.qty}</span>
          <button class="cart-inc" data-idx="${idx}">+</button>
        </div>
      `;
      cartItemsEl.appendChild(itemDiv);
    });
    document.querySelectorAll('.cart-dec').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        updateCartQty(parseInt(btn.dataset.idx), -1);
      });
    });
    document.querySelectorAll('.cart-inc').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        updateCartQty(parseInt(btn.dataset.idx), 1);
      });
    });
    cartTotalEl.textContent = `Итого: ${total.toLocaleString()} ₽`;
    localStorage.setItem('fightCart', JSON.stringify(cart));
  }

  function updateCartQty(idx, delta) {
    if (idx < 0 || idx >= cart.length) return;
    const item = cart[idx];
    item.qty += delta;
    if (item.qty <= 0) {
      cart.splice(idx, 1);
    }
    updateCartUI();
  }

  function addToCart(product) {
    const existing = cart.find(i => i.id === product.brandModel);
    if (existing) {
      existing.qty++;
    } else {
      cart.push({
        id: product.brandModel,
        name: product.name + ' ' + product.brandModel,
        price: product.price,
        qty: 1
      });
    }
    updateCartUI();
    openCart();
  }

  function openCart() {
    cartSidebar.classList.add('active');
    overlay.classList.add('active');
  }

  function closeCartSidebar() {
    cartSidebar.classList.remove('active');
    overlay.classList.remove('active');
  }

  cartToggle.addEventListener('click', openCart);
  closeCart.addEventListener('click', closeCartSidebar);
  overlay.addEventListener('click', closeCartSidebar);

  // ===================== ОФОРМЛЕНИЕ ЗАКАЗА (без реальной отправки) =====================
  function openCheckoutModal() {
    if (cart.length === 0) {
      alert('Корзина пуста');
      return;
    }
    let itemsText = cart.map(item => `${item.name} x${item.qty} — ${(item.price*item.qty).toLocaleString()} ₽`).join('<br>');
    let total = cart.reduce((sum, i) => sum + i.price*i.qty, 0);
    checkoutSummary.innerHTML = `<strong>Ваш заказ:</strong><br>${itemsText}<br><strong>Итого: ${total.toLocaleString()} ₽</strong>`;
    checkoutForm.reset();
    checkoutMessage.innerHTML = '';
    checkoutModal.classList.add('active');
    overlay.classList.add('active');
    closeCartSidebar();
  }

  checkoutBtn.addEventListener('click', openCheckoutModal);

  checkoutForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Имитация успешного оформления
    checkoutMessage.innerHTML = '<div style="background:#1e3a2e; color:#a3e0c0; padding:12px; border-radius:16px;">✅ Заказ оформлен! Мы свяжемся с вами в ближайшее время.</div>';
    cart = [];
    updateCartUI();
    setTimeout(() => {
      checkoutModal.classList.remove('active');
      overlay.classList.remove('active');
    }, 2000);
  });

  checkoutModalClose.addEventListener('click', () => {
    checkoutModal.classList.remove('active');
    overlay.classList.remove('active');
  });

  // ===================== НАВИГАЦИЯ =====================
  function switchPage(pageId) {
    Object.values(pages).forEach(p => p.classList.remove('active'));
    pages[pageId].classList.add('active');
    navLinks.forEach(link => {
      link.classList.toggle('active', link.dataset.page === pageId);
    });
    if (pageId === 'home') {
      renderGrid(homeFeatured, productsData.slice(0, 4));
    }
    if (pageId === 'products') {
      populateCategorySelect();
      populateSizeFilter();
      applyFilters();
    }
  }

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      switchPage(link.dataset.page);
    });
  });

  // ===================== ФИЛЬТРЫ =====================
  function populateCategorySelect() {
    const cats = [...new Set(productsData.map(p => p.category))];
    categoryFilter.innerHTML = '<option value="">Все категории</option>';
    cats.forEach(c => {
      categoryFilter.innerHTML += `<option value="${c}">${c}</option>`;
    });
    updateSubcategoryOptions();
  }

  function updateSubcategoryOptions() {
    const selectedCat = categoryFilter.value;
    const subs = selectedCat
      ? [...new Set(productsData.filter(p => p.category === selectedCat).map(p => p.subcategory))]
      : [...new Set(productsData.map(p => p.subcategory))];
    subcategoryFilter.innerHTML = '<option value="">Все подкатегории</option>';
    subs.forEach(s => {
      subcategoryFilter.innerHTML += `<option value="${s}">${s}</option>`;
    });
  }

  function populateSizeFilter() {
    const sizes = [...new Set(productsData.flatMap(p => p.sizes.split(',').map(s => s.trim())))].sort();
    sizeFilter.innerHTML = '<option value="">Все размеры</option>';
    sizes.forEach(s => {
      sizeFilter.innerHTML += `<option value="${s}">${s}</option>`;
    });
  }

  function applyFilters() {
    const cat = categoryFilter.value;
    const sub = subcategoryFilter.value;
    const term = searchInput.value.toLowerCase();
    const size = sizeFilter.value;
    const min = priceMin.value ? parseFloat(priceMin.value) : 0;
    const max = priceMax.value ? parseFloat(priceMax.value) : Infinity;

    const filtered = productsData.filter(p => {
      if (cat && p.category !== cat) return false;
      if (sub && p.subcategory !== sub) return false;
      if (term && !(p.name.toLowerCase().includes(term) || p.brandModel.toLowerCase().includes(term))) return false;
      if (size && !p.sizes.split(',').map(s => s.trim()).includes(size)) return false;
      if (p.price < min || p.price > max) return false;
      return true;
    });
    renderGrid(filteredProducts, filtered);
  }

  categoryFilter.addEventListener('change', () => {
    updateSubcategoryOptions();
    applyFilters();
  });
  subcategoryFilter.addEventListener('change', applyFilters);
  searchInput.addEventListener('input', applyFilters);
  sizeFilter.addEventListener('change', applyFilters);
  priceMin.addEventListener('input', applyFilters);
  priceMax.addEventListener('input', applyFilters);
  resetFiltersBtn.addEventListener('click', () => {
    categoryFilter.value = '';
    updateSubcategoryOptions();
    subcategoryFilter.value = '';
    searchInput.value = '';
    sizeFilter.value = '';
    priceMin.value = '';
    priceMax.value = '';
    applyFilters();
  });

  // ===================== ИНИЦИАЛИЗАЦИЯ =====================
  function init() {
    updateCartUI();
    renderGrid(homeFeatured, productsData.slice(0, 4));
    populateCategorySelect();
    populateSizeFilter();
    applyFilters();
    switchPage('home');
  }

  init();
})();
