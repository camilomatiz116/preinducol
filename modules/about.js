/**
 * PREINDUCOL S.A.S. - MÓDULO: QUIÉNES SOMOS (página quienes-somos.html)
 * Historia de la marca, Wendy la hormiguita animada, línea de tiempo,
 * Misión/Visión, 6 Valores Corporativos y Manifiesto (movidos desde el index).
 */
window.AboutModule = (function () {
  const mountId = 'about-mount';

  const WENDY_MESSAGES = [
    "«¡Hola! Soy Wendy. En Preinducol cada guante lleva la dedicación de manos colombianas.»",
    "«¿Sabías que una hormiga levanta 50 veces su peso? ¡Nuestros guantes resisten igual!»",
    "«¡Cuidamos el planeta con látex 100% natural y biodegradable!»",
    "«La disciplina y el trabajo en equipo son el secreto de nuestra calidad.»"
  ];

  const TIMELINE = [
    { year: '1998', title: 'Un pequeño taller, un gran sueño', text: 'En un modesto taller de Rionegro, una familia antioqueña fabrica sus primeros pares de guantes de látex a mano, con moldes artesanales y mucha disciplina.' },
    { year: '2004', title: 'Nace Wendy, la hormiguita', text: 'Inspirados en la hormiga —pequeña, incansable y capaz de cargar 50 veces su peso— adoptamos a Wendy como símbolo de fuerza, trabajo en equipo y protección.' },
    { year: '2010', title: 'Llega la línea Ruberplus™', text: 'Desarrollamos el guante calibre 20 parejo con fórmula antibacterial y labrado antideslizante, que se convierte en el favorito de hogares y empresas de aseo.' },
    { year: '2016', title: 'Planta industrial en Bogotá', text: 'Ampliamos operaciones con hornos de vulcanizado controlado y laboratorio de calidad, sumando las líneas Indumax™, Rubber 50™ y Mosquetero™.' },
    { year: '2021', title: 'Compromiso 100% biodegradable', text: 'Consolidamos el uso de látex natural renovable y empaques reciclables, reafirmando que proteger las manos también es proteger el planeta.' },
    { year: 'Hoy', title: 'Más de 10 millones de manos protegidas', text: 'Despachamos a las 32 regiones de Colombia y miramos hacia Latinoamérica, con el mismo espíritu de la hormiguita: trabajo constante y en equipo.' }
  ];

  let currentMsgIdx = 0;

  function renderTimeline() {
    return TIMELINE.map((h, i) => `
      <div class="tl-item ${i % 2 === 0 ? 'tl-left' : 'tl-right'}">
        <div class="tl-dot"></div>
        <div class="tl-card">
          <span class="tl-year">${h.year}</span>
          <h4 class="tl-title">${h.title}</h4>
          <p class="tl-text">${h.text}</p>
        </div>
      </div>`).join('');
  }

  function render() {
    return `
    <section class="section-about-preinducol" id="historia">
      <div class="container-max">

        <!-- 1. Historia + Wendy -->
        <div class="about-story-grid">
          <div class="about-mascot-stage" id="mascotInteractiveStage">
            <div class="mascot-energy-halo"></div>
            <div class="mascot-speech-bubble" id="wendyBubble" title="¡Toca a Wendy!">
              <span class="bubble-tag">WENDY DICE:</span>
              <span id="wendyText">${WENDY_MESSAGES[0]}</span>
            </div>
            <div class="mascot-character-wrap">
              <img src="assets/hormiga-3.png" alt="Wendy, mascota oficial Preinducol" class="mascot-animated-img" id="wendyImg">
              <div class="mascot-ground-shadow"></div>
            </div>
            <div class="mascot-strength-chip">
              <span class="strength-icon">⚡</span>
              <span>Inspirados en la Fuerza de la Hormiga</span>
            </div>
          </div>

          <div class="about-story-content">
            <span class="story-lead-badge">INDUSTRIA 100% COLOMBIANA</span>
            <h2 class="story-main-heading">Una Historia Forjada con Disciplina, Esfuerzo y Protección</h2>
            <p class="story-body-text">
              Todo empezó en 1998 con una convicción: <strong>las manos de quienes construyen el país merecen la protección más confiable</strong>. Lo que comenzó como un taller familiar en Rionegro se convirtió, par a par, en una fábrica de referencia nacional.
            </p>
            <p class="story-body-text">
              Como la hormiga —nuestro símbolo— entendimos que la fuerza no está en el tamaño sino en la constancia y en el equipo. Hoy transformamos látex 100% natural en soluciones de protección para el hogar, la agroindustria y la industria pesada.
            </p>
            <div class="about-metrics-bar">
              <div class="about-metric-card"><div class="metric-number">+25</div><div class="metric-label">Años de Trayectoria</div></div>
              <div class="about-metric-card"><div class="metric-number">100%</div><div class="metric-label">Látex Biodegradable</div></div>
              <div class="about-metric-card"><div class="metric-number">+10M</div><div class="metric-label">Manos Protegidas</div></div>
            </div>
          </div>
        </div>

        <!-- 3. Línea de Tiempo con la Hormiguita Caminando -->
        <div class="about-timeline-block">
          <div class="values-header-strip">
            <h3 class="values-strip-title">Nuestro Camino</h3>
            <p class="values-strip-desc">Cada paso de Wendy es un hito de nuestra historia.</p>
          </div>
          <div class="timeline-track" id="timelineTrack">
            <div class="tl-line"><div class="tl-line-fill" id="tlLineFill"></div></div>
            <img src="assets/hormiga-3.png" alt="" aria-hidden="true" class="tl-ant-walker" id="tlAntWalker">
            ${renderTimeline()}
          </div>
        </div>

      </div>
    </section>

    <!-- 4. ADN: Misión, Visión, Valores y Manifiesto (movido desde el index) -->
    <section class="section-block" id="nosotros">
      <div class="container-max">

        <div class="header-editorial">
          <div class="badge-pill"><span>ADN PREINDUCOL</span></div>
          <h2 class="title-editorial">Trabajamos para Proteger tus Manos en el Hogar y la Industria</h2>
          <p class="desc-editorial">
            «En <strong>Preinducol</strong>, no solo fabricamos guantes; creamos confianza, protegemos vidas y construimos un futuro más seguro. Cada pieza es el fruto del esfuerzo colectivo de manos expertas colombianas.»
          </p>
        </div>

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

        <div class="corporate-values-block">
          <div class="values-top-bar">
            <h3 class="values-block-title">Valores Corporativos Preinducol</h3>
            <p class="values-block-subtitle">El código ético y técnico que rige nuestra producción industrial diaria.</p>
          </div>
          <div class="values-deck">
            <div class="value-item"><div class="v-num">01</div><div class="v-icon">✓</div><h4>Calidad</h4><p>Garantizamos excelencia en cada uno de nuestros productos y servicios con rigurosos ensayos de tensión, elasticidad y hermeticidad.</p></div>
            <div class="value-item"><div class="v-num">02</div><div class="v-icon">⚡</div><h4>Innovación</h4><p>Nos esforzamos por mejorar continuamente nuestros procesos, la ergonomía de nuestros moldes y las fórmulas antibacteriales.</p></div>
            <div class="value-item"><div class="v-num">03</div><div class="v-icon">🤝</div><h4>Colaboración</h4><p>Promovemos el trabajo conjunto con nuestros clientes, distribuidores y proveedores para alcanzar metas comunes de seguridad.</p></div>
            <div class="value-item"><div class="v-num">04</div><div class="v-icon">💬</div><h4>Servicio al Cliente</h4><p>Nos dedicamos con cercanía y rapidez a satisfacer y superar las expectativas de quienes confían en nuestros suministros.</p></div>
            <div class="value-item"><div class="v-num">05</div><div class="v-icon">👥</div><h4>Trabajo en Equipo</h4><p>Creemos firmemente en el respeto mutuo, la cooperación y el talento de operarios, supervisores e ingenieros colombianos.</p></div>
            <div class="value-item"><div class="v-num">06</div><div class="v-icon">🌿</div><h4>Responsabilidad</h4><p>Actuamos con ética integral, transparencia comercial y compromiso activo en la fabricación de látex biodegradable.</p></div>
          </div>
        </div>

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
    `;
  }

  function initWendy() {
    const wendyImg = document.getElementById('wendyImg');
    const wendyText = document.getElementById('wendyText');
    const wendyBubble = document.getElementById('wendyBubble');
    if (!wendyImg || !wendyText) return;

    function cycleMessage() {
      currentMsgIdx = (currentMsgIdx + 1) % WENDY_MESSAGES.length;
      wendyText.style.opacity = '0';
      setTimeout(() => {
        wendyText.textContent = WENDY_MESSAGES[currentMsgIdx];
        wendyText.style.opacity = '1';
      }, 200);
      wendyImg.classList.remove('is-jumping');
      void wendyImg.offsetWidth;
      wendyImg.classList.add('is-jumping');
    }

    wendyImg.addEventListener('click', cycleMessage);
    if (wendyBubble) wendyBubble.addEventListener('click', cycleMessage);
    setInterval(cycleMessage, 6000);
  }

  // La hormiguita camina por la línea de tiempo según el scroll
  function initTimeline() {
    const track = document.getElementById('timelineTrack');
    const ant = document.getElementById('tlAntWalker');
    const fill = document.getElementById('tlLineFill');
    if (!track || !ant) return;

    const items = track.querySelectorAll('.tl-item');
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('is-visible'); });
    }, { threshold: 0.25 });
    items.forEach(it => io.observe(it));

    let ticking = false;
    function update() {
      const rect = track.getBoundingClientRect();
      const vh = window.innerHeight;
      const progress = Math.min(1, Math.max(0, (vh * 0.55 - rect.top) / rect.height));
      const y = progress * (rect.height - 60);
      ant.style.transform = `translate(-50%, ${y}px)`;
      if (fill) fill.style.height = (progress * 100) + '%';
      ticking = false;
    }
    window.addEventListener('scroll', () => {
      if (!ticking) { requestAnimationFrame(update); ticking = true; }
    }, { passive: true });
    update();
  }

  function mount() {
    const container = document.getElementById(mountId);
    if (container) {
      container.innerHTML = render();
      initWendy();
      initTimeline();
    }
  }

  return { mount };
})();
