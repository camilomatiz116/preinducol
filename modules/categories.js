/**
 * PREINDUCOL S.A.S. - MÓDULO: CATEGORÍAS (SHOWCASE LÍNEA LÁTEX 100% NATURAL)
 * Exclusivamente las 3 líneas oficiales de Látex Preinducol:
 * 1. Rubberplus Guantes (assets/ima92.png) - Producto Insignia Multiuso + Galería 12 Fotos
 * 2. Guantes Preindumax (assets/ima91.png) - Línea Industrial Severo
 * 3. Flexi Guantes (assets/ima93.png) - Línea Hogar & Alta Sensibilidad
 *
 * Características:
 * - Cambio de información limpio y elegante in-situ (sin desplazamientos que desborden texto)
 * - Wendy (Hormiga 3) a escala grande
 * - Al hacer clic en cualquier foto o acabado, Wendy desaparece suavemente y el guante toma todo el espacio en grande (sin montarse)
 * - Botón de alternancia rápida para volver a ver a Wendy en cualquier momento
 * - Tira de miniaturas de fotos oficiales de Ruberplus
 * - Slide automático cíclico cada 5 segundos (se pausa con la interacción)
 */
window.CategoriesModule = (function () {
  const mountId = 'categories-mount';
  const AUTO_INTERVAL_MS = 5000;

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
      gloveImg: 'assets/fotosguantes/ruberplus_transparent/Bright Yellow Textured Rubber Glove.png',
      gloveTitle: 'Amarillo Clásico • Cal. 20',
      colors: [
        { name: 'Amarillo Clásico', class: 'dot-yellow', img: 'assets/fotosguantes/ruberplus_transparent/Bright Yellow Textured Rubber Glove.png' },
        { name: 'Azul Grip', class: 'dot-blue', img: 'assets/fotosguantes/ruberplus_transparent/Guante azul con textura de agarre.png' },
        { name: 'Verde Aseo', class: 'dot-green', img: 'assets/fotosguantes/ruberplus_transparent/Guante de limpieza verde texturizado.png' },
        { name: 'Rojo Resistencia', class: 'dot-red', img: 'assets/fotosguantes/ruberplus_transparent/Guante rojo de limpieza con textura y talla 8.png' },
        { name: 'Negro Diamantado', class: 'dot-black', img: 'assets/fotosguantes/ruberplus_transparent/Guante negro largo con textura diamantada.png' },
        { name: 'Empaque Oficial', class: 'dot-bicolor', img: 'assets/fotosguantes/ruberplus_transparent/ruberpluss.png' }
      ],
      photos: [
        { name: 'Amarillo Clásico', src: 'assets/fotosguantes/ruberplus_transparent/Bright Yellow Textured Rubber Glove.png' },
        { name: 'Azul Grip', src: 'assets/fotosguantes/ruberplus_transparent/Guante azul con textura de agarre.png' },
        { name: 'Azul Puño Reforzado', src: 'assets/fotosguantes/ruberplus_transparent/Blue Rubber Glove with Textured Cuff.png' },
        { name: 'Verde Aseo', src: 'assets/fotosguantes/ruberplus_transparent/Guante de limpieza verde texturizado.png' },
        { name: 'Rojo Talla 8', src: 'assets/fotosguantes/ruberplus_transparent/Guante rojo de limpieza con textura y talla 8.png' },
        { name: 'Rojo Studio', src: 'assets/fotosguantes/ruberplus_transparent/Red Rubber Glove Studio Shot.png' },
        { name: 'Negro Manga Larga', src: 'assets/fotosguantes/ruberplus_transparent/Guante negro largo con textura diamantada.png' },
        { name: 'Negro Cocina', src: 'assets/fotosguantes/ruberplus_transparent/Guante Negro Texturizado de Cocina.png' },
        { name: 'Negro Industrial', src: 'assets/fotosguantes/ruberplus_transparent/Black Rubber Glove Product Photo.png' },
        { name: 'Empaque Oficial', src: 'assets/fotosguantes/ruberplus_transparent/ruberpluss.png' },
        { name: 'Calibre 32L', src: 'assets/fotosguantes/ruberplus_transparent/ruberplus32l.png' },
        { name: 'Calibre 64XL', src: 'assets/fotosguantes/ruberplus_transparent/guante64xl.png' }
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
      gloveImg: 'assets/fotosguantes/ruberplus_transparent/Black Rubber Glove Product Photo.png',
      gloveTitle: 'Negro Industrial • Calibre 25 a 50',
      colors: [
        { name: 'Negro Industrial', class: 'dot-black', img: 'assets/fotosguantes/ruberplus_transparent/Black Rubber Glove Product Photo.png' },
        { name: 'Bicolor Reforzado', class: 'dot-bicolor', img: 'assets/fotosguantes/ruberplus_transparent/ruberpluss.png' },
        { name: 'Amarillo Cromo', class: 'dot-yellow', img: 'assets/fotosguantes/ruberplus_transparent/Bright Yellow Textured Rubber Glove.png' }
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
      gloveImg: 'assets/guante.png',
      gloveTitle: 'Flexi Guantes • Sensibilidad Superior',
      colors: [
        { name: 'Amarillo Hogar', class: 'dot-yellow', img: 'assets/fotosguantes/ruberplus/Bright Yellow Textured Rubber Glove.png' },
        { name: 'Bicolor Suave', class: 'dot-bicolor', img: 'assets/fotosguantes/ruberplus/ruberpluss.png' }
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
  let isGloveFocusMode = false;

  function renderColorPills(colors) {
    return colors.map((c, idx) => `
      <button class="color-pill ${idx === 0 ? 'active' : ''}" data-color="${c.name}" data-img="${c.img || ''}">
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

  function renderPhotosStrip(photos) {
    if (!photos || photos.length === 0) return '';
    return `
      <div class="selector-group ruber-gallery-group" id="ruberGalleryGroup">
        <div class="group-label-flex">
          <label class="group-label">FOTOS OFICIALES RUBERPLUS™ (${photos.length} MODELOS)</label>
          <span class="photos-strip-hint">Haz clic para ver foto en grande</span>
        </div>
        <div class="cat-photos-strip" id="catPhotosStrip">
          ${photos.map((p, idx) => `
            <button class="cat-photo-thumb ${idx === 0 ? 'active' : ''}" 
                    data-src="${p.src}" 
                    data-title="${p.name}" 
                    title="${p.name}">
              <img src="${p.src}" alt="${p.name}" class="cat-thumb-img" loading="lazy">
            </button>
          `).join('')}
        </div>
      </div>
    `;
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

          <!-- 2. Cuerpo Principal Split: Blanco con Hormiga 3 O Guante en Grande + Diagonal Azul -->
          <div class="card-split-body">
            
            <!-- Lado Izquierdo: Wendy O Guante en Gran Formato (Alternancia Limpia Sin Montarse) -->
            <div class="split-left-stage" id="splitLeftStage">
              
              <!-- Indicadores verticales (3 líneas de slide automático) -->
              <div class="vertical-dashes" id="verticalDashes">
                ${CAT_SHOWCASES.map((_, i) => `
                  <span class="dash-item ${i === currentCatIdx ? 'active' : ''}" data-idx="${i}" title="${CAT_SHOWCASES[i].tabName}"></span>
                `).join('')}
              </div>

              <!-- Botón flotante para alternar vista entre Wendy y el Guante -->
              <button class="btn-view-toggle" id="btnViewToggle" type="button" title="Alternar entre Wendy y el Guante">
                <span class="toggle-icon" id="toggleIcon">🧤</span>
                <span class="toggle-label" id="toggleLabelText">Ver Guante Ampliado</span>
              </button>

              <!-- Vista 1: Wendy Hormiga 3 en gran tamaño señalando hacia la derecha -->
              <div class="mascot-hero-wrap" id="mascotHeroWrap">
                <img src="assets/hormiga-3.png" alt="Wendy Mascota Preinducol" class="mascot-hero-img" id="mascotHeroImg">
                
                <!-- Hotspot interactivo pulsante (+) -->
                <div class="hero-hotspot" id="heroHotspot" title="${current.hotspotText}">
                  <span class="hotspot-pulse"></span>
                  <span class="hotspot-icon">+</span>
                  <span class="hotspot-tooltip" id="hotspotTooltip">${current.hotspotText}</span>
                </div>
                
                <div class="mascot-floor-shadow"></div>
              </div>

              <!-- Vista 2: Escenario del Guante en Grande (Aparece al hacer clic en fotos, sin montarse con Wendy) -->
              <div class="stage-large-glove" id="stageLargeGlove" title="Fotografía oficial en alta resolución">
                <div class="glove-aura-glow"></div>
                <img src="${current.gloveImg}" 
                     alt="${current.title}" 
                     class="large-glove-img" 
                     id="categoryGloveImg">
                <div class="large-glove-shadow"></div>
                <div class="large-glove-badge" id="floatingGloveChip">
                  <span class="badge-dot-live"></span>
                  <span class="badge-text-val" id="gloveChipText">${current.gloveTitle}</span>
                </div>
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

                <!-- Galería Fotográfica de la Línea (Visible en Rubberplus) -->
                <div id="photosStripContainer">
                  ${renderPhotosStrip(current.photos)}
                </div>

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
              <a href="visor3d.html?producto=ruberplus-20" class="bottom-action-banner" title="Abrir Laboratorio 3D de Inspección">
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

  function toggleGloveMode(forceMode) {
    if (typeof forceMode === 'boolean') {
      isGloveFocusMode = forceMode;
    } else {
      isGloveFocusMode = !isGloveFocusMode;
    }

    const stageEl = document.getElementById('splitLeftStage');
    const toggleIcon = document.getElementById('toggleIcon');
    const toggleLabel = document.getElementById('toggleLabelText');

    if (stageEl) {
      if (isGloveFocusMode) {
        stageEl.classList.add('mode-glove-focus');
        if (toggleIcon) toggleIcon.textContent = '🐜';
        if (toggleLabel) toggleLabel.textContent = 'Ver a Wendy';
      } else {
        stageEl.classList.remove('mode-glove-focus');
        if (toggleIcon) toggleIcon.textContent = '🧤';
        if (toggleLabel) toggleLabel.textContent = 'Ver Guante Ampliado';
      }
    }
  }

  function setGlovePhoto(src, labelText, triggerFocus) {
    const gloveImg = document.getElementById('categoryGloveImg');
    const gloveChipText = document.getElementById('gloveChipText');
    if (gloveImg && src) {
      gloveImg.classList.remove('glove-pop-anim');
      void gloveImg.offsetWidth;
      gloveImg.src = src;
      gloveImg.classList.add('glove-pop-anim');
    }
    if (gloveChipText && labelText) {
      gloveChipText.textContent = labelText;
    }
    if (triggerFocus) {
      toggleGloveMode(true);
    }
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

      // 2. Galería de fotos (si aplica a esta categoría)
      const photosContainer = document.getElementById('photosStripContainer');
      if (photosContainer) {
        photosContainer.innerHTML = renderPhotosStrip(current.photos);
      }

      // 3. Guante flotante
      setGlovePhoto(current.gloveImg, current.gloveTitle, false);

      // 4. Selectores
      const colorsRow = document.getElementById('colorPillsRow');
      if (colorsRow) colorsRow.innerHTML = renderColorPills(current.colors);

      const sizesRow = document.getElementById('sizePillsRow');
      if (sizesRow) sizesRow.innerHTML = renderSizePills(current.sizes, current.defaultSize);

      selectedSize = current.defaultSize;
      selectedColor = current.colors[0].name;

      // 5. Tabs superiores y dashes verticales
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
      if (!isHovered && !isGloveFocusMode) {
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
      // Click en botón alternar vista (Wendy <-> Guante)
      const btnToggle = e.target.closest('#btnViewToggle');
      if (btnToggle) {
        e.preventDefault();
        toggleGloveMode();
        return;
      }

      // Click en tab superior
      const tabBtn = e.target.closest('.cat-tab-btn');
      if (tabBtn) {
        const idx = parseInt(tabBtn.getAttribute('data-cat-idx'), 10);
        if (!isNaN(idx) && idx !== currentCatIdx) {
          toggleGloveMode(false); // Vuelve a mostrar a Wendy al cambiar de pestaña
          goToSlide(idx);
          startAutoSlide();
        }
        return;
      }

      // Click en miniatura de foto de la tira: activa modo guante en grande
      const photoThumb = e.target.closest('.cat-photo-thumb');
      if (photoThumb) {
        document.querySelectorAll('.cat-photo-thumb').forEach(t => t.classList.remove('active'));
        photoThumb.classList.add('active');
        const src = photoThumb.getAttribute('data-src');
        const title = photoThumb.getAttribute('data-title');
        setGlovePhoto(src, title, true); // true = activa el guante en grande y oculta la hormiga
        return;
      }

      // Click en dash vertical
      const dashItem = e.target.closest('.dash-item');
      if (dashItem) {
        const idx = parseInt(dashItem.getAttribute('data-idx'), 10);
        if (!isNaN(idx) && idx !== currentCatIdx) {
          toggleGloveMode(false);
          goToSlide(idx);
          startAutoSlide();
        }
        return;
      }

      // Click en píldora de color: activa el guante correspondiente
      const colorPill = e.target.closest('.color-pill');
      if (colorPill) {
        document.querySelectorAll('.color-pill').forEach(p => p.classList.remove('active'));
        colorPill.classList.add('active');
        selectedColor = colorPill.getAttribute('data-color') || '';
        const img = colorPill.getAttribute('data-img');
        if (img) {
          setGlovePhoto(img, selectedColor, true); // true = activa el guante en grande
        }
        return;
      }

      // Click en píldora de calibre/talla
      const sizePill = e.target.closest('.size-pill');
      if (sizePill) {
        document.querySelectorAll('.size-pill').forEach(p => p.classList.remove('active'));
        sizePill.classList.add('active');
        selectedSize = sizePill.getAttribute('data-size') || '';
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
      toggleGloveMode(false);
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
    stopAutoSlide,
    toggleGloveMode
  };
})();
