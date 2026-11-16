/**
 * PREINDUCOL S.A.S. - MÓDULO: SHOWCASE INDEPENDIENTE DE LAS 3 LÍNEAS DE LÁTEX
 * 1. RUBERPLUS™ (Azul Corporativo) - Producto Insignia Multiuso + 12 Fotos
 * 2. PREINDUMAX™ (Amarillo / Ámbar Industrial) - Línea Industrial Pesada
 * 3. FLEXI GUANTES™ (Verde Corporativo) - Línea Hogar & Extra Sensibilidad
 *
 * Cada línea tiene su propio bloque editorial completo, diferenciado por color,
 * con su Wendy, guante en gran formato interactivo, selectores y cotización.
 */
window.CategoriesModule = (function () {
  const mountId = 'categories-mount';

  const SHOWCASES_DATA = [
    {
      id: 'showcase-ruberplus',
      themeClass: 'theme-blue',
      tabName: 'Rubberplus Guantes',
      brandImg: 'assets/ima92.png',
      eyebrow: '100% LÁTEX NATURAL • PRODUCTO INSIGNIA',
      title: 'RUBERPLUS™',
      subtitle: 'LÁTEX INDUSTRIAL & HOGAR',
      desc: 'El guante preferido en Colombia. Fabricado con látex 100% natural biodegradable de calibre parejo. Suavidad superior, diseño anatómico curvo de descanso y labrado antideslizante tipo panal de abeja.',
      hotspotText: '100% Látex Natural • Biodegradable',
      defaultGloveImg: 'assets/fotosguantes/ruberplus_transparent/Bright Yellow Textured Rubber Glove.png',
      defaultGloveTitle: 'Amarillo Clásico • Cal. 20',
      threeDSlug: 'ruberplus-20',
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
      id: 'showcase-preindumax',
      themeClass: 'theme-yellow',
      layoutReverse: true,
      tabName: 'Guantes Preindumax',
      brandImg: 'assets/ima91.png',
      eyebrow: '100% LÁTEX NATURAL • INDUSTRIAL SEVERO',
      title: 'PREINDUMAX™',
      subtitle: 'LÍNEA INDUSTRIAL PESADA & AGROINDUSTRIA',
      desc: 'Calibre 25 a 50 reforzado para manipulación química moderada, agroindustria, floricultura y faenas industriales exigentes. Interior satinado antifatiga para jornadas continuas y orillo enrollado antidesgarre.',
      hotspotText: 'Látex Reforzado • Calibre 25 a 50',
      defaultGloveImg: 'assets/fotosguantes/ruberplus_transparent/Black Rubber Glove Product Photo.png',
      defaultGloveTitle: 'Negro Industrial • Calibre 25 a 50',
      threeDSlug: 'indumax-25',
      colors: [
        { name: 'Negro Industrial', class: 'dot-black', img: 'assets/fotosguantes/ruberplus_transparent/Black Rubber Glove Product Photo.png' },
        { name: 'Negro Diamantado', class: 'dot-black', img: 'assets/fotosguantes/ruberplus_transparent/Guante negro largo con textura diamantada.png' },
        { name: 'Ámbar 32L', class: 'dot-yellow', img: 'assets/fotosguantes/ruberplus_transparent/ruberplus32l.png' },
        { name: 'Extrapesado 64XL', class: 'dot-gray', img: 'assets/fotosguantes/ruberplus_transparent/guante64xl.png' }
      ],
      photos: [
        { name: 'Negro Industrial', src: 'assets/fotosguantes/ruberplus_transparent/Black Rubber Glove Product Photo.png' },
        { name: 'Manga Larga Diamantada', src: 'assets/fotosguantes/ruberplus_transparent/Guante negro largo con textura diamantada.png' },
        { name: 'Calibre 32L Semipesado', src: 'assets/fotosguantes/ruberplus_transparent/ruberplus32l.png' },
        { name: 'Calibre 64XL Extrapesado', src: 'assets/fotosguantes/ruberplus_transparent/guante64xl.png' }
      ],
      sizes: ['Cal. 25', 'Cal. 35', 'Cal. 40', 'Cal. 50', 'Talla 8', 'Talla 9', 'Talla 10'],
      defaultSize: 'Cal. 35'
    },
    {
      id: 'showcase-flexiguantes',
      themeClass: 'theme-green',
      tabName: 'Flexi Guantes',
      brandImg: 'assets/ima93.png',
      eyebrow: '100% LÁTEX NATURAL • LÍNEA HOGAR & CONFORT',
      title: 'FLEXI GUANTES™',
      subtitle: 'EXTRA FLEXIBILIDAD & ALTA SENSIBILIDAD',
      desc: 'Formulación ultraelástica para máxima sensibilidad táctil y confort superior en labores domésticas, aseo general, manipulación de alimentos y hotelería. Alta resistencia al desgarro con tacto sedoso.',
      hotspotText: 'Alta Sensibilidad • Tacto Sedoso',
      defaultGloveImg: 'assets/fotosguantes/ruberplus_transparent/Bright Yellow Textured Rubber Glove.png',
      defaultGloveTitle: 'Amarillo Hogar • Extra Confort',
      threeDSlug: 'ruberplus-20',
      colors: [
        { name: 'Amarillo Hogar', class: 'dot-yellow', img: 'assets/fotosguantes/ruberplus_transparent/Bright Yellow Textured Rubber Glove.png' },
        { name: 'Verde Aseo', class: 'dot-green', img: 'assets/fotosguantes/ruberplus_transparent/Guante de limpieza verde texturizado.png' },
        { name: 'Azul Institucional', class: 'dot-blue', img: 'assets/fotosguantes/ruberplus_transparent/Guante azul con textura de agarre.png' },
        { name: 'Rojo Confort', class: 'dot-red', img: 'assets/fotosguantes/ruberplus_transparent/Guante rojo de limpieza con textura y talla 8.png' }
      ],
      photos: [
        { name: 'Amarillo Hogar', src: 'assets/fotosguantes/ruberplus_transparent/Bright Yellow Textured Rubber Glove.png' },
        { name: 'Verde Aseo', src: 'assets/fotosguantes/ruberplus_transparent/Guante de limpieza verde texturizado.png' },
        { name: 'Azul Institucional', src: 'assets/fotosguantes/ruberplus_transparent/Guante azul con textura de agarre.png' },
        { name: 'Rojo Confort', src: 'assets/fotosguantes/ruberplus_transparent/Guante rojo de limpieza con textura y talla 8.png' }
      ],
      sizes: ['Cal. 18', 'Cal. 20', 'Cal. 22', 'Talla 7', 'Talla 8', 'Talla 8.5'],
      defaultSize: 'Cal. 20'
    }
  ];

  // Estado del modo foco por cada bloque
  const gloveFocusState = {
    'showcase-ruberplus': false,
    'showcase-preindumax': false,
    'showcase-flexiguantes': false
  };

  function renderShowcaseBlock(cat) {
    return `
    <div class="showcase-block ${cat.themeClass} ${cat.layoutReverse ? 'layout-reverse' : ''}" id="${cat.id}">
      <div class="showcase-outer-wrap">
        <div class="alpinestars-card">
          <div class="card-split-body">
            
            <!-- Lado Izquierdo: Wendy O Guante en Grande -->
            <div class="split-left-stage" id="splitStage_${cat.id}">
              
              <!-- Botón flotante para alternar vista -->
              <button class="btn-view-toggle" data-block-id="${cat.id}" type="button" title="Alternar entre Wendy y el Guante">
                <span class="toggle-icon">🧤</span>
                <span class="toggle-label">Ver Guante Ampliado</span>
              </button>

              <!-- Vista 1: Wendy Hormiga 3 -->
              <div class="mascot-hero-wrap">
                <img src="assets/hormiga-3.png" alt="Wendy Mascota Preinducol" class="mascot-hero-img">
                
                <div class="hero-hotspot" title="${cat.hotspotText}">
                  <span class="hotspot-pulse"></span>
                  <span class="hotspot-icon">+</span>
                  <span class="hotspot-tooltip">${cat.hotspotText}</span>
                </div>
                
                <div class="mascot-floor-shadow"></div>
              </div>

              <!-- Vista 2: Guante en Gran Formato -->
              <div class="stage-large-glove" title="Fotografía oficial en alta resolución">
                <div class="glove-aura-glow"></div>
                <img src="${cat.defaultGloveImg}" 
                     alt="${cat.title}" 
                     class="large-glove-img" 
                     id="gloveImg_${cat.id}">
                <div class="large-glove-shadow"></div>
                <div class="large-glove-badge">
                  <span class="badge-dot-live"></span>
                  <span class="badge-text-val" id="gloveLabel_${cat.id}">${cat.defaultGloveTitle}</span>
                </div>
              </div>

            </div>

            <!-- Lado Derecho: Bloque Poligonal Diagonal con su Color Propio -->
            <div class="split-right-diagonal">
              <div class="diagonal-blue-content">
                
                <div class="brand-diamond-wrap">
                  <img src="${cat.brandImg}" alt="${cat.title}" class="blue-brand-diamond-badge">
                </div>
                
                <div class="blue-eyebrow-tag">${cat.eyebrow}</div>
                <h2 class="blue-product-title">${cat.title}</h2>
                <div class="blue-product-subtitle">${cat.subtitle}</div>
                <p class="blue-product-desc">${cat.desc}</p>

                <!-- Tira de Miniaturas de la Línea -->
                <div class="selector-group ruber-gallery-group">
                  <div class="group-label-flex">
                    <label class="group-label">FOTOS DE LA LÍNEA (${cat.photos.length} MODELOS)</label>
                    <span class="photos-strip-hint">Haz clic para ampliar foto</span>
                  </div>
                  <div class="cat-photos-strip">
                    ${cat.photos.map((p, idx) => `
                      <button class="cat-photo-thumb ${idx === 0 ? 'active' : ''}" 
                              data-block-id="${cat.id}"
                              data-src="${p.src}" 
                              data-title="${p.name}" 
                              title="${p.name}">
                        <img src="${p.src}" alt="${p.name}" class="cat-thumb-img" loading="lazy">
                      </button>
                    `).join('')}
                  </div>
                </div>

                <!-- Selector de Acabados / Colores -->
                <div class="selector-group">
                  <label class="group-label">COLOR / ACABADO</label>
                  <div class="color-pills-row">
                    ${cat.colors.map((c, idx) => `
                      <button class="color-pill ${idx === 0 ? 'active' : ''}" 
                              data-block-id="${cat.id}"
                              data-color="${c.name}" 
                              data-img="${c.img}">
                        <span class="color-dot ${c.class}"></span>
                        <span>${c.name}</span>
                      </button>
                    `).join('')}
                  </div>
                </div>

                <!-- Selector de Calibres / Tallas -->
                <div class="selector-group">
                  <label class="group-label">CALIBRE / GROSOR DISPONIBLE</label>
                  <div class="size-pills-row">
                    ${cat.sizes.map((s) => `
                      <button class="size-pill ${s === cat.defaultSize ? 'active' : ''}" data-size="${s}">
                        ${s}
                      </button>
                    `).join('')}
                  </div>
                </div>

                <!-- Fila de Acción y Cotización -->
                <div class="action-footer-row">
                  <div class="factory-info-badge">
                    <span class="factory-tag">VENTA DIRECTA DE FÁBRICA</span>
                    <span class="factory-highlight">CALIBRE 100% HOMOLOGADO</span>
                  </div>
                  <a href="#contacto" class="btn-action-black btn-quote-trigger" data-title="${cat.title}">COTIZAR AHORA</a>
                </div>

              </div>

              <!-- Franja Inferior: Enlace directo al Laboratorio 3D -->
              <a href="visor3d.html?producto=${cat.threeDSlug}" class="bottom-action-banner" title="Abrir Laboratorio 3D de Inspección">
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
    </div>
    `;
  }

  function render() {
    return `
    <section class="section-showcase-alpinestars-multi" id="categorias">
      
      <!-- Barra de Navegación Rápida Superior entre las 3 Líneas -->
      <header class="card-internal-nav sticky-categories-nav">
        <div class="nav-latex-title-wrap">
          <span class="latex-eyebrow">100% LÁTEX NATURAL DE ALTA CALIDAD • LÍNEAS OFICIALES PREINDUCOL</span>
        </div>
        <nav class="card-category-tabs">
          <a href="#showcase-ruberplus" class="cat-nav-anchor active" data-target="showcase-ruberplus">
            <span class="tab-chip-color chip-blue"></span> RUBBERPLUS GUANTES
          </a>
          <a href="#showcase-preindumax" class="cat-nav-anchor" data-target="showcase-preindumax">
            <span class="tab-chip-color chip-yellow"></span> GUANTES PREINDUMAX
          </a>
          <a href="#showcase-flexiguantes" class="cat-nav-anchor" data-target="showcase-flexiguantes">
            <span class="tab-chip-color chip-green"></span> FLEXI GUANTES
          </a>
        </nav>
      </header>

      <!-- Los 3 Modelos Separados con su Propia Identidad Cromática -->
      <div class="showcases-stack-wrapper">
        ${SHOWCASES_DATA.map(cat => renderShowcaseBlock(cat)).join('')}
      </div>

    </section>
    `;
  }

  function toggleBlockGloveMode(blockId, forceMode) {
    if (typeof forceMode === 'boolean') {
      gloveFocusState[blockId] = forceMode;
    } else {
      gloveFocusState[blockId] = !gloveFocusState[blockId];
    }

    const stageEl = document.getElementById(`splitStage_${blockId}`);
    const toggleBtn = document.querySelector(`.btn-view-toggle[data-block-id="${blockId}"]`);
    if (stageEl) {
      if (gloveFocusState[blockId]) {
        stageEl.classList.add('mode-glove-focus');
        if (toggleBtn) {
          toggleBtn.querySelector('.toggle-icon').textContent = '🐜';
          toggleBtn.querySelector('.toggle-label').textContent = 'Ver a Wendy';
        }
      } else {
        stageEl.classList.remove('mode-glove-focus');
        if (toggleBtn) {
          toggleBtn.querySelector('.toggle-icon').textContent = '🧤';
          toggleBtn.querySelector('.toggle-label').textContent = 'Ver Guante Ampliado';
        }
      }
    }
  }

  function setBlockGlovePhoto(blockId, src, labelText) {
    const gloveImg = document.getElementById(`gloveImg_${blockId}`);
    const gloveLabel = document.getElementById(`gloveLabel_${blockId}`);
    if (gloveImg && src) {
      gloveImg.classList.remove('glove-pop-anim');
      void gloveImg.offsetWidth;
      gloveImg.src = src;
      gloveImg.classList.add('glove-pop-anim');
    }
    if (gloveLabel && labelText) {
      gloveLabel.textContent = labelText;
    }
    toggleBlockGloveMode(blockId, true);
  }

  function initListeners() {
    const container = document.getElementById('categorias');
    if (!container) return;

    // 1. Navegación por tabs superiores con scroll suave
    container.querySelectorAll('.cat-nav-anchor').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = anchor.getAttribute('data-target');
        const targetEl = document.getElementById(targetId);
        if (targetEl) {
          container.querySelectorAll('.cat-nav-anchor').forEach(a => a.classList.remove('active'));
          anchor.classList.add('active');
          const navOffset = 65;
          const targetY = targetEl.getBoundingClientRect().top + window.pageYOffset - navOffset;
          window.scrollTo({
            top: targetY,
            behavior: 'smooth'
          });
        }
      });
    });

    // 2. Interacciones dentro de los bloques
    container.addEventListener('click', (e) => {
      // Alternar entre Wendy y el Guante
      const toggleBtn = e.target.closest('.btn-view-toggle');
      if (toggleBtn) {
        e.preventDefault();
        const blockId = toggleBtn.getAttribute('data-block-id');
        if (blockId) toggleBlockGloveMode(blockId);
        return;
      }

      // Clic en miniatura de foto
      const thumbBtn = e.target.closest('.cat-photo-thumb');
      if (thumbBtn) {
        e.preventDefault();
        const blockId = thumbBtn.getAttribute('data-block-id');
        const src = thumbBtn.getAttribute('data-src');
        const title = thumbBtn.getAttribute('data-title');
        
        // Desmarcar otras miniaturas del mismo bloque
        thumbBtn.parentElement.querySelectorAll('.cat-photo-thumb').forEach(t => t.classList.remove('active'));
        thumbBtn.classList.add('active');
        
        if (blockId && src) {
          setBlockGlovePhoto(blockId, src, title);
        }
        return;
      }

      // Clic en píldora de color
      const colorPill = e.target.closest('.color-pill');
      if (colorPill) {
        e.preventDefault();
        const blockId = colorPill.getAttribute('data-block-id');
        const colorName = colorPill.getAttribute('data-color');
        const img = colorPill.getAttribute('data-img');

        colorPill.parentElement.querySelectorAll('.color-pill').forEach(p => p.classList.remove('active'));
        colorPill.classList.add('active');

        if (blockId && img) {
          setBlockGlovePhoto(blockId, img, colorName);
        }
        return;
      }

      // Clic en píldora de talla/calibre
      const sizePill = e.target.closest('.size-pill');
      if (sizePill) {
        e.preventDefault();
        sizePill.parentElement.querySelectorAll('.size-pill').forEach(s => s.classList.remove('active'));
        sizePill.classList.add('active');
        return;
      }

      // Clic en botón de cotizar
      const btnQuote = e.target.closest('.btn-quote-trigger');
      if (btnQuote) {
        if (window.CompanyModule && typeof window.CompanyModule.openQuoteModal === 'function') {
          e.preventDefault();
          const prodTitle = btnQuote.getAttribute('data-title') || 'Guantes Preinducol';
          window.CompanyModule.openQuoteModal(prodTitle);
        }
      }
    });

    // 3. Resaltar pestaña activa según el scroll
    const handleScrollSpy = () => {
      const scrollPos = window.pageYOffset + 120;
      SHOWCASES_DATA.forEach(cat => {
        const el = document.getElementById(cat.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            container.querySelectorAll('.cat-nav-anchor').forEach(a => {
              a.classList.toggle('active', a.getAttribute('data-target') === cat.id);
            });
          }
        }
      });
    };
    window.addEventListener('scroll', handleScrollSpy, { passive: true });
  }

  function selectCategory(idx) {
    if (idx >= 0 && idx < SHOWCASES_DATA.length) {
      const targetCat = SHOWCASES_DATA[idx];
      const targetEl = document.getElementById(targetCat.id);
      if (targetEl) {
        const navOffset = 65;
        const targetY = targetEl.getBoundingClientRect().top + window.pageYOffset - navOffset;
        window.scrollTo({
          top: targetY,
          behavior: 'smooth'
        });
      }
    }
  }

  function mount() {
    const container = document.getElementById(mountId);
    if (container) {
      container.innerHTML = render();
      initListeners();
    }
  }

  return {
    mount,
    selectCategory
  };
})();
