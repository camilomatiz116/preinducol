/**
 * PREINDUCOL S.A.S. - MÓDULO HERO INTERACTIVO CON TRANSICIÓN CINEMÁTICA
 * ESTADO 1 (Intro inicial):
 * - La hormiguita se posiciona a la izquierda.
 * - Al lado de ella aparece el llamado a la acción: "CONOCE NUESTROS PRODUCTOS" (clicable).
 * ESTADO 2 (Showcase revelado - Pantallazo 2):
 * - Al hacer clic (en el texto o en la hormiguita), se produce una transición fluida en animación.
 * - "CONOCE NUESTROS PRODUCTOS" se desvanece por completo.
 * - La hormiguita se traslada suavemente al centro.
 * - Emergen los 4 productos (2 a la izquierda, 2 a la derecha con alineación derecha).
 * - Al volver a tocar la hormiguita, regresa de forma animada al Estado 1.
 */
window.HeroModule = (function () {
  const mountId = 'hero-mount';

  let triggerToggleFn = null;

  function render() {
    return `
    <section class="hero-constellation-stage state-intro" id="inicio">

      <!-- Arena Interactiva -->
      <div class="constellation-arena" id="constellationArena">
        
        <!-- ALA IZQUIERDA: 2 PRODUCTOS (Aparecen en Estado 2) -->
        <div class="constellation-wing wing-left" id="wingLeft">
          
          <!-- TARJETA 1 (Top Left): RUBERPLUS™ -->
          <article class="editorial-product-card card-pos-tl" data-category="hogar" data-target="ruberplus" title="Ver descripción de Ruberplus™">
            <div class="card-overline">PRODUCTO INSIGNIA</div>
            <h3 class="card-main-title">
              <span class="model-text">CUB-07</span>
              <span class="brand-text">RUBERPLUS</span>
            </h3>
            <p class="card-short-desc">
              Látex 100% Biodegradable • Calibre 20 Parejo. Suavidad superior, labrado antideslizante y diseño anatómico curvo de descanso.
            </p>
            <div class="card-cta-wrap">
              <span class="card-cta-btn">
                Ver descripción
                <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </span>
            </div>
          </article>

          <!-- TARJETA 2 (Bottom Left): INDUMAX™ -->
          <article class="editorial-product-card card-pos-bl" data-category="industrial" data-target="indumax" title="Ver descripción de Indumax™">
            <div class="card-overline">LÍNEA INDUSTRIAL SEVERO</div>
            <h3 class="card-main-title">
              <span class="model-text">IND-25</span>
              <span class="brand-text">INDUMAX™</span>
            </h3>
            <p class="card-short-desc">
              Calibre 25 reforzado para manipulación química, agroindustria y floricultura con interior satinado antifatiga.
            </p>
            <div class="card-cta-wrap">
              <span class="card-cta-btn">
                Ver descripción
                <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </span>
            </div>
          </article>

        </div>

        <!-- CENTRO: MASCOTA HORMIGUITA PROTAGONISTA -->
        <div class="constellation-center" id="constellationCenter">
          <div class="orbital-centerpiece" id="heroMascotTrigger" title="¡Tócame para interactuar!">
            
            <!-- Onda de choque expansiva -->
            <div class="mascot-energy-shockwave" id="mascotShockwave"></div>
            <div class="mascot-energy-ring"></div>

            <!-- Contenedor de Poses de la Mascota -->
            <div class="mascot-avatar-stack">
              <!-- Pose 1 (Intro): Guiño y OK -->
              <img src="assets/hormiga2 (1).png" alt="Mascota Preinducol Guiño" class="hero-mascot-img mascot-img-intro" id="heroMascotIntro">
              
              <!-- Pose 2 (Interactivo): Brazos Cruzados -->
              <img src="assets/hormigabrazos.png" alt="Mascota Preinducol Brazos Cruzados" class="hero-mascot-img mascot-img-showcase" id="heroMascotShowcase">
            </div>
            
            <!-- Pedestal de sombra y brillo inferior -->
            <div class="mascot-platform-glow"></div>
            <div class="mascot-floor-shadow"></div>

          </div>
        </div>

        <!-- LLAMADO DE ACCIÓN INICIAL: "CONOCE NUESTROS PRODUCTOS" (Estado 1 - Desaparece en Estado 2) -->
        <div class="hero-intro-callout editorial-product-card" id="heroIntroCallout" role="button" tabindex="0" title="¡Haz clic para ver nuestros productos!">
          <div class="card-overline">PORTAFOLIO EXCLUSIVO</div>
          <h2 class="card-main-title intro-title-styled">
            <span class="model-text">CONOCE NUESTROS</span>
            <span class="brand-text">PRODUCTOS</span>
          </h2>
          <p class="card-short-desc">
            Látex 100% Biodegradable • Calibre Parejo. Suavidad superior, labrado antideslizante y diseño anatómico curvo de descanso.
          </p>
          <div class="card-cta-wrap">
            <span class="card-cta-btn">
              VER PRODUCTOS
              <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </span>
          </div>
        </div>

        <!-- ALA DERECHA: 2 PRODUCTOS (Aparecen en Estado 2 - Alineados a la derecha) -->
        <div class="constellation-wing wing-right" id="wingRight">
          
          <!-- TARJETA 3 (Top Right): NITRILO -->
          <article class="editorial-product-card card-pos-tr" data-category="nitrilo" data-target="nitrilo" title="Ver descripción de Nitrilo Industrial">
            <div class="card-overline">BIOSEGURIDAD & SOLVENTES</div>
            <h3 class="card-main-title">
              <span class="model-text">NIT-100</span>
              <span class="brand-text">NITRILO</span>
            </h3>
            <p class="card-short-desc">
              100% libre de látex y talco. Máxima barrera química contra solventes aromáticos, hidrocarburos, aceites y grasas.
            </p>
            <div class="card-cta-wrap">
              <span class="card-cta-btn">
                Ver descripción
                <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </span>
            </div>
          </article>

          <!-- TARJETA 4 (Bottom Right): CUERO -->
          <article class="editorial-product-card card-pos-br" data-category="cuero" data-target="cuero" title="Ver descripción de Guantes de Cuero">
            <div class="card-overline">SOLDADURA & TRABAJO PESADO</div>
            <h3 class="card-main-title">
              <span class="model-text">CUE-40</span>
              <span class="brand-text">CUERO</span>
            </h3>
            <p class="card-short-desc">
              Cuero vacuno seleccionado para metalmecánica, abrasión y faenas de alta resistencia mecánica y térmica.
            </p>
            <div class="card-cta-wrap">
              <span class="card-cta-btn">
                Ver descripción
                <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </span>
            </div>
          </article>

        </div>

      </div>

    </section>
    `;
  }

  function init() {
    const stageEl = document.getElementById('inicio');
    const mascotTrigger = document.getElementById('heroMascotTrigger');
    const introCallout = document.getElementById('heroIntroCallout');
    const mascotIntro = document.getElementById('heroMascotIntro');
    const mascotShowcase = document.getElementById('heroMascotShowcase');
    const shockwaveEl = document.getElementById('mascotShockwave');
    // Solo las 4 tarjetas de los productos dentro de las alas navegan al catálogo
    const productCards = document.querySelectorAll('.constellation-wing .editorial-product-card');

    let isShowcase = false;

    function toggleHeroState() {
      // Animación de salto de la hormiguita en ambas poses
      [mascotIntro, mascotShowcase].forEach(img => {
        if (img) {
          img.classList.remove('mascot-bouncing');
          void img.offsetWidth;
          img.classList.add('mascot-bouncing');
        }
      });

      if (!isShowcase) {
        // Transición de Estado 1 -> Estado 2 (Abre el Menú Interactivo en el Hero)
        if (shockwaveEl) {
          shockwaveEl.classList.remove('shockwave-active');
          void shockwaveEl.offsetWidth;
          shockwaveEl.classList.add('shockwave-active');
        }

        if (stageEl) {
          stageEl.classList.remove('state-intro');
          stageEl.classList.add('state-showcase');
        }
        isShowcase = true;
      } else {
        // Transición de Estado 2 -> Estado 1 (Regresa hormiga a la izquierda y vuelve el texto)
        if (stageEl) {
          stageEl.classList.remove('state-showcase');
          stageEl.classList.add('state-intro');
        }
        isShowcase = false;
      }
    }

    triggerToggleFn = toggleHeroState;

    // Clic en el bloque "CONOCE NUESTROS PRODUCTOS": abre el menú interactivo directamente
    if (introCallout) {
      introCallout.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleHeroState();
      });
      introCallout.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          e.stopPropagation();
          toggleHeroState();
        }
      });
    }

    // Clic en la hormiguita: abre o repliega el menú interactivo
    if (mascotTrigger) {
      mascotTrigger.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleHeroState();
      });
    }

    // Clic en cualquiera de las 4 tarjetas de las alas: navega a la descripción en el catálogo
    productCards.forEach(card => {
      card.addEventListener('click', (e) => {
        e.preventDefault();
        const category = card.getAttribute('data-category');
        const targetSlug = card.getAttribute('data-target');

        // 1. Activar filtro de categoría en el catálogo
        if (category) {
          const filterBtn = document.querySelector(`.filter-tab[data-filter="${category}"]`);
          if (filterBtn) {
            filterBtn.click();
          }
        }

        // 2. Desplazar suavemente hasta la sección de catálogo
        const catalogSec = document.getElementById('catalogo');
        if (catalogSec) {
          const navOffset = 90;
          const targetY = catalogSec.getBoundingClientRect().top + window.pageYOffset - navOffset;
          window.scrollTo({
            top: targetY,
            behavior: 'smooth'
          });

          // 3. Resaltar la tarjeta correspondiente en el catálogo
          setTimeout(() => {
            let matchingTile = null;
            if (targetSlug === 'ruberplus') {
              matchingTile = document.querySelector('.product-tile.featured-tile');
            } else if (targetSlug === 'indumax') {
              matchingTile = document.querySelector('.product-tile.tile-emerald');
            } else if (targetSlug === 'nitrilo') {
              matchingTile = document.querySelector('.product-tile.tile-cyan');
            } else if (targetSlug === 'cuero') {
              matchingTile = document.querySelector('.product-tile.tile-leather');
            }

            if (matchingTile) {
              matchingTile.classList.remove('tile-highlight-pulse');
              void matchingTile.offsetWidth;
              matchingTile.classList.add('tile-highlight-pulse');
            }
          }, 600);
        }
      });
    });
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
    toggleState: () => { if (triggerToggleFn) triggerToggleFn(); }
  };
})();
