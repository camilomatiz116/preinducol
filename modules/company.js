/**
 * PREINDUCOL S.A.S. - MÓDULO: EMPRESA, PLANTA, CONTACTO & COTIZACIONES
 * Nosotros (Misión/Visión/Valores), Planta de Producción, Sostenibilidad,
 * Formulario de contacto con redirección a WhatsApp y Modal de Cotizaciones.
 */
window.CompanyModule = (function () {
  const mountId = 'company-mount';

  function render() {
    return `
  <!-- La sección #nosotros (Misión/Visión/Valores/Manifiesto) se trasladó a quienes-somos.html (modules/about.js) -->

  <!-- ========================================================================= -->
  <!-- SECCIÓN SOSTENIBILIDAD (ENCABEZADO CENTRADO + WENDY Y BLOQUES)            -->
  <!-- ========================================================================= -->
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

      <div class="eco-layout">
        <aside class="eco-ant-aside">
          <img src="assets/hormigaplaneta%C3%A7.png" alt="Wendy, la hormiga de Preinducol, abrazando el planeta Tierra" class="eco-ant-img" loading="lazy">
        </aside>

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

    </div>

    <!-- Mapa Oficial de Ubicación Preinducol (Full-Width de lado a lado) -->
    <div class="map-fullwidth-wrap">
      <div class="map-card-bar map-bar-fullwidth">
        <div class="container-max map-bar-inner">
          <span class="pin-icon">📍</span>
          <span>Planta y Oficinas Centrales • <strong>PREINDUCOL S.A.S. Colombia</strong> — Calle 63B # 116A - 35 Bodega 5, Engativá, Bogotá</span>
        </div>
      </div>
      <iframe class="map-frame map-frame-fullwidth" loading="lazy" src="https://maps.google.com/maps?q=preinducol%20sas&t=m&z=16&output=embed&iwloc=near" title="Ubicación Planta Preinducol SAS Colombia"></iframe>
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