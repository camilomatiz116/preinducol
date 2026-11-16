/**
 * PREINDUCOL S.A.S. - MÓDULO: NAVBAR (ESTILO STUDDS)
 * Navegación principal, cluster de marca central, enlaces y sincronización de badges
 */
window.NavbarModule = (function () {
  const mountId = 'navbar-mount';

  function render() {
    return `
    <header class="navbar-pro navbar-studds" id="siteHeader">
      
      <!-- Franja Azul Superior Corporativa -->
      <div class="top-brand-bar">
        <div class="top-brand-inner">
          <div class="top-brand-left">
            <a href="tel:+573118420561" class="top-brand-link" title="Llamar a Preinducol">
              <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor">
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              <span>Tel: <strong>+57 311 842 0561</strong></span>
            </a>
            <span class="top-brand-divider">•</span>
            <a href="mailto:contacto@preinducol.com" class="top-brand-link" title="Escribir a Preinducol">
              <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              <span><strong>contacto@preinducol.com</strong></span>
            </a>
          </div>
          <div class="top-brand-right">
            <a href="https://www.preinducol.com" class="top-brand-link" title="Sitio Oficial Preinducol">
              <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2">
                <circle cx="12" cy="12" r="10"/>
                <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
              </svg>
              <span><strong>www.preinducol.com</strong></span>
            </a>
          </div>
        </div>
      </div>

      <div class="nav-wrapper">
        
        <!-- Navegación Izquierda -->
        <nav class="nav-links-left" id="navMenuLeft">
          <ul class="nav-menu-list">
            <li><a href="#inicio" class="nav-anchor active">Inicio</a></li>
            <li><a href="quienes-somos.html" class="nav-anchor">Quiénes Somos</a></li>
            <li><a href="catalogo.html" class="nav-anchor">Catálogo</a></li>
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
                <a href="fichas.html" class="nav-anchor anchor-ft-highlight">
                  <span>Fichas Técnicas</span>
                  <span class="badge-ft-count" id="menuFtCount">4</span>
                </a>
              </li>
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
          <li><a href="quienes-somos.html" class="nav-anchor">Quiénes Somos</a></li>
          <li><a href="catalogo.html" class="nav-anchor">Catálogo</a></li>
          <li><a href="fichas.html" class="nav-anchor">Fichas Técnicas (<span class="mobile-ft-count">4</span>)</a></li>
          <li><a href="#contacto" class="nav-anchor">Contacto & Cotizaciones</a></li>
        </ul>
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

    // Atajo de teclado secreto para administración (Ctrl + Shift + A)
    document.addEventListener('keydown', (e) => {
      if (e.ctrlKey && e.shiftKey && (e.key === 'A' || e.key === 'a')) {
        window.location.href = 'admin.html';
      }
    });

    // Manejo de desplazamiento suave para enlaces con hash (#inicio, #categorias, #contacto)
    document.querySelectorAll('.navbar-studds a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        const hash = anchor.getAttribute('href');
        if (hash && hash.length > 1) {
          const targetEl = document.querySelector(hash);
          if (targetEl) {
            e.preventDefault();
            const navOffset = 75;
            const targetY = targetEl.getBoundingClientRect().top + window.pageYOffset - navOffset;
            window.scrollTo({
              top: targetY,
              behavior: 'smooth'
            });
            const allNavAnchors = document.querySelectorAll('.navbar-studds .nav-anchor');
            allNavAnchors.forEach(a => a.classList.remove('active'));
            anchor.classList.add('active');
          }
        }
      });
    });

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

    // Cargar conteo inicial de fichas técnicas
    try {
      const raw = localStorage.getItem('preinducol_fichas_tecnicas_db');
      if (raw) {
        const list = JSON.parse(raw);
        updateFtBadge(list.length);
      }
    } catch (e) {}
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
