/**
 * PREINDUCOL S.A.S. - MÓDULO: EMPRESA, PLANTA, CONTACTO & COTIZACIONES
 * Nosotros (Misión/Visión/Valores), Planta de Producción, Sostenibilidad,
 * Formulario de contacto con redirección a WhatsApp y Modal de Cotizaciones.
 */
window.CompanyModule = (function () {
  const mountId = 'company-mount';

  function render() {
    return `
  <section class="section-block" id="nosotros">
    <div class="container-max">
      
      <div class="header-editorial">
        <div class="badge-pill">
          <span>ADN PREINDUCOL</span>
        </div>
        <h2 class="title-editorial">Trabajamos para Proteger tus Manos en el Hogar y la Industria</h2>
        <p class="desc-editorial">
          «En <strong>Preinducol</strong>, no solo fabricamos guantes; creamos confianza, protegemos vidas y construimos un futuro más seguro. Cada pieza es el fruto del esfuerzo colectivo de manos expertas colombianas.»
        </p>
      </div>

      <!-- Cuadrícula Misión & Visión Editorial -->
      <div class="mv-editorial-grid">
        
        <div class="mv-editorial-card mission-box">
          <div class="card-glass-glow"></div>
          <div class="mv-header-row">
            <div class="mv-icon-badge icon-green-glow">
              <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </div>
            <span class="mv-category-tag">MISIÓN CORPORATIVA</span>
          </div>
          <h3 class="mv-headline">Soluciones sostenibles para el cuidado del ser humano</h3>
          <p class="mv-body-text">
            Somos fabricantes y comercializadores de soluciones sostenibles basados en el cuidado del ser humano que protejan la salud, brinden seguridad y contribuyan a preservar el medio ambiente con pasión, compromiso y transformación.
          </p>
          <div class="mv-accent-line"></div>
        </div>

        <div class="mv-editorial-card vision-box">
          <div class="card-glass-glow"></div>
          <div class="mv-header-row">
            <div class="mv-icon-badge icon-cyan-glow">
              <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="m4.93 4.93 4.24 4.24M14.83 9.17l4.24-4.24M14.83 14.83l4.24 4.24M9.17 14.83l-4.24 4.24"/></svg>
            </div>
            <span class="mv-category-tag">VISIÓN 2030</span>
          </div>
          <h3 class="mv-headline">Liderazgo en Colombia y América Latina</h3>
          <p class="mv-body-text">
            Ser la empresa líder en el mercado nacional y latinoamericano que brinde soluciones de protección al servicio y bienestar del ser humano, destacándonos por la innovación tecnológica de nuestros procesos y el respeto ambiental.
          </p>
          <div class="mv-accent-line line-cyan"></div>
        </div>

      </div>

      <!-- 6 Valores Corporativos en Tarjetas Hexa-Tech -->
      <div class="corporate-values-block">
        <div class="values-top-bar">
          <h3 class="values-block-title">Valores Corporativos Preinducol</h3>
          <p class="values-block-subtitle">El código ético y técnico que rige nuestra producción industrial diaria.</p>
        </div>

        <div class="values-deck">
          
          <div class="value-item">
            <div class="v-num">01</div>
            <div class="v-icon">✓</div>
            <h4>Calidad</h4>
            <p>Garantizamos excelencia en cada uno de nuestros productos y servicios con rigurosos ensayos de tensión, elasticidad y hermeticidad.</p>
          </div>

          <div class="value-item">
            <div class="v-num">02</div>
            <div class="v-icon">⚡</div>
            <h4>Innovación</h4>
            <p>Nos esforzamos por mejorar continuamente nuestros procesos, la ergonomía de nuestros moldes y las fórmulas antibacteriales.</p>
          </div>

          <div class="value-item">
            <div class="v-num">03</div>
            <div class="v-icon">🤝</div>
            <h4>Colaboración</h4>
            <p>Promovemos el trabajo conjunto con nuestros clientes, distribuidores y proveedores para alcanzar metas comunes de seguridad.</p>
          </div>

          <div class="value-item">
            <div class="v-num">04</div>
            <div class="v-icon">💬</div>
            <h4>Servicio al Cliente</h4>
            <p>Nos dedicamos con cercanía y rapidez a satisfacer y superar las expectativas de quienes confían en nuestros suministros.</p>
          </div>

          <div class="value-item">
            <div class="v-num">05</div>
            <div class="v-icon">👥</div>
            <h4>Trabajo en Equipo</h4>
            <p>Creemos firmemente en el respeto mutuo, la cooperación y el talento de operarios, supervisores e ingenieros colombianos.</p>
          </div>

          <div class="value-item">
            <div class="v-num">06</div>
            <div class="v-icon">🌿</div>
            <h4>Responsabilidad</h4>
            <p>Actuamos con ética integral, transparencia comercial y compromiso activo en la fabricación de látex biodegradable.</p>
          </div>

        </div>
      </div>

      <!-- Manifiesto de la Marca -->
      <div class="brand-manifesto-card">
        <div class="manifesto-badge">MANIFIESTO INDUSTRIAL PREINDUCOL</div>
        <blockquote class="manifesto-quote">
          «Cuando eliges nuestros guantes, no solo adquieres un producto; <strong>te conectas con el alma de Preinducol</strong>. Porque detrás de cada lote hay una historia, y detrás de cada guante, un ser humano comprometido con la seguridad y el bienestar de quienes construyen el mundo.»
        </blockquote>
        <div class="manifesto-signature">
          <div class="sig-line"></div>
          <span>Familia PREINDUCOL S.A.S. • Industria 100% Colombiana</span>
        </div>
      </div>

    </div>
  </section>

  <!-- ========================================================================= -->
  <!-- SECCIÓN PLANTA DE PRODUCCIÓN & PROCESO DE FABRICACIÓN                     -->
  <!-- ========================================================================= -->
  <section class="section-block bg-dark-industrial" id="manufactura">
    <div class="container-max">
      
      <div class="header-editorial dark-mode-header">
        <div class="badge-pill pill-lime">
          <span>PROCESO DE PRODUCCIÓN</span>
        </div>
        <h2 class="title-editorial text-white">Industria 100% Colombiana: Precisión en Cada Par</h2>
        <p class="desc-editorial text-muted-light">
          Desde los operadores de maquinaria que dominan la precisión, hasta los expertos en control de calidad que certifican cada lote antes de su empaque.
        </p>
      </div>

      <!-- 4 Pasos del Proceso de Fabricación -->
      <div class="manufacturing-steps-grid">
        
        <div class="step-card">
          <div class="step-counter">ETAPA 01</div>
          <div class="step-icon-circle">🌱</div>
          <h4>Látex Natural Puro</h4>
          <p>Recepción y selección de látex natural extraído responsablemente de plantaciones renovables, libre de impurezas y con alta concentración de sólidos.</p>
          <span class="step-sub-tag">Materia Prima Renovable</span>
        </div>

        <div class="step-card">
          <div class="step-counter">ETAPA 02</div>
          <div class="step-icon-circle">🧪</div>
          <h4>Formulación Antibacterial</h4>
          <p>Compounding especializado con aditivos bactericidas y antioxidantes que garantizan protección higiénica y aceleran la degradación natural posterior.</p>
          <span class="step-sub-tag">Bioseguridad Activa</span>
        </div>

        <div class="step-card">
          <div class="step-counter">ETAPA 03</div>
          <div class="step-icon-circle">🧤</div>
          <h4>Inmersión & Labrado</h4>
          <p>Doble baño de inmersión en moldes anatómicos curvos con grabado en relieve en palma y falanges para conseguir agarre antideslizante y calibre parejo 20.</p>
          <span class="step-sub-tag">Calibre Parejo Homogéneo</span>
        </div>

        <div class="step-card">
          <div class="step-counter">ETAPA 04</div>
          <div class="step-icon-circle">🔬</div>
          <h4>Vulcanizado & Certificación</h4>
          <p>Curado en hornos térmicos controlados, enrollado de orillo en boca, pruebas hidrostáticas de hermeticidad y empaque en cajas de 12 docenas.</p>
          <span class="step-sub-tag">Inspección de Calidad</span>
        </div>

      </div>

    </div>
  </section>

  <section class="section-block" id="sostenibilidad">
    <div class="container-max">
      
      <div class="header-editorial">
        <div class="badge-pill pill-lime">
          <span>COMPROMISO ECOLÓGICO</span>
        </div>
        <h2 class="title-editorial">Látex 100% Biodegradable vs. Sintéticos Fósiles</h2>
        <p class="desc-editorial">
          Elegir Preinducol es optar por la naturaleza: materias primas renovables que protegen al trabajador sin hipotecar el medio ambiente.
        </p>
      </div>

      <div class="sustainability-matrix-grid">
        
        <div class="matrix-card card-green-light">
          <div class="matrix-icon">🌿</div>
          <span class="matrix-chip">PREINDUCOL RUBERPLUS™</span>
          <h3>100% Látex Natural Renovable</h3>
          <p>Obtenido por sangrado del árbol de caucho <em>Hevea brasiliensis</em>. Un recurso 100% biológico, circular y renovable que captura toneladas de carbono en sus plantaciones.</p>
          <ul class="matrix-bullets">
            <li>✓ Origen orgánico vegetal sostenible</li>
            <li>✓ Sin derivados del petróleo</li>
            <li>✓ Mayor elasticidad y confort térmico</li>
          </ul>
        </div>

        <div class="matrix-card card-cyan-light">
          <div class="matrix-icon">🧬</div>
          <span class="matrix-chip">FÓRMULA SEGURA</span>
          <h3>Bactericida Antibacterial Activo</h3>
          <p>Tratamiento molecular antibacterial que inhibe hongos y bacterias nocivas dentro y fuera del guante, reduciendo riesgos de dermatitis y malos olores en turnos prolongados.</p>
          <ul class="matrix-bullets">
            <li>✓ Protección dérmica superior</li>
            <li>✓ Acción activa contra microbios</li>
            <li>✓ Hipoalergénico con acabado parejo</li>
          </ul>
        </div>

        <div class="matrix-card card-lime-light">
          <div class="matrix-icon">♻️</div>
          <span class="matrix-chip">CICLO CIRCULAR</span>
          <h3>Biodegradación Natural Acelerada</h3>
          <p>A diferencia de los plásticos de un solo uso que tardan 400 años en descomponerse en microplásticos tóxicos, nuestro guante se reintegra al suelo de forma natural sin toxicidad residual.</p>
          <ul class="matrix-bullets">
            <li>✓ Cero microplásticos en ríos o mares</li>
            <li>✓ Desintegración armónica con el suelo</li>
            <li>✓ Empaques en cajas reciclables</li>
          </ul>
        </div>

      </div>

    </div>
  </section>

  <!-- ========================================================================= -->
  <!-- SECCIÓN CONTACTO, FORMULARIO Y CANALES DIRECTOS                           -->
  <!-- ========================================================================= -->
  <section class="section-block bg-subtle" id="contacto">
    <div class="container-max">
      
      <div class="header-editorial">
        <div class="badge-pill">
          <span>ATENCIÓN COMERCIAL & VENTAS</span>
        </div>
        <h2 class="title-editorial">Solicita tu Cotización Directa de Fábrica</h2>
        <p class="desc-editorial">
          Precios especiales para distribuidores, empresas de aseo, almacenes ferreteros y contratos institucionales.
        </p>
      </div>

      <div class="contact-dual-layout">
        
        <!-- Formulario Oficial -->
        <div class="form-capsule">
          <div class="form-capsule-head">
            <h3>Diligenciar Solicitud de Cotización</h3>
            <p>Un director comercial se comunicará contigo de inmediato para coordinar muestras o despachos:</p>
          </div>

          <form id="contactForm" class="pro-form">
            <div class="form-grid-2">
              <div class="field-item">
                <label for="formNombre">Nombre Completo *</label>
                <input type="text" id="formNombre" required placeholder="Ej: Carlos Alberto Gómez">
              </div>
              <div class="field-item">
                <label for="formEmpresa">Empresa o Razón Social</label>
                <input type="text" id="formEmpresa" placeholder="Ej: Distribuciones del Norte SAS">
              </div>
            </div>

            <div class="form-grid-2">
              <div class="field-item">
                <label for="formCelular">Celular / WhatsApp *</label>
                <input type="tel" id="formCelular" required placeholder="Ej: 311 842 0561">
              </div>
              <div class="field-item">
                <label for="formEmail">Correo Electrónico *</label>
                <input type="email" id="formEmail" required placeholder="Ej: compras@empresa.com">
              </div>
            </div>

            <div class="form-grid-2">
              <div class="field-item">
                <label for="formProducto">Línea de Interés</label>
                <select id="formProducto">
                  <option value="Guante Ruberplus™ Calibre 20">Guante Ruberplus™ Calibre 20 Parejo</option>
                  <option value="Guante Ruberplus™ Calibre 25">Ruberplus™ Calibre 25 Semipesado</option>
                  <option value="Guante Indumax™ Industrial">Guante Indumax™ Industrial</option>
                  <option value="Guante Rubber 50™ (Calibre 50)">Rubber 50™ (Calibre 50 Extra Pesado)</option>
                  <option value="Guante Mosquetero™ Manga Larga">Mosquetero™ Manga Larga</option>
                  <option value="Guante Corrugado Antideslizante">Corrugado Antideslizante</option>
                  <option value="Guantes de Nitrilo Industrial">Guantes de Nitrilo Industrial</option>
                  <option value="Guantes Cuero Vaqueta">Guantes Cuero Vaqueta</option>
                  <option value="Guantes Cuero Carnaza">Guantes Cuero Carnaza Soldadura</option>
                  <option value="Varios Productos / Pedido Mixto">Varios Productos / Pedido Mixto</option>
                </select>
              </div>
              <div class="field-item">
                <label for="formCantidad">Cantidad Estimada</label>
                <input type="text" id="formCantidad" placeholder="Ej: 20 cajas / 240 docenas">
              </div>
            </div>

            <div class="field-item">
              <label for="formMensaje">Ciudad de Despacho y Observaciones</label>
              <textarea id="formMensaje" rows="3" placeholder="Indica ciudad de entrega, tallas preferidas o requerimientos especiales..."></textarea>
            </div>

            <button type="submit" class="btn-submit-pro" id="btnSubmitForm">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
              <span>Generar Cotización y Conectar con Asesor</span>
            </button>
          </form>

          <div class="form-success-box hidden" id="formSuccessMessage">
            <div class="success-icon-big">✓</div>
            <h4>¡Solicitud Preparada con Éxito!</h4>
            <p>Hemos generado tu mensaje comercial para enviarlo con un solo clic a nuestro Director de Ventas por WhatsApp.</p>
            <a href="#" id="btnDirectWaSuccess" target="_blank" class="btn-wa-action-confirm">
              <span>Abrir WhatsApp Ahora</span>
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12c0 1.891.526 3.662 1.438 5.176L2 22l4.982-1.398A9.957 9.957 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"/></svg>
            </a>
          </div>
        </div>

        <!-- Canales Directos y Representantes -->
        <div class="channels-capsule">
          <div class="channels-head">
            <h3>Atención Comercial Inmediata</h3>
            <p>Comunícate en directo con nuestros líderes de cuenta en Colombia:</p>
          </div>

          <div class="rep-card-box">
            <div class="rep-avatar-wrap">
              <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
            </div>
            <div class="rep-details">
              <span class="rep-badge">VENTAS & DISTRIBUCIÓN</span>
              <h4 class="rep-name">Director Comercial</h4>
              <strong class="rep-contact-num">+57 311 842 0561</strong>
              <span class="rep-live-status"><span class="dot-live"></span> En línea para pedidos mayoristas</span>
            </div>
            <a href="https://wa.me/573118420561?text=Hola,%20me%20comunico%20desde%20la%20web%20Preinducol%20para%20cotizar%20guantes%20al%20por%20mayor" target="_blank" rel="noopener noreferrer" class="btn-chatear-wa">
              Chatear
            </a>
          </div>

          <div class="rep-card-box">
            <div class="rep-avatar-wrap">
              <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
            </div>
            <div class="rep-details">
              <span class="rep-badge">POSTVENTA & SEGUIMIENTO</span>
              <h4 class="rep-name">Servicio al Cliente</h4>
              <strong class="rep-contact-num">+57 313 895 7129</strong>
              <span class="rep-live-status"><span class="dot-live"></span> Despachos y logística nacional</span>
            </div>
            <a href="https://wa.me/573138957129?text=Hola,%20me%20comunico%20con%20Servicio%20al%20Cliente%20de%20Preinducol%20S.A.S." target="_blank" rel="noopener noreferrer" class="btn-chatear-wa">
              Chatear
            </a>
          </div>

          <!-- Cobertura de Despachos -->
          <div class="coverage-banner">
            <div class="cov-icon">🇨🇴</div>
            <div class="cov-text">
              <strong>Despachos a Nivel Nacional</strong>
              <p>Envíos consolidados para distribuidores mayoristas, grandes superficies y plantas industriales en las 32 regiones de Colombia.</p>
            </div>
          </div>

          <!-- Horario de Operación -->
          <div class="business-hours-strip">
            <span class="hours-label">Horario de Atención en Planta:</span>
            <strong class="hours-val">Lunes a Viernes de 8:00 AM a 5:30 PM</strong>
          </div>

        </div>

      </div>

      <!-- Mapa Oficial de Ubicación Preinducol -->
      <div class="map-wrapper-card">
        <div class="map-card-bar">
          <span class="pin-icon">📍</span>
          <span>Planta y Oficinas Centrales • <strong>PREINDUCOL S.A.S. Colombia</strong></span>
        </div>
        <iframe class="map-frame" loading="lazy" src="https://maps.google.com/maps?q=preinducol%20sas&t=m&z=16&output=embed&iwloc=near" title="Ubicación Planta Preinducol SAS Colombia"></iframe>
      </div>

    </div>
  </section>

  <!-- ========================================================================= -->
  <!-- MODAL DE COTIZACIÓN RÁPIDA (PREINDUCOL S.A.S.)                            -->
  <!-- ========================================================================= -->
  <div class="quote-modal-overlay hidden" id="quoteModalOverlay">
    <div class="quote-modal-card">
      <div class="modal-header">
        <div class="modal-title-box">
          <img src="assets/logo.png" alt="Preinducol" class="modal-logo">
          <h3>Preinducol S.A.S. • Cotizaciones</h3>
        </div>
        <button class="btn-close-modal" id="btnCloseModal">&times;</button>
      </div>
      <div class="modal-body">
        <p>Para pedidos mayoristas por docenas o cajas del <strong>Guante Ruberplus™</strong> o cualquier línea de nuestro catálogo, contáctanos inmediatamente a través de nuestras líneas directas:</p>
        
        <div class="contact-info-card">
          <div class="contact-row">
            <strong>🏭 Fabricante:</strong>
            <span>PREINDUCOL S.A.S.</span>
          </div>
          <div class="contact-row">
            <strong>🧤 Producto:</strong>
            <span id="modalProductName">Guante de Látex Natural Ruberplus™</span>
          </div>
          <div class="contact-row">
            <strong>📏 Calibre y Largo:</strong>
            <span>Calibre 20 Parejo • 30 cm de longitud</span>
          </div>
          <div class="contact-row">
            <strong>🎨 Colores Oficiales:</strong>
            <span>Amarillo, Azul, Rojo y Verde</span>
          </div>
          <div class="contact-row">
            <strong>📦 Presentación:</strong>
            <span>Cajas por 12 docenas (144 pares)</span>
          </div>
          <div class="contact-row">
            <strong>📍 Cobertura:</strong>
            <span>Despachos a Nivel Nacional en Colombia</span>
          </div>
        </div>

        <div class="modal-direct-buttons">
          <a href="https://wa.me/573118420561?text=Hola,%20deseo%20cotizar%20guantes%20Ruberplus%20Preinducol" target="_blank" rel="noopener noreferrer" class="btn-modal-wa">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12c0 1.891.526 3.662 1.438 5.176L2 22l4.982-1.398A9.957 9.957 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"/></svg>
            <span>Cotizar por WhatsApp Ahora</span>
          </a>
        </div>
      </div>
      <div class="modal-footer">
        <button class="btn-modal-close-action" id="btnModalCloseAction">Cerrar Ventana</button>
      </div>
    </div>
  </div>

  <!-- ========================================================================= -->
  <!-- MODAL VISOR OFICIAL DE FICHA TÉCNICA (PDF INTERACTIVO)                    -->
  <!-- ========================================================================= -->
`;
  }

  function init() {
    // Formulario de contacto oficial
    const form = document.getElementById('contactForm');
    const successBox = document.getElementById('formSuccessMessage');
    const btnWaSuccess = document.getElementById('btnDirectWaSuccess');

    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();

        const nombre = document.getElementById('formNombre').value.trim();
        const empresa = document.getElementById('formEmpresa').value.trim();
        const celular = document.getElementById('formCelular').value.trim();
        const email = document.getElementById('formEmail').value.trim();
        const producto = document.getElementById('formProducto').value;
        const cantidad = document.getElementById('formCantidad').value.trim();
        const mensaje = document.getElementById('formMensaje').value.trim();

        let waText = '*SOLICITUD DE COTIZACIÓN - PREINDUCOL S.A.S.*%0A%0A';
        waText += '*Nombre:* ' + encodeURIComponent(nombre) + '%0A';
        if (empresa) waText += '*Empresa:* ' + encodeURIComponent(empresa) + '%0A';
        waText += '*Celular:* ' + encodeURIComponent(celular) + '%0A';
        waText += '*Email:* ' + encodeURIComponent(email) + '%0A';
        waText += '*Línea Solicitada:* ' + encodeURIComponent(producto) + '%0A';
        if (cantidad) waText += '*Cantidad estimada:* ' + encodeURIComponent(cantidad) + '%0A';
        if (mensaje) waText += '*Observaciones / Ciudad:* ' + encodeURIComponent(mensaje) + '%0A';

        const waUrl = 'https://wa.me/573118420561?text=' + waText;

        if (btnWaSuccess) {
          btnWaSuccess.setAttribute('href', waUrl);
        }

        form.style.display = 'none';
        if (successBox) {
          successBox.classList.remove('hidden');
        }

        window.open(waUrl, '_blank');
      });
    }

    // Modal de cotización
    const quoteModal = document.getElementById('quoteModalOverlay');
    const btnCloseModal = document.getElementById('btnCloseModal');
    const btnModalCloseAction = document.getElementById('btnModalCloseAction');

    const closeModal = () => {
      if (quoteModal) quoteModal.classList.add('hidden');
    };

    if (btnCloseModal) btnCloseModal.addEventListener('click', closeModal);
    if (btnModalCloseAction) btnModalCloseAction.addEventListener('click', closeModal);

    // Abrir modal de cotización desde cualquier botón [href="#contacto"] con clase .btn-pill-studds o .btn-quote
    document.querySelectorAll('.block-bottom-right .btn-pill-studds, .btn-quote').forEach(btn => {
      btn.addEventListener('click', (e) => {
        if (quoteModal) {
          quoteModal.classList.remove('hidden');
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
    mount
  };
})();