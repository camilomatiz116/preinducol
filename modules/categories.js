/**
 * PREINDUCOL S.A.S. - MÓDULO: CATEGORÍAS (BANDA CÁLIDA TAUPE CON REPISA FLOTANTE)
 * Inspirado en el showcase "Open Face Helmet" de Studds, con hormiga2 y repisa flotante.
 */
window.CategoriesModule = (function () {
  const mountId = 'categories-mount';

  const CAT_SHOWCASES = [
    {
      title: 'LÁTEX INDUSTRIAL & HOGAR',
      desc: 'Preinducol S.A.S. es líder en la fabricación de guantes de látex 100% natural biodegradable. Diseñados con calibre parejo y alta resistencia para aseo doméstico, agroindustria y plantas de procesamiento.',
      products: [
        { name: 'Ruberplus™ Cal. 20', img: 'assets/guante_palma.png' },
        { name: 'Ruberplus™ Cal. 25', img: 'assets/guante_dorso.png' },
        { name: 'Indumax™ Industrial', img: 'assets/guante.png' }
      ]
    },
    {
      title: 'LÍNEA NITRILO QUÍMICO',
      desc: 'Formulación avanzada de acrilonitrilo butadieno de alta resistencia a derivados del petróleo, disolventes, ácidos y grasas industriales. Cero proteínas alergénicas.',
      products: [
        { name: 'Nitrilo Verde 13 Mil', img: 'assets/guante.png' },
        { name: 'Nitrilo Bicolor Cal. 28', img: 'assets/guante_dorso.png' },
        { name: 'Nitrilo Aflocado', img: 'assets/guante_palma.png' }
      ]
    },
    {
      title: 'CUERO & VAQUETA PESADA',
      desc: 'Guantes de cuero vacuno y carnaza seleccionada para protección en soldadura, manipulación de láminas cortantes, montaje de estructuras y trabajo rudo en construcción.',
      products: [
        { name: 'Vaqueta Tipo Ingeniero', img: 'assets/guante_dorso.png' },
        { name: 'Carnaza Reforzada', img: 'assets/guante.png' },
        { name: 'Soldador Largo 16"', img: 'assets/guante_palma.png' }
      ]
    },
    {
      title: 'DIELÉCTRICOS & ESPECIALES',
      desc: 'Guantes dieléctricos certificados bajo normas ASTM D120 e IEC 60903 para protección de electricistas e ingenieros contra riesgos eléctricos en baja, media y alta tensión.',
      products: [
        { name: 'Dieléctrico Clase 0 (1.000V)', img: 'assets/guante_palma.png' },
        { name: 'Dieléctrico Clase 2 (17.000V)', img: 'assets/guante_dorso.png' },
        { name: 'Protector Cuero Sobre-Guante', img: 'assets/guante.png' }
      ]
    }
  ];

  let currentCatIdx = 0;

  function render() {
    const current = CAT_SHOWCASES[currentCatIdx];
    return `
    <section class="section-studds-categories" id="categorias">
      <div class="container-max">
        
        <!-- Encabezado Editorial en Banda Cálida Taupe -->
        <div class="studds-cat-header-split">
          <div class="cat-title-col">
            <span class="cat-eyebrow-red">Product Categories</span>
            <div class="cat-display-nav">
              <button class="cat-arrow-nav" id="btnCatPrev" aria-label="Categoría anterior">‹</button>
              <h2 class="cat-title-display" id="catDisplayTitle">${current.title}</h2>
              <button class="cat-arrow-nav" id="btnCatNext" aria-label="Categoría siguiente">›</button>
            </div>
          </div>

          <div class="cat-desc-col">
            <p id="catDisplayDesc">${current.desc}</p>
            <div class="cat-pills-row">
              <a href="#fichas-tecnicas" class="btn-pill-studds btn-pill-sm">
                <span>ver fichas de esta línea</span>
              </a>
            </div>
          </div>
        </div>

        <!-- Plataforma de Exhibición / Repisa Flotante (Studds Floating Display Shelf) -->
        <div class="studds-floating-shelf-stage">
          
          <div class="shelf-plank"></div>
          <div class="shelf-shadow"></div>

          <div class="shelf-items-row" id="shelfItemsRow">
            <div class="shelf-item item-mascot">
              <img src="assets/hormiga2 (1).png" alt="Preinducol Mascota Técnica" class="shelf-mascot-img">
              <div class="shelf-caption">Control de Calidad</div>
            </div>

            <div class="shelf-item item-product featured-shelf-product">
              <img src="${current.products[0].img}" alt="${current.products[0].name}" class="shelf-product-img">
              <div class="shelf-badge-tag">${current.products[0].name}</div>
            </div>

            <div class="shelf-item item-product">
              <img src="${current.products[1].img}" alt="${current.products[1].name}" class="shelf-product-img">
              <div class="shelf-badge-tag">${current.products[1].name}</div>
            </div>

            <div class="shelf-item item-product">
              <img src="${current.products[2].img}" alt="${current.products[2].name}" class="shelf-product-img">
              <div class="shelf-badge-tag">${current.products[2].name}</div>
            </div>
          </div>

        </div>

      </div>
    </section>
    `;
  }

  function update() {
    const current = CAT_SHOWCASES[currentCatIdx];
    const titleEl = document.getElementById('catDisplayTitle');
    const descEl = document.getElementById('catDisplayDesc');
    const shelfEl = document.getElementById('shelfItemsRow');

    if (titleEl) titleEl.textContent = current.title;
    if (descEl) descEl.textContent = current.desc;
    if (shelfEl) {
      shelfEl.innerHTML = `
        <div class="shelf-item item-mascot">
          <img src="assets/hormiga2 (1).png" alt="Preinducol Mascota Técnica" class="shelf-mascot-img">
          <div class="shelf-caption">Control de Calidad</div>
        </div>

        <div class="shelf-item item-product featured-shelf-product">
          <img src="${current.products[0].img}" alt="${current.products[0].name}" class="shelf-product-img">
          <div class="shelf-badge-tag">${current.products[0].name}</div>
        </div>

        <div class="shelf-item item-product">
          <img src="${current.products[1].img}" alt="${current.products[1].name}" class="shelf-product-img">
          <div class="shelf-badge-tag">${current.products[1].name}</div>
        </div>

        <div class="shelf-item item-product">
          <img src="${current.products[2].img}" alt="${current.products[2].name}" class="shelf-product-img">
          <div class="shelf-badge-tag">${current.products[2].name}</div>
        </div>
      `;
    }
  }

  function init() {
    const btnPrev = document.getElementById('btnCatPrev');
    const btnNext = document.getElementById('btnCatNext');

    if (btnPrev && btnNext) {
      btnPrev.addEventListener('click', () => {
        currentCatIdx = (currentCatIdx - 1 + CAT_SHOWCASES.length) % CAT_SHOWCASES.length;
        update();
      });

      btnNext.addEventListener('click', () => {
        currentCatIdx = (currentCatIdx + 1) % CAT_SHOWCASES.length;
        update();
      });
    }

    const shelfItemsRow = document.getElementById('shelfItemsRow');
    if (shelfItemsRow) {
      shelfItemsRow.addEventListener('click', (e) => {
        const mascotItem = e.target.closest('.item-mascot');
        if (mascotItem) {
          if (window.HeroModule && typeof window.HeroModule.openCategories === 'function') {
            window.HeroModule.openCategories();
          }
        }
      });
    }
  }

  function selectCategory(idx) {
    if (idx >= 0 && idx < CAT_SHOWCASES.length) {
      currentCatIdx = idx;
      update();
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
    selectCategory
  };
})();
