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
      eyebrow: '100% LÁTEX NATURAL • LÍNEA PREMIUM',
      title: 'RUBBERPLUS',
      subtitle: 'LÁTEX INDUSTRIAL & HOGAR',
      desc: 'El guante preferido en Colombia. Fabricado con látex 100% natural biodegradable de calibre parejo. Suavidad superior, diseño anatómico curvo de descanso y labrado antideslizante tipo panal de abeja. Disponible en tallas 7, 7½, 8 y 10.',
      hotspotText: '100% Látex Natural • Biodegradable',
      defaultGloveImg: 'assets/fotosguantes/ruberplus_transparent/Bright Yellow Textured Rubber Glove.png',
      defaultGloveTitle: 'Amarillo Clásico • Cal. 20',
      threeDSlug: 'ruberplus-20',
      colors: [
        { name: 'Amarillo Clásico', class: 'dot-yellow', img: 'assets/fotosguantes/ruberplus_transparent/Bright Yellow Textured Rubber Glove.png' },
        { name: 'Rojo Resistencia', class: 'dot-red', img: 'assets/fotosguantes/ruberplus_transparent/Guante rojo de limpieza con textura y talla 8.png' },
        { name: 'Azul Grip', class: 'dot-blue', img: 'assets/fotosguantes/ruberplus_transparent/Guante azul con textura de agarre.png' },
        { name: 'Verde Aseo', class: 'dot-green', img: 'assets/fotosguantes/ruberplus_transparent/Guante de limpieza verde texturizado.png' },
        { name: 'Negro Clásico (Corto)', class: 'dot-black', img: 'assets/fotosguantes/ruberplus_transparent/Guante Negro Texturizado de Cocina.png' },
        { name: 'Corrugado Gris/Blanco', class: 'dot-gray-white', img: 'assets/fotosguantes/ruberplus_transparent/corrugado_placeholder.svg' }
      ],
      photos: [
        { name: 'Amarillo Clásico • Cal. 20', src: 'assets/fotosguantes/ruberplus_transparent/Bright Yellow Textured Rubber Glove.png' },
        { name: 'Rojo Resistencia • Cal. 20', src: 'assets/fotosguantes/ruberplus_transparent/Guante rojo de limpieza con textura y talla 8.png' },
        { name: 'Azul Grip • Cal. 20', src: 'assets/fotosguantes/ruberplus_transparent/Guante azul con textura de agarre.png' },
        { name: 'Verde Aseo • Cal. 20', src: 'assets/fotosguantes/ruberplus_transparent/Guante de limpieza verde texturizado.png' },
        { name: 'Negro Clásico (Corto) • Cal. 20', src: 'assets/fotosguantes/ruberplus_transparent/Guante Negro Texturizado de Cocina.png' },
        { name: 'Corrugado (Gris / Blanco) • Foto Pendiente', src: 'assets/fotosguantes/ruberplus_transparent/corrugado_placeholder.svg' }
      ],
      sizePhotos: {
        'Cal. 20': [
          { name: 'Amarillo Clásico • Cal. 20', src: 'assets/fotosguantes/ruberplus_transparent/Bright Yellow Textured Rubber Glove.png' },
          { name: 'Rojo Resistencia • Cal. 20', src: 'assets/fotosguantes/ruberplus_transparent/Guante rojo de limpieza con textura y talla 8.png' },
          { name: 'Azul Grip • Cal. 20', src: 'assets/fotosguantes/ruberplus_transparent/Guante azul con textura de agarre.png' },
          { name: 'Verde Aseo • Cal. 20', src: 'assets/fotosguantes/ruberplus_transparent/Guante de limpieza verde texturizado.png' },
          { name: 'Negro Clásico (Corto) • Cal. 20', src: 'assets/fotosguantes/ruberplus_transparent/Guante Negro Texturizado de Cocina.png' },
          { name: 'Corrugado (Gris / Blanco) • Foto Pendiente', src: 'assets/fotosguantes/ruberplus_transparent/corrugado_placeholder.svg' }
        ],
        'Cal. 25': [
          { name: 'Negro con Amarillo • Cal. 25', src: 'assets/fotosguantes/ruberplus_transparent/guantenegroconamarillo.png' },
          { name: 'Amarillo Clásico • Cal. 25', src: 'assets/fotosguantes/ruberplus_transparent/Bright Yellow Textured Rubber Glove.png' },
          { name: 'Rojo Resistencia • Cal. 25', src: 'assets/fotosguantes/ruberplus_transparent/Guante rojo de limpieza con textura y talla 8.png' },
          { name: 'Verde Aseo • Cal. 25', src: 'assets/fotosguantes/ruberplus_transparent/Guante de limpieza verde texturizado.png' },
          { name: 'Negro Normal • Cal. 25', src: 'assets/fotosguantes/ruberplus_transparent/Guante Negro Texturizado de Cocina.png' },
          { name: 'Corrugado (Gris / Blanco) • Foto Pendiente', src: 'assets/fotosguantes/ruberplus_transparent/corrugado_placeholder.svg' }
        ],
        'Cal. 35': [
          { name: 'Mosquetero Negro Largo • Cal. 35', src: 'assets/fotosguantes/ruberplus_transparent/Guante negro largo con textura diamantada.png' },
          { name: 'Negro con Amarillo • Cal. 35', src: 'assets/fotosguantes/ruberplus_transparent/guantenegroconamarillo.png' },
          { name: 'Amarillo Clásico • Cal. 35', src: 'assets/fotosguantes/ruberplus_transparent/Bright Yellow Textured Rubber Glove.png' },
          { name: 'Rojo Resistencia • Cal. 35', src: 'assets/fotosguantes/ruberplus_transparent/Guante rojo de limpieza con textura y talla 8.png' },
          { name: 'Verde Aseo • Cal. 35', src: 'assets/fotosguantes/ruberplus_transparent/Guante de limpieza verde texturizado.png' },
          { name: 'Negro Normal • Cal. 35', src: 'assets/fotosguantes/ruberplus_transparent/Guante Negro Texturizado de Cocina.png' }
        ],
        'Cal. 50': [
          { name: 'Negro con Amarillo • Cal. 50', src: 'assets/fotosguantes/ruberplus_transparent/guantenegroconamarillo.png' }
        ],
        'Cal. 65': [
          { name: 'Mosquetero Negro Largo • Cal. 65', src: 'assets/fotosguantes/ruberplus_transparent/Guante negro largo con textura diamantada.png' }
        ]
      },
      sizeColors: {
        'Cal. 20': [
          { name: 'Amarillo Clásico', class: 'dot-yellow', img: 'assets/fotosguantes/ruberplus_transparent/Bright Yellow Textured Rubber Glove.png' },
          { name: 'Rojo Resistencia', class: 'dot-red', img: 'assets/fotosguantes/ruberplus_transparent/Guante rojo de limpieza con textura y talla 8.png' },
          { name: 'Azul Grip', class: 'dot-blue', img: 'assets/fotosguantes/ruberplus_transparent/Guante azul con textura de agarre.png' },
          { name: 'Verde Aseo', class: 'dot-green', img: 'assets/fotosguantes/ruberplus_transparent/Guante de limpieza verde texturizado.png' },
          { name: 'Negro Clásico (Corto)', class: 'dot-black', img: 'assets/fotosguantes/ruberplus_transparent/Guante Negro Texturizado de Cocina.png' },
          { name: 'Corrugado Gris/Blanco', class: 'dot-gray-white', img: 'assets/fotosguantes/ruberplus_transparent/corrugado_placeholder.svg' }
        ],
        'Cal. 25': [
          { name: 'Negro / Amarillo', class: 'dot-black-yellow', img: 'assets/fotosguantes/ruberplus_transparent/guantenegroconamarillo.png' },
          { name: 'Amarillo Clásico', class: 'dot-yellow', img: 'assets/fotosguantes/ruberplus_transparent/Bright Yellow Textured Rubber Glove.png' },
          { name: 'Rojo Resistencia', class: 'dot-red', img: 'assets/fotosguantes/ruberplus_transparent/Guante rojo de limpieza con textura y talla 8.png' },
          { name: 'Verde Aseo', class: 'dot-green', img: 'assets/fotosguantes/ruberplus_transparent/Guante de limpieza verde texturizado.png' },
          { name: 'Negro Normal', class: 'dot-black', img: 'assets/fotosguantes/ruberplus_transparent/Guante Negro Texturizado de Cocina.png' },
          { name: 'Corrugado Gris/Blanco', class: 'dot-gray-white', img: 'assets/fotosguantes/ruberplus_transparent/corrugado_placeholder.svg' }
        ],
        'Cal. 35': [
          { name: 'Mosquetero Negro Largo', class: 'dot-black', img: 'assets/fotosguantes/ruberplus_transparent/Guante negro largo con textura diamantada.png' },
          { name: 'Negro / Amarillo', class: 'dot-black-yellow', img: 'assets/fotosguantes/ruberplus_transparent/guantenegroconamarillo.png' },
          { name: 'Amarillo Clásico', class: 'dot-yellow', img: 'assets/fotosguantes/ruberplus_transparent/Bright Yellow Textured Rubber Glove.png' },
          { name: 'Rojo Resistencia', class: 'dot-red', img: 'assets/fotosguantes/ruberplus_transparent/Guante rojo de limpieza con textura y talla 8.png' },
          { name: 'Verde Aseo', class: 'dot-green', img: 'assets/fotosguantes/ruberplus_transparent/Guante de limpieza verde texturizado.png' },
          { name: 'Negro Normal', class: 'dot-black', img: 'assets/fotosguantes/ruberplus_transparent/Guante Negro Texturizado de Cocina.png' }
        ],
        'Cal. 50': [
          { name: 'Negro / Amarillo', class: 'dot-black-yellow', img: 'assets/fotosguantes/ruberplus_transparent/guantenegroconamarillo.png' }
        ],
        'Cal. 65': [
          { name: 'Mosquetero Negro Largo', class: 'dot-black', img: 'assets/fotosguantes/ruberplus_transparent/Guante negro largo con textura diamantada.png' }
        ]
      },
      sizes: ['Cal. 20', 'Cal. 25', 'Cal. 35', 'Cal. 50', 'Cal. 65'],
      defaultSize: 'Cal. 20'
    },
    {
      id: 'showcase-preindumax',
      themeClass: 'theme-yellow',
      layoutReverse: true,
      tabName: 'Guantes Preindumax',
      brandImg: 'assets/ima91.png',
      eyebrow: 'LÍNEA ECONÓMICA • GUANTES SEMI INDUSTRIALES E INDUSTRIAL',
      title: 'PREINDUMAX™',
      subtitle: 'LÍNEA INDUSTRIAL PESADA & AGROINDUSTRIA',
      desc: 'Calibre 25 a 35 reforzado para manipulación química moderada, agroindustria, floricultura y faenas industriales exigentes. Interior satinado antifatiga para jornadas continuas y orillo enrollado antidesgarre.',
      hotspotText: 'Látex Reforzado • Calibre 25 a 35',
      defaultGloveImg: 'assets/fotosguantes/ruberplus_transparent/guante-negro-verde.png',
      defaultGloveTitle: 'Negro con Verde • Cal. 25',
      threeDSlug: 'indumax-25',
      hideColors: true,
      colors: [],
      photos: [
        { name: 'Negro con Verde • Cal. 25', src: 'assets/fotosguantes/ruberplus_transparent/guante-negro-verde.png' }
      ],
      sizePhotos: {
        'Cal. 25': [
          { name: 'Negro con Verde • Cal. 25', src: 'assets/fotosguantes/ruberplus_transparent/guante-negro-verde.png' }
        ],
        'Cal. 35': [
          { name: 'Negro con Verde • Cal. 35', src: 'assets/fotosguantes/ruberplus_transparent/guante-negro-verde.png' }
        ]
      },
      sizes: ['Cal. 25', 'Cal. 35'],
      defaultSize: 'Cal. 25'
    },
    {
      id: 'showcase-nitrilo',
      themeClass: 'theme-red',
      tabName: 'Guantes de Nitrilo',
      brandImg: '',
      hasSublines: true,
      activeSubline: 'premium',
      sublines: {
        'premium': {
          id: 'premium',
          name: 'Nitrilo Línea Premium',
          tag: 'LÍNEA PREMIUM',
          eyebrow: '100% NITRILO SINTÉTICO • LÍNEA PREMIUM • LIBRE DE LÁTEX',
          title: 'NITRILO LÍNEA PREMIUM',
          subtitle: 'MÁXIMA ELASTICIDAD, BIOSEGURIDAD & RESISTENCIA',
          desc: 'Guante de examen de nitrilo formulación premium de alta resistencia mecánica y química. Suavidad superior, ajuste anatómico y total barrera biológica libre de talco. Disponible en tallas S, M y L. Presentación: Caja dispensadora x 100 unidades.',
          hotspotText: 'Nitrilo Sintético • Premium Quality',
          defaultGloveImg: 'assets/fotosguantes/nitrilo_transparent/guante_nitrilo_negro.png',
          defaultGloveTitle: 'Negro • Talla M',
          threeDSlug: 'nitrilo-100',
          colors: [
            { name: 'Negro', class: 'dot-black', img: 'assets/fotosguantes/nitrilo_transparent/guante_nitrilo_negro.png' },
            { name: 'Rosado Oscuro', class: 'dot-pink', img: 'assets/fotosguantes/nitrilo_transparent/rosadooscuro.png' },
            { name: 'Morado', class: 'dot-purple', img: 'assets/fotosguantes/nitrilo_transparent/guante_nitrilo_morado.png' },
            { name: 'Azul', class: 'dot-blue', img: 'assets/fotosguantes/nitrilo_transparent/guante_nitrilo_azul_hd.png' }
          ],
          photos: [
            { name: 'Negro', src: 'assets/fotosguantes/nitrilo_transparent/guante_nitrilo_negro.png' },
            { name: 'Rosado Oscuro', src: 'assets/fotosguantes/nitrilo_transparent/rosadooscuro.png' },
            { name: 'Morado', src: 'assets/fotosguantes/nitrilo_transparent/guante_nitrilo_morado.png' },
            { name: 'Azul', src: 'assets/fotosguantes/nitrilo_transparent/guante_nitrilo_azul_hd.png' }
          ],
          sizes: []
        },
        'economica': {
          id: 'economica',
          name: 'Nitrilo Línea Económica (5g)',
          tag: 'LÍNEA ECONÓMICA • 5 GRAMOS',
          eyebrow: '100% NITRILO SINTÉTICO 5G • LÍNEA ECONÓMICA • BIOSEGURIDAD',
          title: 'NITRILO LÍNEA ECONÓMICA',
          subtitle: 'NITRILO 5 GRAMOS • BIOSEGURIDAD & ALTA RENTABILIDAD',
          desc: 'Guante de nitrilo de 5 gramos línea económica diseñado para bioseguridad, manipulación de alimentos, aseo institucional, estética y mantenimiento. Excelente barrera de protección descartable. Disponible en tallas S, M y L. Presentación: Caja dispensadora x 100 unidades.',
          hotspotText: 'Nitrilo 5 Gramos • Línea Económica',
          defaultGloveImg: 'assets/fotosguantes/nitrilo_transparent/guante_nitrilo_azul_hd.png',
          defaultGloveTitle: 'Azul • Talla M',
          threeDSlug: 'nitrilo-100',
          colors: [
            { name: 'Azul', class: 'dot-blue', img: 'assets/fotosguantes/nitrilo_transparent/guante_nitrilo_azul_hd.png' },
            { name: 'Negro', class: 'dot-black', img: 'assets/fotosguantes/nitrilo_transparent/guante_nitrilo_negro.png' }
          ],
          photos: [
            { name: 'Azul', src: 'assets/fotosguantes/nitrilo_transparent/guante_nitrilo_azul_hd.png' },
            { name: 'Negro', src: 'assets/fotosguantes/nitrilo_transparent/guante_nitrilo_negro.png' }
          ],
          sizes: []
        },
        'hd': {
          id: 'hd',
          name: 'Guantes de Nitrilo HD',
          tag: 'LÍNEA INDUSTRIAL HEAVY DUTY',
          eyebrow: 'MÁXIMO CALIBRE • CAÑA LARGA • INMERSIÓN QUÍMICA SEVERA',
          title: 'GUANTES DE NITRILO HD',
          subtitle: 'HD INDUSTRIAL • CAÑA LARGA & ALTA RESISTENCIA QUÍMICA',
          desc: 'Guante de nitrilo reforzado de caña larga y calibre pesado para inmersión profunda. Formulado para alta resistencia frente a hidrocarburos concentrados, solventes clorados, ácidos y grasas industriales. Textura diamantada antideslizante para máximo agarre. Disponible en tallas S, M, L y XL. Presentación: Caja dispensadora x 50 unidades.',
          hotspotText: 'Nitrilo Reforzado HD • Caña Larga',
          defaultGloveImg: 'assets/fotosguantes/nitrilo_transparent/negros-largos.png',
          defaultGloveTitle: 'Negro Largo HD • Calibre Reforzado',
          threeDSlug: 'nitrilo-100',
          colors: [
            { name: 'Negro', class: 'dot-black', img: 'assets/fotosguantes/nitrilo_transparent/negros-largos.png' },
            { name: 'Azul', class: 'dot-blue', img: 'assets/fotosguantes/nitrilo_transparent/aqazules-largos.png' }
          ],
          photos: [
            { name: 'Negro Largo HD', src: 'assets/fotosguantes/nitrilo_transparent/negros-largos.png' },
            { name: 'Azul Largo HD', src: 'assets/fotosguantes/nitrilo_transparent/aqazules-largos.png' }
          ],
          sizes: []
        }
      },
      eyebrow: '100% NITRILO SINTÉTICO • LÍNEA PREMIUM • LIBRE DE LÁTEX',
      title: 'NITRILO LÍNEA PREMIUM',
      subtitle: 'MÁXIMA ELASTICIDAD, BIOSEGURIDAD & RESISTENCIA',
      desc: 'Guante de examen de nitrilo formulación premium de alta resistencia mecánica y química. Suavidad superior, ajuste anatómico y total barrera biológica libre de talco. Disponible en tallas S, M y L. Presentación: Caja dispensadora x 100 unidades.',
      hotspotText: 'Nitrilo Sintético • Premium Quality',
      defaultGloveImg: 'assets/fotosguantes/nitrilo_transparent/guante_nitrilo_negro.png',
      defaultGloveTitle: 'Negro • Talla M',
      threeDSlug: 'nitrilo-100',
      colors: [
        { name: 'Negro', class: 'dot-black', img: 'assets/fotosguantes/nitrilo_transparent/guante_nitrilo_negro.png' },
        { name: 'Rosado Oscuro', class: 'dot-pink', img: 'assets/fotosguantes/nitrilo_transparent/rosadooscuro.png' },
        { name: 'Morado', class: 'dot-purple', img: 'assets/fotosguantes/nitrilo_transparent/guante_nitrilo_morado.png' },
        { name: 'Azul', class: 'dot-blue', img: 'assets/fotosguantes/nitrilo_transparent/guante_nitrilo_azul_hd.png' }
      ],
      photos: [
        { name: 'Negro', src: 'assets/fotosguantes/nitrilo_transparent/guante_nitrilo_negro.png' },
        { name: 'Rosado Oscuro', src: 'assets/fotosguantes/nitrilo_transparent/rosadooscuro.png' },
        { name: 'Morado', src: 'assets/fotosguantes/nitrilo_transparent/guante_nitrilo_morado.png' },
        { name: 'Azul', src: 'assets/fotosguantes/nitrilo_transparent/guante_nitrilo_azul_hd.png' }
      ],
      sizes: []
    },
    {
      id: 'showcase-cuero',
      themeClass: 'theme-leather',
      layoutReverse: true,
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
      sizeLabel: 'TALLAS Y LONGITUDES DISPONIBLES',
      sizes: ['Talla 9 (Estándar)', 'Talla 10 (Grande)', 'Manga Corta (25 cm)', 'Manga Larga (35 cm)', 'Puño Soldador (40 cm)'],
      defaultSize: 'Talla 9 (Estándar)'
    },
    {
      id: 'showcase-flexiguantes',
      themeClass: 'theme-green',
      tabName: 'Flexi Guantes',
      brandImg: 'assets/ima93.png',
      eyebrow: '',
      title: 'FLEXI GUANTES',
      subtitle: 'EXTRA FLEXIBILIDAD & ALTA SENSIBILIDAD',
      desc: 'Formulación ultraelástica para máxima sensibilidad táctil y confort superior en labores domésticas, aseo general, manipulación de alimentos y hotelería. Alta resistencia al desgarro con tacto sedoso. Disponible en tallas 7, 8 y 9.',
      hotspotText: 'Alta Sensibilidad • Tacto Sedoso',
      defaultGloveImg: 'assets/fotosguantes/ruberplus_transparent/Bright Yellow Textured Rubber Glove.png',
      defaultGloveTitle: 'Amarillo Hogar • Extra Confort',
      threeDSlug: 'ruberplus-20',
      hideColors: true,
      colors: [],
      photos: [
        { name: 'Amarillo Hogar', src: 'assets/fotosguantes/ruberplus_transparent/Bright Yellow Textured Rubber Glove.png' },
        { name: 'Verde Aseo', src: 'assets/fotosguantes/ruberplus_transparent/Guante de limpieza verde texturizado.png' },
        { name: 'Azul Institucional', src: 'assets/fotosguantes/ruberplus_transparent/Guante azul con textura de agarre.png' },
        { name: 'Rojo Confort', src: 'assets/fotosguantes/ruberplus_transparent/Guante rojo de limpieza con textura y talla 8.png' }
      ],
      sizes: [],
      defaultSize: ''
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
              <div class="stage-large-glove" data-block-id="${cat.id}" title="Haz clic para ampliar la foto" role="button" tabindex="0">
                <div class="glove-aura-glow"></div>
                <img src="${cat.defaultGloveImg}" 
                     alt="${cat.title}" 
                     class="large-glove-img" 
                     id="gloveImg_${cat.id}">
                <div class="large-glove-shadow"></div>
                <div class="large-glove-badge" data-block-id="${cat.id}">
                  <span class="badge-dot-live"></span>
                  <span class="badge-text-val" id="gloveLabel_${cat.id}">${cat.defaultGloveTitle}</span>
                  <span class="badge-zoom-divider"></span>
                  <span class="badge-zoom-btn">
                    <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.5">
                      <circle cx="11" cy="11" r="8"></circle>
                      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                      <line x1="11" y1="8" x2="11" y2="14"></line>
                      <line x1="8" y1="11" x2="14" y2="11"></line>
                    </svg>
                    <span>Ampliar</span>
                  </span>
                </div>
              </div>
            </div>

            <!-- Lado Contenido: Bloque Poligonal Diagonal con su Color Propio -->
            <div class="split-right-diagonal">
              <div class="diagonal-blue-content">
                
                ${cat.brandImg ? `
                <div class="brand-diamond-wrap">
                  <img src="${cat.brandImg}" alt="${cat.title}" class="blue-brand-diamond-badge">
                </div>
                ` : ''}
                
                ${cat.hasSublines && cat.sublines ? `
                <!-- Sub-módulo Conmutador de Líneas Nitrilo -->
                <div class="subline-toggle-wrapper">
                  <div class="subline-toggle-pills" role="tablist">
                    <button class="subline-tab-btn ${cat.activeSubline === 'premium' ? 'active' : ''}" data-block-id="${cat.id}" data-subline="premium" role="tab" aria-selected="${cat.activeSubline === 'premium'}">
                      <span class="subline-badge-premium">PREMIUM</span>
                      <span>Línea Premium</span>
                    </button>
                    <button class="subline-tab-btn ${cat.activeSubline === 'economica' ? 'active' : ''}" data-block-id="${cat.id}" data-subline="economica" role="tab" aria-selected="${cat.activeSubline === 'economica'}">
                      <span class="subline-btn-dot dot-eco"></span>
                      <span>Línea Económica (5g)</span>
                    </button>
                    <button class="subline-tab-btn ${cat.activeSubline === 'hd' ? 'active' : ''}" data-block-id="${cat.id}" data-subline="hd" role="tab" aria-selected="${cat.activeSubline === 'hd'}">
                      <span class="subline-badge-hot">HD</span>
                      <span>Línea Heavy Duty (HD)</span>
                    </button>
                  </div>
                </div>
                ` : ''}
                
                ${cat.eyebrow ? `<div class="blue-eyebrow-tag">${cat.eyebrow}</div>` : ''}
                <h2 class="blue-product-title">${cat.title}</h2>
                <div class="blue-product-subtitle">${cat.subtitle}</div>
                <p class="blue-product-desc">${cat.desc}</p>

                <!-- Tira de Miniaturas de la Línea -->
                <div class="selector-group ruber-gallery-group">
                  <div class="group-label-flex">
                    <label class="group-label">FOTOS DE LA LÍNEA (${cat.photos.length} MODELOS)</label>
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

                ${!cat.hideColors && cat.colors && cat.colors.length ? `
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
                ` : ''}

                ${cat.sizes && cat.sizes.length ? `
                <!-- Selector de Calibres / Tallas -->
                <div class="selector-group size-selector-group">
                  <label class="group-label">${cat.sizeLabel || 'CALIBRE / GROSOR DISPONIBLE'}</label>
                  <div class="size-pills-row">
                    ${cat.sizes.map((s) => `
                      <button class="size-pill ${s === cat.defaultSize ? 'active' : ''}" data-size="${s}">
                        ${s}
                      </button>
                    `).join('')}
                  </div>
                </div>
                ` : ''}

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
          <a href="#showcase-nitrilo" class="cat-nav-anchor" data-target="showcase-nitrilo">
            <span class="tab-chip-color chip-red"></span>
            <span class="tab-label-desktop">GUANTES DE NITRILO</span>
            <span class="tab-label-mobile">NITRILO</span>
          </a>
          <a href="#showcase-cuero" class="cat-nav-anchor" data-target="showcase-cuero">
            <span class="tab-chip-color chip-leather"></span>
            <span class="tab-label-desktop">GUANTES DE CUERO</span>
            <span class="tab-label-mobile">CUERO</span>
          </a>
          <a href="#showcase-flexiguantes" class="cat-nav-anchor" data-target="showcase-flexiguantes">
            <span class="tab-chip-color chip-green"></span>
            <span class="tab-label-desktop">FLEXI GUANTES</span>
            <span class="tab-label-mobile">FLEXI</span>
          </a>
        </nav>
      </header>

      <!-- Portafolio de Líneas Oficiales con Identidad Cromática Propia -->
      <div class="showcases-stack-wrapper">
        ${SHOWCASES_DATA.map(cat => renderShowcaseBlock(cat)).join('')}
      </div>

      <!-- Modal Lightbox de Fotografía Ampliada -->
      <div class="glove-lightbox-modal" id="gloveLightboxModal" style="display: none;" role="dialog" aria-modal="true" aria-label="Vista ampliada de producto">
        <div class="lightbox-backdrop" id="gloveLightboxBackdrop"></div>
        <div class="lightbox-dialog">
          <button class="lightbox-close-btn" id="gloveLightboxClose" aria-label="Cerrar vista ampliada" title="Cerrar (Esc)">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.5">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          
          <button class="lightbox-nav-btn lightbox-prev-btn" id="gloveLightboxPrev" aria-label="Foto anterior" title="Anterior">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2.5">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>

          <div class="lightbox-content-wrap">
            <div class="lightbox-image-box">
              <img src="" alt="" class="lightbox-img" id="gloveLightboxImg">
            </div>
            <div class="lightbox-footer-info">
              <span class="lightbox-brand-tag" id="gloveLightboxBrand">PREINDUCOL S.A.S.</span>
              <h3 class="lightbox-product-title" id="gloveLightboxTitle"></h3>
              <p class="lightbox-subtitle" id="gloveLightboxSubtitle"></p>
            </div>
          </div>

          <button class="lightbox-nav-btn lightbox-next-btn" id="gloveLightboxNext" aria-label="Foto siguiente" title="Siguiente">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2.5">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
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

  function updateBlockPhotos(blockId, newPhotos, targetLabel) {
    const cat = SHOWCASES_DATA.find(c => c.id === blockId);
    if (!cat || !newPhotos || !newPhotos.length) return;

    cat.photos = newPhotos;
    currentPhotoIdx[blockId] = 0;

    const block = document.getElementById(blockId);
    if (block) {
      const labelEl = block.querySelector('.ruber-gallery-group .group-label');
      if (labelEl) {
        labelEl.textContent = `FOTOS DE LA LÍNEA (${newPhotos.length} MODELOS${targetLabel ? ' • ' + targetLabel : ''})`;
      }
      const strip = block.querySelector('.cat-photos-strip');
      if (strip) {
        strip.innerHTML = newPhotos.map((p, idx) => `
          <button class="cat-photo-thumb ${idx === 0 ? 'active' : ''}" 
                  data-block-id="${blockId}"
                  data-idx="${idx}"
                  data-src="${p.src}" 
                  data-title="${p.name}" 
                  title="${p.name}">
            <img src="${p.src}" alt="${p.name}" class="cat-thumb-img" loading="lazy">
          </button>
        `).join('');
      }

      // Sincronizar fila de colores si existen definidos para este calibre
      if (cat.sizeColors && targetLabel && cat.sizeColors[targetLabel]) {
        const colorsList = cat.sizeColors[targetLabel];
        cat.colors = colorsList;
        const colorPillsRow = block.querySelector('.color-pills-row');
        if (colorPillsRow) {
          colorPillsRow.innerHTML = colorsList.map((c, idx) => `
            <button class="color-pill ${idx === 0 ? 'active' : ''}" 
                    data-block-id="${blockId}"
                    data-color="${c.name}" 
                    data-img="${c.img}">
              <span class="color-dot ${c.class}"></span>
              <span>${c.name}</span>
            </button>
          `).join('');
        }
      }
    }

    goToBlockPhoto(blockId, 0);
    startBlockAutoSlide(blockId, 3000);
  }

  function switchBlockSubline(blockId, sublineKey) {
    const cat = SHOWCASES_DATA.find(c => c.id === blockId);
    if (!cat || !cat.sublines || !cat.sublines[sublineKey]) return;

    cat.activeSubline = sublineKey;
    const sub = cat.sublines[sublineKey];

    // Actualizar propiedades activas en cat
    cat.eyebrow = sub.eyebrow;
    cat.title = sub.title;
    cat.subtitle = sub.subtitle;
    cat.desc = sub.desc;
    cat.photos = sub.photos;
    cat.colors = sub.colors;
    cat.sizes = sub.sizes;
    cat.sizeLabel = sub.sizeLabel;
    cat.defaultSize = sub.defaultSize;

    const block = document.getElementById(blockId);
    if (!block) return;

    // Actualizar botones de sublínea activos
    block.querySelectorAll('.subline-tab-btn').forEach(btn => {
      const isCur = btn.getAttribute('data-subline') === sublineKey;
      btn.classList.toggle('active', isCur);
      btn.setAttribute('aria-selected', isCur ? 'true' : 'false');
    });

    // Actualizar textos
    const eyebrowEl = block.querySelector('.blue-eyebrow-tag');
    if (eyebrowEl) eyebrowEl.textContent = sub.eyebrow;

    const titleEl = block.querySelector('.blue-product-title');
    if (titleEl) titleEl.textContent = sub.title;

    const subtitleEl = block.querySelector('.blue-product-subtitle');
    if (subtitleEl) subtitleEl.textContent = sub.subtitle;

    const descEl = block.querySelector('.blue-product-desc');
    if (descEl) descEl.textContent = sub.desc;

    // Actualizar galería de fotos
    const galleryLabel = block.querySelector('.ruber-gallery-group .group-label');
    if (galleryLabel) {
      galleryLabel.textContent = `FOTOS DE LA LÍNEA (${sub.photos.length} MODELOS • ${sub.name.toUpperCase()})`;
    }

    const strip = block.querySelector('.cat-photos-strip');
    if (strip) {
      strip.innerHTML = sub.photos.map((p, idx) => `
        <button class="cat-photo-thumb ${idx === 0 ? 'active' : ''}" 
                data-block-id="${blockId}"
                data-idx="${idx}"
                data-src="${p.src}" 
                data-title="${p.name}" 
                title="${p.name}">
          <img src="${p.src}" alt="${p.name}" class="cat-thumb-img" loading="lazy">
        </button>
      `).join('');
    }

    // Actualizar colores
    const colorGroup = block.querySelector('.color-pills-row');
    if (colorGroup) {
      colorGroup.innerHTML = sub.colors.map((c, idx) => `
        <button class="color-pill ${idx === 0 ? 'active' : ''}" 
                data-block-id="${blockId}"
                data-color="${c.name}" 
                data-img="${c.img}">
          <span class="color-dot ${c.class}"></span>
          <span>${c.name}</span>
        </button>
      `).join('');
    }

    // Actualizar tallas
    const sizeSection = block.querySelector('.size-selector-group') || block.querySelector('.selector-group:nth-of-type(3)');
    if (sizeSection) {
      if (sub.sizes && sub.sizes.length) {
        sizeSection.style.display = '';
        const sizeLabel = sizeSection.querySelector('.group-label');
        if (sizeLabel && sub.sizeLabel) {
          sizeLabel.textContent = sub.sizeLabel;
        }
        const sizePillsRow = sizeSection.querySelector('.size-pills-row');
        if (sizePillsRow) {
          sizePillsRow.innerHTML = sub.sizes.map(s => `
            <button class="size-pill ${s === sub.defaultSize ? 'active' : ''}" data-size="${s}">
              ${s}
            </button>
          `).join('');
        }
      } else {
        sizeSection.style.display = 'none';
      }
    }

    // Cambiar foto del escenario
    currentPhotoIdx[blockId] = 0;
    const initialPhoto = sub.photos[0] || { src: sub.defaultGloveImg, name: sub.defaultGloveTitle };
    setBlockGlovePhoto(blockId, initialPhoto.src, initialPhoto.name);
    startBlockAutoSlide(blockId, 3000);
  }

  let activeLightboxBlockId = null;

  function openGloveLightbox(blockId) {
    const cat = SHOWCASES_DATA.find(c => c.id === blockId);
    if (!cat) return;

    activeLightboxBlockId = blockId;
    const modal = document.getElementById('gloveLightboxModal');
    const imgEl = document.getElementById('gloveLightboxImg');
    const brandEl = document.getElementById('gloveLightboxBrand');
    const titleEl = document.getElementById('gloveLightboxTitle');
    const subtitleEl = document.getElementById('gloveLightboxSubtitle');

    const curIdx = currentPhotoIdx[blockId] || 0;
    const curPhoto = (cat.photos && cat.photos[curIdx]) || { src: cat.defaultGloveImg, name: cat.defaultGloveTitle };

    if (imgEl) {
      imgEl.src = curPhoto.src;
      imgEl.alt = curPhoto.name;
    }
    if (brandEl) brandEl.textContent = cat.title;
    if (titleEl) titleEl.textContent = curPhoto.name;
    if (subtitleEl) subtitleEl.textContent = `${cat.subtitle} • Calidad 100% Homologada`;

    if (modal) {
      modal.style.display = 'flex';
      document.body.style.overflow = 'hidden';
      requestAnimationFrame(() => {
        modal.classList.add('lightbox-open');
      });
    }
  }

  function closeGloveLightbox() {
    const modal = document.getElementById('gloveLightboxModal');
    if (modal) {
      modal.classList.remove('lightbox-open');
      setTimeout(() => {
        modal.style.display = 'none';
        document.body.style.overflow = '';
      }, 250);
    }
    activeLightboxBlockId = null;
  }

  function stepLightbox(direction) {
    if (!activeLightboxBlockId) return;
    const cat = SHOWCASES_DATA.find(c => c.id === activeLightboxBlockId);
    if (!cat || !cat.photos.length) return;

    const nextIdx = (currentPhotoIdx[activeLightboxBlockId] || 0) + direction;
    goToBlockPhoto(activeLightboxBlockId, nextIdx);

    const imgEl = document.getElementById('gloveLightboxImg');
    const titleEl = document.getElementById('gloveLightboxTitle');
    const curIdx = currentPhotoIdx[activeLightboxBlockId];
    const photo = cat.photos[curIdx];

    if (imgEl && photo) {
      imgEl.classList.remove('lightbox-img-pop');
      void imgEl.offsetWidth;
      imgEl.src = photo.src;
      imgEl.alt = photo.name;
      imgEl.classList.add('lightbox-img-pop');
    }
    if (titleEl && photo) {
      titleEl.textContent = photo.name;
    }
  }

  function startBlockAutoSlide(blockId, intervalMs = 3000) {
    stopBlockAutoSlide(blockId);
    const cat = SHOWCASES_DATA.find(c => c.id === blockId);
    if (!cat || cat.photos.length <= 1) return;
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
      // Clic para abrir lightbox en la foto grande o en la cápsula de ampliación
      const largeGlove = e.target.closest('.stage-large-glove');
      const badgeZoom = e.target.closest('.large-glove-badge');
      if (badgeZoom || largeGlove) {
        e.preventDefault();
        const targetEl = badgeZoom || largeGlove;
        const blockId = targetEl.getAttribute('data-block-id');
        if (blockId) {
          openGloveLightbox(blockId);
        }
        return;
      }

      // Controles del Lightbox
      if (e.target.closest('#gloveLightboxClose') || e.target.closest('#gloveLightboxBackdrop')) {
        e.preventDefault();
        closeGloveLightbox();
        return;
      }

      if (e.target.closest('#gloveLightboxPrev')) {
        e.preventDefault();
        stepLightbox(-1);
        return;
      }

      if (e.target.closest('#gloveLightboxNext')) {
        e.preventDefault();
        stepLightbox(1);
        return;
      }

      // Clic en pestaña de sub-línea (ej. Nitrilo Examen vs Nitrilo HD)
      const sublineBtn = e.target.closest('.subline-tab-btn');
      if (sublineBtn) {
        e.preventDefault();
        const blockId = sublineBtn.getAttribute('data-block-id');
        const sublineKey = sublineBtn.getAttribute('data-subline');
        if (blockId && sublineKey) {
          switchBlockSubline(blockId, sublineKey);
        }
        return;
      }

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
        const block = sizePill.closest('.showcase-block');
        const blockId = block ? block.id : null;
        const selectedSize = sizePill.getAttribute('data-size') || sizePill.textContent.trim();

        sizePill.parentElement.querySelectorAll('.size-pill').forEach(s => s.classList.remove('active'));
        sizePill.classList.add('active');

        if (blockId) {
          const cat = SHOWCASES_DATA.find(c => c.id === blockId);
          if (cat && cat.sizePhotos && cat.sizePhotos[selectedSize]) {
            updateBlockPhotos(blockId, cat.sizePhotos[selectedSize], selectedSize);
          }
        }
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

    // 6. Atajos de Teclado para el Lightbox (Escape para cerrar, Flechas para navegar)
    document.addEventListener('keydown', (e) => {
      const modal = document.getElementById('gloveLightboxModal');
      if (!modal || modal.style.display === 'none') return;

      if (e.key === 'Escape') {
        closeGloveLightbox();
      } else if (e.key === 'ArrowLeft') {
        stepLightbox(-1);
      } else if (e.key === 'ArrowRight') {
        stepLightbox(1);
      }
    });
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
