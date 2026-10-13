/**
 * PREINDUCOL S.A.S. - MÓDULO: NAVBAR (ESTILO STUDDS)
 * Navegación principal, cluster de marca central, enlaces y sincronización de badges
 */
window.NavbarModule = (function () {
  const mountId = 'navbar-mount';

  function render() {
    return `
    <header class="navbar-pro navbar-studds" id="siteHeader">
      <div class="nav-wrapper">
        
        <!-- Navegación Izquierda -->
        <nav class="nav-links-left" id="navMenuLeft">
          <ul class="nav-menu-list">
            <li><a href="#inicio" class="nav-anchor active">Inicio</a></li>
            <li><a href="#categorias" class="nav-anchor">Categorías</a></li>
            <li><a href="#catalogo" class="nav-anchor">Catálogo</a></li>
          </ul>
        </nav>

        <!-- Logotipo Central Destacado (Studds Style Center Brand) -->
        <a href="#inicio" class="nav-brand-center" title="Preinducol S.A.S. - Inicio">
          <div class="logo-box">
            <img src="assets/logo.png" alt="Preinducol S.A.S." class="main-logo">
          </div>
        </a>

        <!-- Cluster Derecho: Enlaces + Botones de Acción -->
        <div class="nav-right-cluster">
          <nav class="nav-links-right" id="navMenuRight">
            <ul class="nav-menu-list">
              <li class="nav-ft-item">
                <a href="#fichas-tecnicas" class="nav-anchor anchor-ft-highlight">
                  <span>Fichas Técnicas</span>
                  <span class="badge-ft-count" id="menuFtCount">4</span>
                </a>
              </li>
              <li><a href="#manufactura" class="nav-anchor">Planta</a></li>
              <li><a href="#contacto" class="nav-anchor">Contacto</a></li>
            </ul>
          </nav>

          <div class="nav-actions">
            <!-- Botón Móvil -->
            <button class="mobile-hamburger" id="mobileToggle" aria-label="Abrir Menú">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>

      </div>

      <!-- Menú Móvil Desplegable (Estrictamente oculto en Desktop) -->
      <div class="mobile-drawer" id="mobileDrawer" style="display: none;">
        <ul class="mobile-menu-list">
          <li><a href="#inicio" class="nav-anchor">Inicio</a></li>
          <li><a href="#categorias" class="nav-anchor">Categorías</a></li>
          <li><a href="#fichas-tecnicas" class="nav-anchor">Fichas Técnicas (<span class="mobile-ft-count">4</span>)</a></li>
          <li><a href="#catalogo" class="nav-anchor">Catálogo</a></li>
          <li><a href="#manufactura" class="nav-anchor">Planta & Proceso</a></li>
          <li><a href="#nosotros" class="nav-anchor">Nosotros</a></li>
          <li><a href="#contacto" class="nav-anchor">Contacto & Cotizaciones</a></li>
        </ul>
        <button class="btn-admin-ft-quick full-width" id="btnOpenAdminMobile">
          ⚙️ Administrar Fichas Técnicas (Admin)
        </button>
      </div>
    </header>
    `;
  }

  function init() {
    const mobileToggle = document.getElementById('mobileToggle');
    const mobileDrawer = document.getElementById('mobileDrawer');

    if (mobileToggle && mobileDrawer) {
      mobileToggle.addEventListener('click', () => {
        const isHidden = mobileDrawer.style.display === 'none' || !mobileDrawer.classList.contains('active');
        if (isHidden) {
          mobileDrawer.style.display = 'block';
          mobileDrawer.classList.add('active');
          mobileToggle.classList.add('open');
        } else {
          mobileDrawer.style.display = 'none';
          mobileDrawer.classList.remove('active');
          mobileToggle.classList.remove('open');
        }
      });

      // Cerrar al hacer clic en enlaces del drawer
      mobileDrawer.querySelectorAll('a').forEach(anchor => {
        anchor.addEventListener('click', () => {
          mobileDrawer.style.display = 'none';
          mobileDrawer.classList.remove('active');
          mobileToggle.classList.remove('open');
        });
      });
    }

    // Scroll spy para marcar enlace activo
    const sections = document.querySelectorAll('section[id]');
    const navAnchors = document.querySelectorAll('.nav-links-left .nav-anchor, .nav-links-right .nav-anchor');

    window.addEventListener('scroll', () => {
      let currentSectionId = '';
      const scrollPos = window.scrollY + 100;

      sections.forEach(sec => {
        const top = sec.offsetTop;
        const height = sec.offsetHeight;
        if (scrollPos >= top && scrollPos < top + height) {
          currentSectionId = sec.getAttribute('id');
        }
      });

      if (currentSectionId) {
        navAnchors.forEach(a => {
          const href = a.getAttribute('href');
          if (href === `#${currentSectionId}`) {
            a.classList.add('active');
          } else {
            a.classList.remove('active');
          }
        });
      }
    });

    // Botones rápidos para abrir el admin
    const btnQuick = document.getElementById('btnOpenAdminQuick');
    const btnMobileAdmin = document.getElementById('btnOpenAdminMobile');
    const openAdminHandler = () => {
      if (window.FichasModule && typeof window.FichasModule.openAdminModal === 'function') {
        window.FichasModule.openAdminModal();
      }
    };
    if (btnQuick) btnQuick.addEventListener('click', openAdminHandler);
    if (btnMobileAdmin) btnMobileAdmin.addEventListener('click', openAdminHandler);
  }

  function updateFtBadge(count) {
    const badge = document.getElementById('menuFtCount');
    const mobileBadge = document.querySelector('.mobile-ft-count');
    if (badge) badge.textContent = count;
    if (mobileBadge) mobileBadge.textContent = count;
  }

  function mount() {
    const container = document.getElementById(mountId);
    if (container) {
      if (!container.querySelector('.navbar-studds')) {
        container.innerHTML = render();
      }
      init();
    }
  }

  return {
    mount,
    updateFtBadge
  };
})();
