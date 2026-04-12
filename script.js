(function(){
  "use strict";

  // ---------- ДАННЫЕ ТОВАРОВ (с путями к картинкам) ----------
  const productsData = [
    {category:"Ударная экипировка", subcategory:"Перчатки", name:"Перчатки боксерские / муай-тай", brandModel:"Fairtex BGV1", sizes:"10,12,14,16 oz", price:12900, desc:"Эргономичные перчатки из премиальной кожи с уникальной контурной посадкой. Трехслойная пена Fairtex обеспечивает отличную защиту кисти и костяшек. Идеальны для спаррингов и работы на мешках.", image:"img/gloves/fairtex_bgv1.png"},
    {category:"Ударная экипировка", subcategory:"Перчатки", name:"Перчатки боксерские / муай-тай", brandModel:"Twins Special BGVL-3", sizes:"10,12,14,16 oz", price:12500, desc:"100% натуральная кожа, ручная работа из Таиланда. Усиленные швы, надежная липучка, превосходная защита при интенсивных тренировках. Подходят для муай-тай и кикбоксинга.", image:"img/gloves/twins-bgvl3.png"},
    {category:"Ударная экипировка", subcategory:"Перчатки", name:"Перчатки боксерские / муай-тай", brandModel:"Top King Empower", sizes:"10,12,14,16 oz", price:13500, desc:"Перчатки ручной работы из высококачественной кожи. Многослойная пена отлично поглощает удары, широкая манжета защищает запястье. Дизайн Empower – стиль и надежность.", image:"img/gloves/topking-empower.png"},
    {category:"Ударная экипировка", subcategory:"Перчатки", name:"Перчатки для ММА (спарринг)", brandModel:"Venum Elite", sizes:"4,6,8 oz", price:6900, desc:"Легкие перчатки для спаррингов с открытой ладонью. Многослойная пена, усиленная ладонь, отличная вентиляция. Подходят для ММА и грэпплинга.", image:"img/gloves/venum-elite-mma.png"},
    {category:"Ударная экипировка", subcategory:"Перчатки", name:"Перчатки для ММА (премиум)", brandModel:"Hayabusa T3", sizes:"4,6,8 oz", price:14900, desc:"Премиальные перчатки с патентованной системой Dual-X для фиксации запястья. Многослойная пена, отличная защита, идеальны для ударной работы и борьбы.", image:"img/gloves/hayabusa-t3.png"},
    {category:"Ударная экипировка", subcategory:"Защита корпуса и ног", name:"Защита голени (классические)", brandModel:"Fairtex SP5", sizes:"S,M,L,XL", price:8900, desc:"Классическая защита голени Fairtex SP5 с бесшовным соединением голени и стопы. Двухслойная пена высокой плотности, Syntek кожа.", image:"img/protection/fairtex-sp5.png"},
    {category:"Ударная экипировка", subcategory:"Защита корпуса и ног", name:"Защита голени (двойная защита)", brandModel:"Twins Special SGL10", sizes:"S,M,L,XL", price:8500, desc:"Двойная подкладка и многослойная пена обеспечивают максимальную защиту при жестких спаррингах. Натуральная тайская кожа.", image:"img/protection/twins-sgl10.png"},
    {category:"Ударная экипировка", subcategory:"Защита корпуса и ног", name:"Защита голени (эргономичные)", brandModel:"Top King Pro", sizes:"S,M,L,XL", price:9500, desc:"Эргономичные щитки с приподнятым гребнем для полной защиты. Легкие, с неопреновым соединением для гибкости. Натуральная кожа.", image:"img/protection/topking-pro.png"},
    {category:"Ударная экипировка", subcategory:"Защита корпуса и ног", name:"Защита голени (легкие)", brandModel:"Yokkao Sharknado II", sizes:"XS,S,M,L", price:10900, desc:"Легкая защита Yokkao Sharknado II с тройным слоем амортизирующей пены. Премиальная микрофибра, нескользящая подкладка.", image:"img/protection/yokkao-sharknado.png"},
    {category:"Ударная экипировка", subcategory:"Защита корпуса и ног", name:"Накладки на ноги (футы)", brandModel:"Twins Special", sizes:"S,M,L", price:4500, desc:"Легкие накладки на стопу для защиты подъема. Идеальны для отработки ударов ногами по мешкам и лапам.", image:"img/protection/twins-foot.png"},
    {category:"Ударная экипировка", subcategory:"Защита корпуса и ног", name:"Шлем боксерский (кожа)", brandModel:"Fairtex", sizes:"S,M,L,XL", price:9900, desc:"Кожаный шлем с многослойной защитой. Обеспечивает отличную защиту головы, ушей и скул. Регулируемые ремни для надежной посадки.", image:"img/protection/fairtex-helmet.png"},
    {category:"Ударная экипировка", subcategory:"Защита корпуса и ног", name:"Шлем для ММА (открытое лицо)", brandModel:"Top King", sizes:"S,M,L", price:9500, desc:"Открытый шлем для ММА и спаррингов. Защищает лоб и виски, оставляя полный обзор. Легкий и удобный.", image:"img/protection/topking-mma-helmet.png"},
    {category:"Ударная экипировка", subcategory:"Аксессуары и инвентарь", name:"Бинты боксерские (хлопок)", brandModel:"Fairtex / Twins", sizes:"4.5м", price:900, desc:"Эластичные хлопковые бинты длиной 4.5 м. Обеспечивают надежную фиксацию кисти и запястья.", image:"img/accessories/handwraps-cotton.png"},
    {category:"Ударная экипировка", subcategory:"Аксессуары и инвентарь", name:"Бинты боксерские (гелевые)", brandModel:"Venum", sizes:"—", price:1800, desc:"Гелевые бинты Venum Kontact Gel. Быстрая фиксация, отличная защита костяшек и запястья.", image:"img/accessories/venum-gel.png"},
    {category:"Ударная экипировка", subcategory:"Аксессуары и инвентарь", name:"Капа профессиональная", brandModel:"Venum / Opro", sizes:"—", price:1800, desc:"Профессиональная капа с технологией точной формовки. Надежная защита зубов и челюсти.", image:"img/accessories/mouthguard-pro.png"},
    {category:"Ударная экипировка", subcategory:"Аксессуары и инвентарь", name:"Капа для ММА/тайского бокса", brandModel:"Twins Special", sizes:"—", price:1400, desc:"Удобная капа Twins Special. Хорошая защита, легко формуется под прикус.", image:"img/accessories/twins-mouthguard.png"},
    {category:"Ударная экипировка", subcategory:"Аксессуары и инвентарь", name:"Лапы тренерские (кожа)", brandModel:"Fairtex", sizes:"—", price:8500, desc:"Тренерские лапы из натуральной кожи. Отличная амортизация, удобная посадка. Для отработки точности и скорости.", image:"img/accessories/fairtex-pads.png"},
    {category:"Ударная экипировка", subcategory:"Аксессуары и инвентарь", name:"Груша боксерская навесная", brandModel:"Fairtex / Twins", sizes:"20-30 кг", price:12900, desc:"Классическая навесная груша из кожи. Отлично подходит для отработки ударов руками и ногами.", image:"img/accessories/heavy-bag.png"},
    {category:"Ударная экипировка", subcategory:"Аксессуары и инвентарь", name:"Скакалка скоростная", brandModel:"Venum / Fairtex", sizes:"—", price:1800, desc:"Скоростная скакалка с подшипниками. Легкая, регулируемая длина. Для разминки и кардио.", image:"img/accessories/speed-rope.png"},
    {category:"Борцовская экипировка", subcategory:"Кимоно и рашгарды", name:"Кимоно джиу-джитсу (белое/син)", brandModel:"Manto Basic", sizes:"A0,A1,A2,A3,A4", price:13900, desc:"Легкое кимоно Manto Basic 2.0. Куртка 400 GSM pearl weave, штаны 10 oz twill. Прорезиненный воротник.", image:"img/struggle/manto-basic1.jpg"},
    {category:"Борцовская экипировка", subcategory:"Кимоно и рашгарды", name:"Кимоно джиу-джитсу (премиум)", brandModel:"Manto X", sizes:"A1,A2,A3", price:21900, desc:"Премиальное кимоно Manto X. Куртка 450 GSM, усиленные швы, стильный дизайн.", image:"img/struggle/manto-x.png"},
    {category:"Борцовская экипировка", subcategory:"Кимоно и рашгарды", name:"Рашгард", brandModel:"Manto", sizes:"S,M,L,XL", price:5200, desc:"Компрессионный рашгард Manto. Плоские швы, отводит влагу, не сковывает движения.", image:"img/struggle/manto-rashguard.png"},
    {category:"Борцовская экипировка", subcategory:"Кимоно и рашгарды", name:"Рашгард компрессионный", brandModel:"Hayabusa / Metaru", sizes:"S,M,L,XL", price:7200, desc:"Рашгард Hayabusa Metaru с титановым покрытием. Антибактериальный, терморегуляция, отличная компрессия.", image:"img/struggle/hayabusa-metaru.png"},
    {category:"Борцовская экипировка", subcategory:"Кимоно и рашгарды", name:"Рашгард", brandModel:"Venum Elite", sizes:"S,M,L,XL", price:5800, desc:"Рашгард Venum Elite. Компрессионная посадка, быстросохнущая ткань.", image:"img/struggle/venum-rashguard.png"},
    {category:"Борцовская экипировка", subcategory:"Шорты и аксессуары", name:"Шорты для ММА / BJJ", brandModel:"Manto Fight Shorts", sizes:"S,M,L,XL", price:5800, desc:"Шорты для ММА и BJJ. Эластичный пояс, прочные материалы, отличная вентиляция.", image:"img/struggle/manto-shorts.png"},
    {category:"Борцовская экипировка", subcategory:"Шорты и аксессуары", name:"Шорты для ММА (премиум)", brandModel:"Venum Challenger", sizes:"S,M,L,XL", price:6500, desc:"Премиальные шорты Venum Challenger. Легкий полиэстер, быстро сохнут, отличная посадка.", image:"img/struggle/venum-challenger.png"},
    {category:"Борцовская экипировка", subcategory:"Шорты и аксессуары", name:"Борцовки (классические)", brandModel:"ASICS Snapdown", sizes:"36-47", price:8900, desc:"Классические борцовки ASICS Snapdown 4. Усиленные накладки, дышащая сетка, отличное сцепление.", image:"img/struggle/asics-snapdown.png"},
    {category:"Борцовская экипировка", subcategory:"Шорты и аксессуары", name:"Борцовки для ММА", brandModel:"Venum Elite", sizes:"36-47", price:8500, desc:"Борцовки Venum Elite. Легкие, гибкая подошва, поддержка голеностопа.", image:"img/struggle/venum-boots.png"},
    {category:"Борцовская экипировка", subcategory:"Шорты и аксессуары", name:"Спортивный лиф (для женщин)", brandModel:"Manto / Venum", sizes:"XS,S,M,L", price:3200, desc:"Спортивный топ для единоборств. Средняя поддержка, дышащий материал.", image:"img/struggle/sports-bra.png"},
    {category:"Одежда и аксессуары", subcategory:"Тренировочная одежда", name:"Шорты тайские (муай-тай)", brandModel:"Fairtex / Twins / Top King", sizes:"S,M,L,XL", price:4500, desc:"Классические тайские шорты. Высокое качество сатина, широкие разрезы для свободы движений.", image:"img/clothes/thai-shorts.png"},
    {category:"Одежда и аксессуары", subcategory:"Тренировочная одежда", name:"Шорты тайские (дизайн)", brandModel:"Yokkao", sizes:"S,M,L,XL", price:6500, desc:"Дизайнерские тайские шорты Yokkao. Легкий сатин, яркие принты, отличная вентиляция.", image:"img/clothes/yokkao-shorts.png"},
    {category:"Одежда и аксессуары", subcategory:"Тренировочная одежда", name:"Футболка тренировочная", brandModel:"Venum / Manto", sizes:"S-XXL", price:2600, desc:"Дышащая футболка из полиэстера. Быстро сохнет, не сковывает движения.", image:"img/clothes/t-shirt.png"},
    {category:"Одежда и аксессуары", subcategory:"Тренировочная одежда", name:"Худи (толстовка)", brandModel:"Venum / Manto", sizes:"S-XL", price:5800, desc:"Удобное худи для тренировок и повседневной носки. Мягкая ткань, капюшон, карманы.", image:"img/clothes/hoodie.png"},
    {category:"Одежда и аксессуары", subcategory:"Тренировочная одежда", name:"Бейсболка с логотипом", brandModel:"Venum / Fairtex", sizes:"универс.", price:1800, desc:"Классическая бейсболка с вышитым логотипом. Регулируемый размер.", image:"img/clothes/cap.png"},
    {category:"Одежда и аксессуары", subcategory:"Сумки и инвентарь", name:"Сумка спортивная (рюкзак 45л)", brandModel:"Venum / Manto", sizes:"—", price:5200, desc:"Вместительный спортивный рюкзак. Отделение для перчаток, вентиляция.", image:"img/other/backpack.png"},
    {category:"Одежда и аксессуары", subcategory:"Сумки и инвентарь", name:"Сумка Duffel (80-100л)", brandModel:"Venum / Fairtex", sizes:"—", price:8500, desc:"Большая спортивная сумка Duffel. Помещает всю экипировку: перчатки, шлем, щитки.", image:"img/other/duffel.png"},
    {category:"Одежда и аксессуары", subcategory:"Сумки и инвентарь", name:"Магнезия жидкая", brandModel:"Tarzan / Liquid Chalk", sizes:"—", price:700, desc:"Жидкая магнезия для надежного хвата. Быстро сохнет, не оставляет следов.", image:"img/other/liquid-chalk.png"},
    {category:"Одежда и аксессуары", subcategory:"Сумки и инвентарь", name:"Пластырь спортивный (рулон)", brandModel:"Various", sizes:"—", price:300, desc:"Эластичный спортивный пластырь. Фиксация суставов, защита от травм.", image:"img/other/tape.png"},
    {category:"Одежда и аксессуары", subcategory:"Сумки и инвентарь", name:"Тейп кинезиологический", brandModel:"Various", sizes:"—", price:900, desc:"Кинезио тейп для поддержки мышц и суставов. Не ограничивает движения.", image:"img/other/kinesio-tape.png"}
  ];

  // ---------- Корзина ----------
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
          <div class="cart-item-info">
            <h4>${item.name}</h4>
            <span class="cart-item-price">${item.price.toLocaleString()} ₽</span>
          </div>
          <div class="cart-item-controls">
            <button onclick="window.updateCartQty(${idx}, -1)">-</button>
            <span>${item.qty}</span>
            <button onclick="window.updateCartQty(${idx}, 1)">+</button>
          </div>
        </div>
      `;
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

  if (cartToggle) cartToggle.onclick = () => { cartSidebar.classList.add('active'); overlay.classList.add('active'); };
  if (closeCart) closeCart.onclick = () => { cartSidebar.classList.remove('active'); overlay.classList.remove('active'); };
  if (overlay) overlay.onclick = () => { cartSidebar.classList.remove('active'); overlay.classList.remove('active'); };
  updateCartUI();

  // ---------- Модальное окно ----------
  const modal = document.getElementById('productModal');
  const modalClose = document.getElementById('modalClose');
  let currentProduct = null;

  function openModal(product) {
    currentProduct = product;
    const modalImage = document.getElementById('modalImage');
    if (modalImage) modalImage.innerHTML = `<img src="${product.image}" alt="${product.name}" onerror="this.src='img/placeholder.jpg'">`;
    const modalTitle = document.getElementById('modalTitle');
    if (modalTitle) modalTitle.textContent = product.name;
    const modalBrand = document.getElementById('modalBrand');
    if (modalBrand) modalBrand.textContent = product.brandModel;
    const modalDesc = document.getElementById('modalDesc');
    if (modalDesc) modalDesc.textContent = product.desc;
    const modalPrice = document.getElementById('modalPrice');
    if (modalPrice) modalPrice.textContent = product.price.toLocaleString() + ' ₽';
    const modalSize = document.getElementById('modalSize');
    if (modalSize) modalSize.textContent = product.sizes;
    if (modal) modal.classList.add('active');
  }

  if (modalClose) modalClose.onclick = () => modal.classList.remove('active');
  if (modal) modal.onclick = e => { if (e.target === modal) modal.classList.remove('active'); };
  const modalAddToCart = document.getElementById('modalAddToCart');
  if (modalAddToCart) modalAddToCart.onclick = () => {
    if (currentProduct) { addToCart(currentProduct); modal.classList.remove('active'); }
  };

  // ---------- Рендер карточек с картинками ----------
  function renderProductCard(product) {
    const div = document.createElement('div');
    div.className = 'product-card';
    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}" onerror="this.src='img/placeholder.jpg'">
      <div class="product-category">${product.category} / ${product.subcategory}</div>
      <div class="product-title">${product.name}</div>
      <div class="product-brand">${product.brandModel}</div>
      <div class="product-sizes"><i class="fas fa-ruler"></i> ${product.sizes}</div>
      <div class="product-price">${product.price.toLocaleString()} <small>₽</small></div>
    `;
    div.addEventListener('click', () => openModal(product));
    return div;
  }

  function renderGrid(containerId, items) {
    const container = document.getElementById(containerId);
    if (container) {
      container.innerHTML = '';
      items.forEach(p => container.appendChild(renderProductCard(p)));
    }
  }

  // ---------- Навигация ----------
  const pages = { home: document.getElementById('home'), products: document.getElementById('products'), contacts: document.getElementById('contacts') };
  const navLinks = document.querySelectorAll('.nav-link');
  function switchPage(pageId) {
    Object.values(pages).forEach(p => { if(p) p.classList.remove('active'); });
    if (pages[pageId]) pages[pageId].classList.add('active');
    navLinks.forEach(link => link.classList.toggle('active', link.dataset.page === pageId));
    if (pageId === 'home') renderGrid('home-featured', productsData.slice(0,4));
    if (pageId === 'products') { populateCategorySelect(); populateSizeFilter(); filterProducts(); }
  }
  navLinks.forEach(link => link.addEventListener('click', e => { e.preventDefault(); switchPage(link.dataset.page); }));

  // ---------- Фильтры (категория/подкатегория/поиск/размер/цена) ----------
  const categoryFilter = document.getElementById('categoryFilter');
  const subcategoryFilter = document.getElementById('subcategoryFilter');
  const searchInput = document.getElementById('searchInput');
  const sizeFilter = document.getElementById('sizeFilter');
  const priceMin = document.getElementById('priceMin');
  const priceMax = document.getElementById('priceMax');

  function populateCategorySelect() {
    if (!categoryFilter) return;
    const cats = [...new Set(productsData.map(p => p.category))];
    categoryFilter.innerHTML = '<option value="">Все категории</option>';
    cats.forEach(c => categoryFilter.innerHTML += `<option value="${c}">${c}</option>`);
    updateSubcategoryOptions();
  }

  function updateSubcategoryOptions() {
    if (!categoryFilter || !subcategoryFilter) return;
    const cat = categoryFilter.value;
    const subs = cat ? [...new Set(productsData.filter(p => p.category === cat).map(p => p.subcategory))] : [...new Set(productsData.map(p => p.subcategory))];
    subcategoryFilter.innerHTML = '<option value="">Все подкатегории</option>';
    subs.forEach(s => subcategoryFilter.innerHTML += `<option value="${s}">${s}</option>`);
  }

  function populateSizeFilter() {
    if (!sizeFilter) return;
    const sizes = [...new Set(productsData.flatMap(p => p.sizes.split(',').map(s => s.trim())))].sort();
    sizeFilter.innerHTML = '<option value="">Все размеры</option>';
    sizes.forEach(s => sizeFilter.innerHTML += `<option value="${s}">${s}</option>`);
  }

  function filterProducts() {
    const cat = categoryFilter ? categoryFilter.value : '';
    const sub = subcategoryFilter ? subcategoryFilter.value : '';
    const term = searchInput ? searchInput.value.toLowerCase() : '';
    const size = sizeFilter ? sizeFilter.value : '';
    const min = (priceMin && priceMin.value) ? +priceMin.value : 0;
    const max = (priceMax && priceMax.value) ? +priceMax.value : Infinity;

    const filtered = productsData.filter(p => {
      return (!cat || p.category === cat) &&
             (!sub || p.subcategory === sub) &&
             (!term || p.name.toLowerCase().includes(term) || p.brandModel.toLowerCase().includes(term)) &&
             (!size || p.sizes.split(',').map(s => s.trim()).includes(size)) &&
             p.price >= min && p.price <= max;
    });
    renderGrid('filteredProducts', filtered);
  }

  if (categoryFilter) categoryFilter.addEventListener('change', () => { updateSubcategoryOptions(); filterProducts(); });
  if (subcategoryFilter) subcategoryFilter.addEventListener('change', filterProducts);
  if (searchInput) searchInput.addEventListener('input', filterProducts);
  if (sizeFilter) sizeFilter.addEventListener('change', filterProducts);
  if (priceMin) priceMin.addEventListener('input', filterProducts);
  if (priceMax) priceMax.addEventListener('input', filterProducts);

  const resetBtn = document.getElementById('resetProductFilters');
  if (resetBtn) resetBtn.onclick = () => {
    if (categoryFilter) categoryFilter.value = '';
    updateSubcategoryOptions();
    if (subcategoryFilter) subcategoryFilter.value = '';
    if (searchInput) searchInput.value = '';
    if (sizeFilter) sizeFilter.value = '';
    if (priceMin) priceMin.value = '';
    if (priceMax) priceMax.value = '';
    filterProducts();
  };

  // Инициализация
  renderGrid('home-featured', productsData.slice(0,4));
  populateCategorySelect();
  populateSizeFilter();
  filterProducts();
  switchPage('home');
})();