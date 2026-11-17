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
    },
    {
      id: 'showcase-nitrilo',
      themeClass: 'theme-red',
      layoutReverse: true,
      tabName: 'Guantes Nitrilo',
      brandImg: 'assets/logo.png',
      eyebrow: '100% NITRILO SINTÉTICO • CERTIFICADO EN 1186 • LIBRE DE LÁTEX',
      title: 'GUANTES NITRILO™',
      subtitle: 'PROTECTED HANDS • BIOSEGURIDAD & ALTA RESISTENCIA',
      desc: 'Guantes de examen descartables de un solo uso, ambidiestros, sin polvo y no estériles con certificación europea EN 1186. Desarrollados para brindar máxima protección de barrera biológica y química en salud, estética, alimentos y mecánica ligera. Disponibles en línea Economic y Premium Quality.',
      hotspotText: '100% Nitrilo Sintético • Libre de Polvo',
      defaultGloveImg: 'assets/fotosguantes/nitrilo_transparent/guante_nitrilo_negro.png',
      defaultGloveTitle: 'Negro Professional • Talla M',
      threeDSlug: 'nitrilo-100',
      colors: [
        { name: 'Negro', class: 'dot-black', img: 'assets/fotosguantes/nitrilo_transparent/guante_nitrilo_negro.png' },
        { name: 'Rosado', class: 'dot-pink', img: 'assets/fotosguantes/nitrilo_transparent/guante_nitrilo_rosado.png' },
        { name: 'Morado', class: 'dot-purple', img: 'assets/fotosguantes/nitrilo_transparent/guante_nitrilo_morado.png' },
        { name: 'Azul', class: 'dot-blue', img: 'assets/fotosguantes/nitrilo_transparent/guante_nitrilo_azul_hd.png' }
      ],
      photos: [
        { name: 'Negro Professional', src: 'assets/fotosguantes/nitrilo_transparent/guante_nitrilo_negro.png' },
        { name: 'Rosado Premium', src: 'assets/fotosguantes/nitrilo_transparent/guante_nitrilo_rosado.png' },
        { name: 'Morado Light Purple', src: 'assets/fotosguantes/nitrilo_transparent/guante_nitrilo_morado.png' },
        { name: 'Azul Heavy Duty', src: 'assets/fotosguantes/nitrilo_transparent/guante_nitrilo_azul_hd.png' }
      ],
      sizes: ['Talla S (Small)', 'Talla M (Medium)', 'Talla L (Large)', 'Caja x 100 U.', 'Caja HD x 50 U.'],
      defaultSize: 'Talla M (Medium)'
    },
    {
      id: 'showcase-cuero',
      themeClass: 'theme-leather',
      tabName: 'Guantes de Cuero',
      brandImg: 'assets/logo.png',
      eyebrow: '100% CUERO VACUNO SELECCIONADO • SOLDADURA & TRABAJO PESADO',
      title: 'GUANTES DE CUERO™',
      subtitle: 'CUE-40 • PROTECCIÓN TÉRMICA & MECÁNICA SEVERA',
      desc: 'Fabricados en cuero vacuno y carnaza de primera selección con costuras reforzadas en hilo de alta tenacidad. Máxima resistencia a la abrasión, chispas de soldadura, punzonamiento y manipulación de láminas metálicas en metalmecánica, construcción y faenas industriales exigentes.',
      hotspotText: '100% Cuero Vacuno • Costura Reforzada',
      defaultGloveImg: 'assets/fotosguantes/cuero_transparent/Guante de seguridad gris y amarillo.png',
      defaultGloveTitle: 'Vaqueta Mixta Gris & Amarillo • Talla 9',
      threeDSlug: 'cuero-40',
      colors: [
        { name: 'Vaqueta Amarilla', class: 'dot-yellow', img: 'assets/fotosguantes/cuero_transparent/Guante de seguridad gris y amarillo.png' },
        { name: 'Carnaza Soldador', class: 'dot-red', img: 'assets/fotosguantes/cuero_transparent/carnaza.png' },
        { name: 'Vaqueta Gris Claro', class: 'dot-gray', img: 'assets/fotosguantes/cuero_transparent/Guante de trabajo de gamuza gris claro.png' },
        { name: 'Cuero Negro Industrial', class: 'dot-black', img: 'assets/fotosguantes/cuero_transparent/negros2.png' }
      ],
      photos: [
        { name: 'Vaqueta Mixta Gris y Amarillo', src: 'assets/fotosguantes/cuero_transparent/Guante de seguridad gris y amarillo.png' },
        { name: 'Vaqueta Reforzada Puño Largo', src: 'assets/fotosguantes/cuero_transparent/Guante amarillo con puño gris y borde naranja.png' },
        { name: 'Carnaza Soldador Rojo Cobrizo', src: 'assets/fotosguantes/cuero_transparent/carnaza.png' },
        { name: 'Carnaza Industrial Manga Larga', src: 'assets/fotosguantes/cuero_transparent/carnazootro.png' },
        { name: 'Gamuza y Vaqueta Gris', src: 'assets/fotosguantes/cuero_transparent/Guante de trabajo de gamuza gris claro.png' },
        { name: 'Vaqueta Flex Gris', src: 'assets/fotosguantes/cuero_transparent/Guante de trabajo gris claro.png' },
        { name: 'Vaqueta Taller Clásico', src: 'assets/fotosguantes/cuero_transparent/Guante de trabajo gris sobre fondo blanco.png' },
        { name: 'Cuero Negro Trabajo Severo', src: 'assets/fotosguantes/cuero_transparent/negros2.png' },
        { name: 'Cuero Negro Puño Seguro', src: 'assets/fotosguantes/cuero_transparent/negros3.png' }
      ],
      sizes: ['Talla 9 (Estándar)', 'Talla 10 (Grande)', 'Manga Corta (25 cm)', 'Manga Larga (35 cm)', 'Puño Soldador (40 cm)'],
      defaultSize: 'Talla 9 (Estándar)'
    }
  ];

  function renderShowcaseBlock(cat) {
    return `
    <div class="showcase-block ${cat.themeClass} ${cat.layoutReverse ? 'layout-reverse' : ''}" id="${cat.id}">
      <div class="showcase-outer-wrap">
        <div class="alpinestars-card">
          <div class="card-split-body">
            
            <!-- Lado Escenario: Fotografía Oficial del Guante en Gran Formato -->
            <div class="split-left-stage" id="splitStage_${cat.id}">
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

            <!-- Lado Contenido: Bloque Poligonal Diagonal con su Color Propio -->
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
                              data-idx="${idx}"
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
      
      <!-- Barra de Navegación Rápida Superior entre las Líneas -->
      <header class="card-internal-nav sticky-categories-nav">
        <div class="nav-latex-title-wrap">
          <span class="latex-eyebrow">100% LÁTEX NATURAL DE ALTA CALIDAD • LÍNEAS OFICIALES PREINDUCOL</span>
        </div>
        <nav class="card-category-tabs">
          <a href="#showcase-ruberplus" class="cat-nav-anchor active" data-target="showcase-ruberplus">
            <span class="tab-chip-color chip-blue"></span>
            <span class="tab-label-desktop">RUBBERPLUS GUANTES</span>
            <span class="tab-label-mobile">RUBERPLUS</span>
          </a>
          <a href="#showcase-preindumax" class="cat-nav-anchor" data-target="showcase-preindumax">
            <span class="tab-chip-color chip-yellow"></span>
            <span class="tab-label-desktop">GUANTES PREINDUMAX</span>
            <span class="tab-label-mobile">PREINDUMAX</span>
          </a>
          <a href="#showcase-flexiguantes" class="cat-nav-anchor" data-target="showcase-flexiguantes">
            <span class="tab-chip-color chip-green"></span>
            <span class="tab-label-desktop">FLEXI GUANTES</span>
            <span class="tab-label-mobile">FLEXI GUANTES</span>
          </a>
          <a href="#showcase-nitrilo" class="cat-nav-anchor" data-target="showcase-nitrilo">
            <span class="tab-chip-color chip-red"></span>
            <span class="tab-label-desktop">GUANTES NITRILO</span>
            <span class="tab-label-mobile">NITRILO</span>
          </a>
          <a href="#showcase-cuero" class="cat-nav-anchor" data-target="showcase-cuero">
            <span class="tab-chip-color chip-leather"></span>
            <span class="tab-label-desktop">GUANTES DE CUERO</span>
            <span class="tab-label-mobile">CUERO</span>
          </a>
        </nav>
      </header>

      <!-- Portafolio de Líneas Oficiales con Identidad Cromática Propia -->
      <div class="showcases-stack-wrapper">
        ${SHOWCASES_DATA.map(cat => renderShowcaseBlock(cat)).join('')}
      </div>

    </section>
    `;
  }

  const currentPhotoIdx = {
    'showcase-ruberplus': 0,
    'showcase-preindumax': 0,
    'showcase-flexiguantes': 0,
    'showcase-nitrilo': 0,
    'showcase-cuero': 0
  };

  const autoSlideTimers = {};
  const isBlockHovered = {};

  function goToBlockPhoto(blockId, nextIdx) {
    const cat = SHOWCASES_DATA.find(c => c.id === blockId);
    if (!cat || !cat.photos.length) return;

    const total = cat.photos.length;
    const idx = ((nextIdx % total) + total) % total;
    currentPhotoIdx[blockId] = idx;

    const photo = cat.photos[idx];
    setBlockGlovePhoto(blockId, photo.src, photo.name);

    // Actualizar miniatura activa
    const thumbs = document.querySelectorAll(`.cat-photo-thumb[data-block-id="${blockId}"]`);
    thumbs.forEach(t => {
      const tIdx = parseInt(t.getAttribute('data-idx'), 10);
      const isActive = tIdx === idx;
      t.classList.toggle('active', isActive);
      if (isActive) {
        const strip = t.parentElement;
        if (strip && strip.classList.contains('cat-photos-strip')) {
          const targetLeft = t.offsetLeft - (strip.clientWidth / 2) + (t.clientWidth / 2);
          strip.scrollTo({ left: targetLeft, behavior: 'smooth' });
        }
      }
    });

    // Actualizar píldora de color si coincide
    const pills = document.querySelectorAll(`.color-pill[data-block-id="${blockId}"]`);
    pills.forEach(p => {
      const pImg = p.getAttribute('data-img');
      if (pImg === photo.src) {
        pills.forEach(other => other.classList.remove('active'));
        p.classList.add('active');
      }
    });
  }

  function startBlockAutoSlide(blockId, intervalMs = 3000) {
    stopBlockAutoSlide(blockId);
    autoSlideTimers[blockId] = setInterval(() => {
      if (!isBlockHovered[blockId]) {
        const next = (currentPhotoIdx[blockId] || 0) + 1;
        goToBlockPhoto(blockId, next);
      }
    }, intervalMs);
  }

  function stopBlockAutoSlide(blockId) {
    if (autoSlideTimers[blockId]) {
      clearInterval(autoSlideTimers[blockId]);
      delete autoSlideTimers[blockId];
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
      // Clic en miniatura de foto
      const thumbBtn = e.target.closest('.cat-photo-thumb');
      if (thumbBtn) {
        e.preventDefault();
        const blockId = thumbBtn.getAttribute('data-block-id');
        const idx = parseInt(thumbBtn.getAttribute('data-idx'), 10);
        if (blockId && !isNaN(idx)) {
          goToBlockPhoto(blockId, idx);
          startBlockAutoSlide(blockId, 3000);
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
          const cat = SHOWCASES_DATA.find(c => c.id === blockId);
          const foundIdx = cat ? cat.photos.findIndex(p => p.src === img) : -1;
          if (foundIdx !== -1) {
            goToBlockPhoto(blockId, foundIdx);
          } else {
            setBlockGlovePhoto(blockId, img, colorName);
          }
          startBlockAutoSlide(blockId, 3000);
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

    // 3. Pausar al pasar el mouse por encima y reanudar al salir
    document.querySelectorAll('.showcase-block').forEach(block => {
      const blockId = block.id;
      block.addEventListener('mouseenter', () => {
        isBlockHovered[blockId] = true;
      });
      block.addEventListener('mouseleave', () => {
        isBlockHovered[blockId] = false;
      });
    });

    // 4. Iniciar slide automático para cada bloque
    SHOWCASES_DATA.forEach(cat => {
      startBlockAutoSlide(cat.id, 3000);
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
    // 5. Animación de Entrada al Scroll (Salen desde cada lado una sola vez)
    const blocks = container.querySelectorAll('.showcase-block');
    if ('IntersectionObserver' in window) {
      const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            observer.unobserve(entry.target); // Solo se activa una vez al hacer scroll hacia abajo
          }
        });
      }, {
        root: null,
        rootMargin: '0px 0px -8% 0px',
        threshold: 0.10
      });

      blocks.forEach(block => {
        revealObserver.observe(block);
      });
    } else {
      blocks.forEach(b => b.classList.add('is-revealed'));
    }
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
