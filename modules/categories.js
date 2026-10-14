/**
 * PREINDUCOL S.A.S. - MÓDULO: CATEGORÍAS (SHOWCASE LÍNEA LÁTEX 100% NATURAL)
 * Exclusivamente las 3 líneas oficiales de Látex Preinducol:
 * 1. Rubberplus Guantes (assets/ima92.png) - Producto Insignia Multiuso
 * 2. Guantes Preindumax (assets/ima91.png) - Línea Industrial Severo
 * 3. Flexi Guantes (assets/ima93.png) - Línea Hogar & Alta Sensibilidad
 *
 * Características:
 * - Cambio de información limpio y elegante in-situ (sin desplazamientos que desborden texto)
 * - Wendy (Hormiga 3) a escala grande
 * - Slide automático cíclico cada 4 segundos
 * - Pausa en hover e interacción manual fluida
 */
window.CategoriesModule = (function () {
  const mountId = 'categories-mount';
  const AUTO_INTERVAL_MS = 4000; // 4 segundos entre cambios de guante

  const CAT_SHOWCASES = [
    {
      idx: 0,
      tabName: 'Rubberplus Guantes',
      brandImg: 'assets/ima92.png',
      eyebrow: '100% LÁTEX NATURAL • PRODUCTO INSIGNIA',
      title: 'RUBERPLUS™',
      subtitle: 'LÁTEX INDUSTRIAL & HOGAR',
      desc: 'El guante preferido en Colombia. Fabricado con látex 100% natural biodegradable de calibre parejo. Suavidad superior, diseño anatómico curvo de descanso y labrado antideslizante tipo panal de abeja.',
      hotspotText: '100% Látex Natural • Biodegradable',
      colors: [
        { name: 'Amarillo Clásico', class: 'dot-yellow' },
        { name: 'Bicolor Satinado', class: 'dot-bicolor' }
      ],
      sizes: ['Cal. 20', 'Cal. 25', 'Cal. 35', 'Cal. 50', 'Talla 7', 'Talla 8', 'Talla 9'],
      defaultSize: 'Cal. 25'
    },
    {
      idx: 1,
      tabName: 'Guantes Preindumax',
      brandImg: 'assets/ima91.png',
      eyebrow: '100% LÁTEX NATURAL • INDUSTRIAL SEVERO',
      title: 'PREINDUMAX™',
      subtitle: 'LÍNEA INDUSTRIAL PESADA',
      desc: 'Calibre 25 a 50 reforzado para manipulación química moderada, agroindustria, floricultura y faenas industriales exigentes. Interior satinado antifatiga para jornadas continuas.',
      hotspotText: 'Látex Reforzado • Calibre 25 a 50',
      colors: [
        { name: 'Negro Industrial', class: 'dot-black' },
        { name: 'Bicolor Reforzado', class: 'dot-bicolor' },
        { name: 'Amarillo Cromo', class: 'dot-yellow' }
      ],
      sizes: ['Cal. 25', 'Cal. 35', 'Cal. 40', 'Cal. 50', 'Talla 8', 'Talla 9', 'Talla 10'],
      defaultSize: 'Cal. 35'
    },
    {
      idx: 2,
      tabName: 'Flexi Guantes',
      brandImg: 'assets/ima93.png',
      eyebrow: '100% LÁTEX NATURAL • LÍNEA HOGAR',
      title: 'FLEXI GUANTES™',
      subtitle: 'EXTRA FLEXIBILIDAD & CONFORT',
      desc: 'Formulación ultraelástica para máxima sensibilidad táctil y confort superior en labores domésticas, aseo general, manipulación de alimentos y hotelería. Alta resistencia al desgarro.',
      hotspotText: 'Alta Sensibilidad • Tacto Sedoso',
      colors: [
        { name: 'Amarillo Hogar', class: 'dot-yellow' },
        { name: 'Bicolor Suave', class: 'dot-bicolor' }
      ],
      sizes: ['Cal. 18', 'Cal. 20', 'Cal. 22', 'Talla 7', 'Talla 8', 'Talla 8.5'],
      defaultSize: 'Cal. 20'
    }
  ];

  let currentCatIdx = 0;
  let selectedSize = '';
  let selectedColor = '';
  let autoSlideTimer = null;
  let isHovered = false;

  function renderColorPills(colors) {
    return colors.map((c, idx) => `
      <button class="color-pill ${idx === 0 ? 'active' : ''}" data-color="${c.name}">
        <span class="color-dot ${c.class}"></span>
        <span>${c.name}</span>
      </button>
    `).join('');
  }

  function renderSizePills(sizes, defaultSize) {
    return sizes.map((s) => `
      <button class="size-pill ${s === defaultSize ? 'active' : ''}" data-size="${s}">
        ${s}
      </button>
    `).join('');
  }

  function render() {
    const current = CAT_SHOWCASES[currentCatIdx];
    selectedSize = current.defaultSize;
    selectedColor = current.colors[0].name;

    return `
    <section class="section-showcase-alpinestars" id="categorias">
      <div class="showcase-outer-wrap">
        
        <!-- Contenedor Integrado a la Página -->
        <div class="alpinestars-card">
          
          <!-- 1. Barra de Navegación de las 3 Líneas Látex -->
          <header class="card-internal-nav">
            <div class="nav-latex-title-wrap">
              <span class="latex-eyebrow">100% LÁTEX NATURAL DE ALTA CALIDAD</span>
            </div>
            <nav class="card-category-tabs" id="cardCategoryTabs">
              ${CAT_SHOWCASES.map((cat, i) => `
                <button class="cat-tab-btn ${i === currentCatIdx ? 'active' : ''}" data-cat-idx="${i}">
                  ${cat.tabName}
                </button>
              `).join('')}
            </nav>
          </header>

          <!-- 2. Cuerpo Principal Split: Blanco con Hormiga 3 + Diagonal Azul -->
          <div class="card-split-body">
            
            <!-- Lado Izquierdo: Fondo Limpio con Wendy (Hormiga 3) a Gran Escala -->
            <div class="split-left-stage">
              
              <!-- Indicadores verticales (3 líneas de slide automático) -->
              <div class="vertical-dashes" id="verticalDashes">
                ${CAT_SHOWCASES.map((_, i) => `
                  <span class="dash-item ${i === currentCatIdx ? 'active' : ''}" data-idx="${i}" title="${CAT_SHOWCASES[i].tabName}"></span>
                `).join('')}
              </div>

              <!-- Wendy Hormiga 3 en gran tamaño señalando hacia la derecha -->
              <div class="mascot-hero-wrap">
                <img src="assets/hormiga-3.png" alt="Wendy Mascota Preinducol" class="mascot-hero-img" id="mascotHeroImg">
                
                <!-- Hotspot interactivo pulsante (+) -->
                <div class="hero-hotspot" id="heroHotspot" title="${current.hotspotText}">
                  <span class="hotspot-pulse"></span>
                  <span class="hotspot-icon">+</span>
                  <span class="hotspot-tooltip" id="hotspotTooltip">${current.hotspotText}</span>
                </div>
                
                <div class="mascot-floor-shadow"></div>
              </div>

            </div>

            <!-- Lado Derecho: Bloque Poligonal Diagonal Azul Corporativo (Información Única en Transición) -->
            <div class="split-right-diagonal">
              
              <div class="diagonal-blue-content" id="diagonalBlueContent">
                
                <!-- Rombo Oficial de la Línea (ima91 / ima92 / ima93) -->
                <div class="brand-diamond-wrap">
                  <img src="${current.brandImg}" alt="${current.title}" class="blue-brand-diamond-badge" id="blueBrandBadge">
                </div>
                
                <div class="blue-eyebrow-tag" id="blueCategoryEyebrow">${current.eyebrow}</div>
                
                <h2 class="blue-product-title" id="blueProductTitle">${current.title}</h2>
                <div class="blue-product-subtitle" id="blueProductSubtitle">${current.subtitle}</div>
                
                <p class="blue-product-desc" id="blueProductDesc">${current.desc}</p>

                <!-- Selector de Acabados / Colores -->
                <div class="selector-group">
                  <label class="group-label">COLOR / ACABADO</label>
                  <div class="color-pills-row" id="colorPillsRow">
                    ${renderColorPills(current.colors)}
                  </div>
                </div>

                <!-- Selector de Calibres / Tallas -->
                <div class="selector-group">
                  <label class="group-label">CALIBRE / GROSOR DISPONIBLE</label>
                  <div class="size-pills-row" id="sizePillsRow">
                    ${renderSizePills(current.sizes, current.defaultSize)}
                  </div>
                </div>

                <!-- Fila de Acción y Cotización -->
                <div class="action-footer-row">
                  <div class="factory-info-badge">
                    <span class="factory-tag">VENTA DIRECTA DE FÁBRICA</span>
                    <span class="factory-highlight">CALIBRE 100% HOMOLOGADO</span>
                  </div>
                  <a href="#contacto" class="btn-action-black btn-quote-trigger" id="btnQuoteCategory">COTIZAR AHORA</a>
                </div>

              </div>

              <!-- Franja Inferior: Enlace directo al Laboratorio 3D -->
              <a href="#visor3d" class="bottom-action-banner" title="Abrir Laboratorio 3D de Inspección">
                <div class="action-banner-text">
                  <span class="play-circle-icon">▶</span>
                  <span>VER LABORATORIO 3D Y CONTROL DE CALIDAD EN ACCIÓN</span>
                </div>
                <div class="action-banner-thumb">
                  <img src="assets/guante.png" alt="Visor 3D" class="banner-mini-thumb">
                </div>
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
    `;
  }

  function goToSlide(idx) {
    if (idx < 0 || idx >= CAT_SHOWCASES.length) return;
    currentCatIdx = idx;
    const current = CAT_SHOWCASES[currentCatIdx];

    const contentBox = document.getElementById('diagonalBlueContent');
    if (contentBox) {
      contentBox.classList.add('slide-fading');
    }

    setTimeout(() => {
      // 1. Emblema y Textos
      const brandBadge = document.getElementById('blueBrandBadge');
      const eyebrowEl = document.getElementById('blueCategoryEyebrow');
      const titleEl = document.getElementById('blueProductTitle');
      const subtitleEl = document.getElementById('blueProductSubtitle');
      const descEl = document.getElementById('blueProductDesc');
      const hotspotTooltip = document.getElementById('hotspotTooltip');

      if (brandBadge) brandBadge.src = current.brandImg;
      if (eyebrowEl) eyebrowEl.textContent = current.eyebrow;
      if (titleEl) titleEl.textContent = current.title;
      if (subtitleEl) subtitleEl.textContent = current.subtitle;
      if (descEl) descEl.textContent = current.desc;
      if (hotspotTooltip) hotspotTooltip.textContent = current.hotspotText;

      // 2. Selectores
      const colorsRow = document.getElementById('colorPillsRow');
      if (colorsRow) colorsRow.innerHTML = renderColorPills(current.colors);

      const sizesRow = document.getElementById('sizePillsRow');
      if (sizesRow) sizesRow.innerHTML = renderSizePills(current.sizes, current.defaultSize);

      selectedSize = current.defaultSize;
      selectedColor = current.colors[0].name;

      // 3. Tabs superiores y dashes verticales
      document.querySelectorAll('.cat-tab-btn').forEach((btn, i) => {
        btn.classList.toggle('active', i === currentCatIdx);
      });

      document.querySelectorAll('.dash-item').forEach((dash, i) => {
        dash.classList.toggle('active', i === currentCatIdx);
      });

      if (contentBox) {
        contentBox.classList.remove('slide-fading');
      }
    }, 180);

    // Micro-animación de reactividad en la hormiga
    const mascotImg = document.getElementById('mascotHeroImg');
    if (mascotImg) {
      mascotImg.style.transform = 'scale(0.975)';
      setTimeout(() => {
        mascotImg.style.transform = 'scale(1)';
      }, 180);
    }
  }

  function nextSlide() {
    const nextIdx = (currentCatIdx + 1) % CAT_SHOWCASES.length;
    goToSlide(nextIdx);
  }

  function startAutoSlide() {
    stopAutoSlide();
    autoSlideTimer = setInterval(() => {
      if (!isHovered) {
        nextSlide();
      }
    }, AUTO_INTERVAL_MS);
  }

  function stopAutoSlide() {
    if (autoSlideTimer) {
      clearInterval(autoSlideTimer);
      autoSlideTimer = null;
    }
  }

  function init() {
    const section = document.getElementById('categorias');
    if (!section) return;

    // Pausar slider cuando el usuario pasa el mouse para leer o interactuar
    section.addEventListener('mouseenter', () => {
      isHovered = true;
    });

    section.addEventListener('mouseleave', () => {
      isHovered = false;
    });

    // Eventos interactivos
    section.addEventListener('click', (e) => {
      // Click en tab superior
      const tabBtn = e.target.closest('.cat-tab-btn');
      if (tabBtn) {
        const idx = parseInt(tabBtn.getAttribute('data-cat-idx'), 10);
        if (!isNaN(idx) && idx !== currentCatIdx) {
          goToSlide(idx);
          startAutoSlide();
        }
        return;
      }

      // Click en dash vertical
      const dashItem = e.target.closest('.dash-item');
      if (dashItem) {
        const idx = parseInt(dashItem.getAttribute('data-idx'), 10);
        if (!isNaN(idx) && idx !== currentCatIdx) {
          goToSlide(idx);
          startAutoSlide();
        }
        return;
      }

      // Click en píldora de color
      const colorPill = e.target.closest('.color-pill');
      if (colorPill) {
        document.querySelectorAll('.color-pill').forEach(p => p.classList.remove('active'));
        colorPill.classList.add('active');
        selectedColor = colorPill.getAttribute('data-color') || '';
        startAutoSlide();
        return;
      }

      // Click en píldora de calibre/talla
      const sizePill = e.target.closest('.size-pill');
      if (sizePill) {
        document.querySelectorAll('.size-pill').forEach(p => p.classList.remove('active'));
        sizePill.classList.add('active');
        selectedSize = sizePill.getAttribute('data-size') || '';
        startAutoSlide();
        return;
      }

      // Click en botón cotizar
      const btnQuote = e.target.closest('#btnQuoteCategory');
      if (btnQuote) {
        if (window.CompanyModule && typeof window.CompanyModule.openQuoteModal === 'function') {
          e.preventDefault();
          const current = CAT_SHOWCASES[currentCatIdx];
          window.CompanyModule.openQuoteModal(`${current.title} - ${selectedSize} (${selectedColor})`);
        }
      }
    });

    // Iniciar con el primer slide y disparar autoplay
    goToSlide(0);
    startAutoSlide();
  }

  function selectCategory(idx) {
    if (idx >= 0 && idx < CAT_SHOWCASES.length) {
      goToSlide(idx);
      startAutoSlide();
    }
  }

  function mount() {
    const container = document.getElementById(mountId);
    if (container) {
      container.innerHTML = render();
      init();
    }
  }

  return {
    mount,
    selectCategory,
    startAutoSlide,
    stopAutoSlide
  };
})();
