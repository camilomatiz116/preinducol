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
          
          <!-- TARJETA 1 (Top Left): RUBBERPLUS™ -->
          <article class="editorial-product-card card-pos-tl" data-category="hogar" data-target="ruberplus" title="Ver descripción de Rubberplus™" role="button" tabindex="0">
            <div class="card-overline">LÍNEA PREMIUM</div>
            <h3 class="card-main-title">
              <span class="brand-text">RUBBERPLUS</span>
            </h3>
            <p class="card-short-desc">
              El guante preferido en Colombia. Fabricado con látex 100% natural biodegradable de calibre parejo, diseño anatómico y labrado antideslizante tipo panal.
            </p>
            <div class="card-cta-wrap">
              <span class="card-cta-btn">
                Ver descripción
                <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </span>
            </div>
          </article>

          <!-- TARJETA 2 (Bottom Left): PREINDUMAX™ -->
          <article class="editorial-product-card card-pos-bl" data-category="industrial" data-target="indumax" title="Ver descripción de Preindumax™" role="button" tabindex="0">
            <div class="card-overline">LÍNEA ECONÓMICA</div>
            <h3 class="card-main-title">
              <span class="brand-text">PREINDUMAX™</span>
            </h3>
            <p class="card-short-desc">
              Calibre 25 a 35 reforzado para manipulación química moderada, agroindustria y floricultura con interior satinado antifatiga y orillo enrollado antidesgarre.
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
              <!-- Pose 1 (Intro): Hormiga Final -->
              <img src="assets/hotmigafinal.png" alt="Mascota Preinducol" class="hero-mascot-img mascot-img-intro" id="heroMascotIntro">
              
              <!-- Pose 2 (Interactivo): Hormiga Final -->
              <img src="assets/hotmigafinal.png" alt="Mascota Preinducol" class="hero-mascot-img mascot-img-showcase" id="heroMascotShowcase">
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
            Ingresa aquí y conoce nuestra línea completa de productos: soluciones de máxima calidad, durabilidad y protección pensadas para cada una de tus necesidades.
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
          
          <!-- TARJETA 3 (Top Right): GUANTES DE NITRILO -->
          <article class="editorial-product-card card-pos-tr" data-category="nitrilo" data-target="nitrilo" title="Ver descripción de Guantes de Nitrilo" role="button" tabindex="0">
            <h3 class="card-main-title">
              <span class="brand-text">GUANTES DE NITRILO</span>
            </h3>
            <p class="card-short-desc">
              Guantes descartables sin polvo con certificación EN 1186. Máxima barrera de protección química y biológica contra solventes, aceites y grasas.
            </p>
            <div class="card-cta-wrap">
              <span class="card-cta-btn">
                Ver descripción
                <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </span>
            </div>
          </article>

          <!-- TARJETA 4 (Bottom Right): OTROS PRODUCTOS -->
          <article class="editorial-product-card card-pos-br" data-category="cuero" data-target="cuero" title="Ver otros productos" role="button" tabindex="0">
            <h3 class="card-main-title">
              <span class="brand-text">OTROS PRODUCTOS</span>
            </h3>
            <p class="card-short-desc">
              Línea en cuero vacuno y carnaza con costuras reforzadas de alta tenacidad. Máxima resistencia a abrasión, chispas de soldadura y trabajo pesado.
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
    const productCards = document.querySelectorAll('.constellation-wing .editorial-product-card');

    let isShowcase = false;

    function toggleHeroState() {
      [mascotIntro, mascotShowcase].forEach(img => {
        if (img) {
          img.classList.remove('mascot-bouncing');
          void img.offsetWidth;
          img.classList.add('mascot-bouncing');
        }
      });

      if (!isShowcase) {
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
        if (stageEl) {
          stageEl.classList.remove('state-showcase');
          stageEl.classList.add('state-intro');
        }
        isShowcase = false;
      }
    }

    triggerToggleFn = toggleHeroState;

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

    if (mascotTrigger) {
      mascotTrigger.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleHeroState();
      });
    }

    const TARGET_SHOWCASE_MAP = {
      'ruberplus': 'showcase-ruberplus',
      'indumax': 'showcase-preindumax',
      'nitrilo': 'showcase-nitrilo',
      'cuero': 'showcase-cuero'
    };

    productCards.forEach(card => {
      function navigateToShowcase(e) {
        e.preventDefault();
        e.stopPropagation();
        const targetSlug = card.getAttribute('data-target');
        const targetId = TARGET_SHOWCASE_MAP[targetSlug];
        const targetEl = (targetId && document.getElementById(targetId)) || document.getElementById('categorias');

        if (targetEl) {
          const navOffset = 75;
          const targetY = targetEl.getBoundingClientRect().top + window.pageYOffset - navOffset;
          window.scrollTo({
            top: targetY,
            behavior: 'smooth'
          });

          if (targetId) {
            const tabs = document.querySelectorAll('.cat-nav-anchor');
            tabs.forEach(tab => {
              tab.classList.toggle('active', tab.getAttribute('data-target') === targetId);
            });
          }
        }
      }

      card.addEventListener('click', navigateToShowcase);
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          navigateToShowcase(e);
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
