import { TranslationContent } from './translation.types';
import { SHARED_IMAGES } from './shared-images';

export const ES_TRANSLATION: TranslationContent = {
  meta: {
    title: 'Cardamomo Guatemala | Exportación Premium a Europa y Medio Oriente',
    description:
      'Empresa familiar guatemalteca exportadora de cardamomo premium. Calidad certificada, herencia maya y logística confiable hacia Europa y Medio Oriente.'
  },
  nav: [
    { href: '#inicio', label: 'Inicio' },
    { href: '#nosotros', label: 'Quiénes Somos' },
    { href: '#productos', label: 'Productos' },
    { href: '#calidades', label: 'Calidades' },
    { href: '#procesos', label: 'Procesos' },
    { href: '#logistica', label: 'Logística' },
    { href: '#contacto', label: 'Contacto' }
  ],
  header: {
    cta: 'Solicitar Cotización',
    langEs: 'ES',
    langEn: 'EN'
  },
  hero: {
    badge: 'Exportadores desde el corazón de Guatemala',
    title: 'Cardamomo ',
    titleEm: 'Guatemalteco',
    titleEnd: ' de Excelencia Mundial',
    description:
      'Tres generaciones cultivando el cardamomo más aromático de las tierras altas. Exportamos calidad premium a importadores en Europa y el Medio Oriente, con la confianza de una empresa familiar guatemalteca.',
    ctaSample: 'Solicitar Muestra',
    ctaProducts: 'Ver Productos',
    statsLabel: 'Indicadores de la empresa',
    stats: [
      { value: '30+', label: 'Años de experiencia' },
      { value: '15', label: 'Países de destino' },
      { value: '100%', label: 'Trazabilidad' }
    ],
    videoTitle: 'Video corporativo Cardamomo Guatemala',
    videoCaption: 'Conoce nuestra historia y el origen de nuestro cardamomo premium',
    scrollLabel: 'Desplazarse a la siguiente sección'
  },
  about: {
    label: 'Nuestra Historia',
    title: 'Quiénes Somos',
    subtitle:
      'Una empresa familiar guatemalteca con décadas de experiencia exportando el cardamomo más aromático del mundo.',
    imageAlt: 'Plantación de cardamomo Elettaria cardamomum en las tierras altas de Guatemala',
    badge: 'Desde 1990',
    lead: 'Somos exportadores guatemaltecos de cardamomo premium, fundados sobre los valores de honestidad, trabajo dedicado y respeto por la tierra que nos ha dado tanto.',
    p1: 'Nuestra finca familiar en las regiones productoras de Alta Verapaz y Quiché nos permite controlar cada etapa: desde la siembra hasta la entrega en puerto. Trabajamos directamente con importadores en Europa (España, Alemania, Países Bajos) y el Medio Oriente (Emiratos Árabes, Arabia Saudita, Qatar), ofreciendo un producto que destaca por su aroma intenso, color verde brillante y bajo contenido de humedad.',
    p2: 'Creemos que el cardamomo guatemalteco merece ser reconocido como referente mundial de calidad, y cada embarque que realizamos lleva consigo el orgullo de nuestra herencia cultural.',
    quote: 'Del suelo sagrado de Guatemala al mundo, con la calidez de una familia que cuida cada grano.',
    quoteCite: '— Fundadores, Cardamomo Guatemala',
    values: [
      {
        icon: '🌿',
        title: 'Tradición Familiar',
        description:
          'Tres generaciones dedicadas al cultivo y comercio de cardamomo en las tierras altas de Guatemala.'
      },
      {
        icon: '✦',
        title: 'Herencia Maya',
        description:
          'Honramos las raíces culturales de nuestra tierra, donde el cardamomo ha sido tesoro ancestral.'
      },
      {
        icon: '🌍',
        title: 'Alcance Global',
        description:
          'Exportamos con éxito a importadores en Europa, Medio Oriente y mercados gourmet internacionales.'
      },
      {
        icon: '🏆',
        title: 'Calidad Certificada',
        description:
          'Procesos controlados desde la cosecha hasta el embarque, con trazabilidad completa.'
      }
    ]
  },
  products: {
    label: 'Nuestro Catálogo',
    title: 'Productos',
    subtitle:
      'Líneas de exportación adaptadas a las exigencias de importadores europeos y del Medio Oriente. Guatemala produce Elettaria cardamomum, reconocido mundialmente como el cardamomo verde de mayor calidad.',
    consultLink: 'Consultar disponibilidad →',
    varietiesTitle: 'Variedades y Germoplasma Guatemalteco',
    varietiesIntro:
      'El cardamomo llegó a Guatemala entre 1910 y 1914 desde la costa de Malabar (India). Hoy, el país es el mayor productor mundial, con el 70% de la cosecha concentrada en Alta Verapaz, seguido de Quiché, Huehuetenango e Izabal.',
    cultivationTitle: 'Métodos de Cultivo',
    items: [
      {
        name: 'Cardamomo en Grano',
        description:
          'Granos enteros de color verde intenso, seleccionados manualmente. Ideal para mercados gourmet y repostería premium.',
        specs: ['Tamaño 7+ mm', 'Color verde brillante', 'Aroma intenso'],
        icon: '◆',
        image: SHARED_IMAGES.productGrano,
        imageAlt: 'Cápsulas de cardamomo verde con semillas visibles'
      },
      {
        name: 'Cardamomo Descascarado',
        description:
          'Semillas limpias listas para moler o uso directo. Alto rendimiento para industria alimentaria y bebidas.',
        specs: ['Pureza 99%+', 'Bajo residuo', 'Molienda uniforme'],
        icon: '◇',
        image: SHARED_IMAGES.productDescascarado,
        imageAlt: 'Cápsulas de cardamomo Elettaria cardamomum secas'
      },
      {
        name: 'Cardamomo Molido',
        description:
          'Polvo fino de máxima frescura, empacado al vacío para preservar aroma y aceites esenciales.',
        specs: ['Malla 60-80', 'Empaque al vacío', 'Vida útil extendida'],
        icon: '◎',
        image: SHARED_IMAGES.productMolido,
        imageAlt: 'Flor y fruto de Elettaria cardamomum en planta'
      },
      {
        name: 'Mezclas Especiales',
        description:
          'Blends personalizados según especificaciones del importador. Cardamomo con canela, clavo u otras especias.',
        specs: ['Fórmulas a medida', 'Etiquetado privado', 'MOQ flexible'],
        icon: '✦',
        image: SHARED_IMAGES.productMezclas,
        imageAlt: 'Producto elaborado con cardamomo molido de alta calidad'
      }
    ],
    varieties: [
      {
        name: 'Elettaria cardamomum',
        origin: 'Especie única en Guatemala',
        description:
          'Introducida desde la costa de Malabar (India) entre 1910–1914. Es la única especie cultivada comercialmente en el país y la base de la exportación mundial guatemalteca.',
        traits: [
          'Perenne de la familia Zingiberaceae',
          'Altitud 250–1.500 m s.n.m.',
          'Sombra de árboles nativos'
        ]
      },
      {
        name: 'Líneas tipo Vazhukka',
        origin: 'Germoplasma predominante',
        description:
          'Estudios moleculares en Alta Verapaz, Quiché e Izabal identifican que la mayoría del germoplasma local se alinea con variedades de porte intermedio, similares al Vazhukka indio.',
        traits: [
          'Cápsulas de tamaño medio-grande',
          'Alto rendimiento por hectárea',
          'Aroma frutal característico'
        ]
      },
      {
        name: 'Líneas tipo Malabar',
        origin: 'Selección de exportación',
        description:
          'Plantas de porte erecto con cápsulas verdes brillantes de alto contenido de aceites esenciales (cineol y α-terpinil acetato). Preferidas para mercados gourmet europeos.',
        traits: ['Color verde esmeralda', 'Aroma intenso y persistente', 'Ideal para grado Jumbo Green']
      },
      {
        name: 'Líneas tipo Mysore',
        origin: 'Cultivo bajo sombra',
        description:
          'Variedades de porte robusto adaptadas al microclima húmedo de los bosques nubosos de Cobán. Cosecha manual en racimos maduros para máxima calidad organoléptica.',
        traits: ['Cultivo asociado a sombra', 'Cosecha selectiva', 'Baja humedad post-secado']
      }
    ],
    cultivation: [
      {
        title: 'Sistema de Sombra',
        detail:
          'Plantaciones bajo dosel de árboles nativos (chaparro, inga) que replican el hábitat natural del cardamomo en bosques tropicales.'
      },
      {
        title: 'Pequeños Productores',
        detail:
          'Más del 70% de la producción nacional proviene de fincas familiares en Alta Verapaz, Quiché e Izabal — la Franja Transversal del Norte.'
      },
      {
        title: 'Secado Controlado',
        detail:
          'Secadores de madera o gas que preservan el color verde y reducen la humedad por debajo del 12%, requisito clave para exportación.'
      },
      {
        title: 'Trazabilidad por Lote',
        detail:
          'Cada lote se rastrea desde la finca de origen hasta el embarque, con registro de fecha de cosecha, secado y clasificación.'
      }
    ]
  },
  qualities: {
    label: 'Estándares de Exportación',
    title: 'Calidades de Cardamomo',
    subtitle:
      'Grados comerciales guatemaltecos clasificados por tamaño, color, humedad y contenido de aceites esenciales, según los estándares de ADECAR y AGEXPORT.',
    tableCaption: 'Tabla comparativa de calidades de cardamomo guatemalteco',
    cols: {
      grade: 'Grado',
      size: 'Tamaño',
      moisture: 'Humedad',
      description: 'Descripción',
      markets: 'Mercados'
    },
    criteria: [
      {
        icon: '🎨',
        title: 'Color',
        description:
          'Verde brillante sin manchas amarillas ni marrones. Medido con carta de color estándar ADECAR.'
      },
      {
        icon: '📏',
        title: 'Tamaño',
        description:
          'Diámetro de cápsula en milímetros, medido con tamices calibrados de malla 6, 7 y 8 mm.'
      },
      {
        icon: '💧',
        title: 'Humedad',
        description:
          'Contenido de humedad por debajo del 12% (premium) o 13% (comercial), verificado con higrómetro digital.'
      },
      {
        icon: '🌿',
        title: 'Aceites Esenciales',
        description:
          'Concentración de cineol y α-terpinil acetato que define el aroma característico del cardamomo guatemalteco.'
      }
    ],
    grades: [
      {
        grade: 'Jumbo Green',
        code: 'JG',
        color: '#1a3c34',
        size: '8 mm+',
        moisture: '< 10%',
        description:
          'Cápsulas extra grandes de color verde intenso. Máxima concentración de aceites esenciales. Grado insignia para mercados premium de Europa y Medio Oriente.',
        markets: ['Europa Gourmet', 'Emiratos Árabes', 'Arabia Saudita']
      },
      {
        grade: 'Imperial Best Green',
        code: 'IBG',
        color: '#2d6a4f',
        size: '7–8 mm',
        moisture: '< 11%',
        description:
          'Cápsulas grandes de verde brillante uniforme. Excelente relación aroma-precio. El grado más demandado por importadores europeos.',
        markets: ['España', 'Alemania', 'Países Bajos']
      },
      {
        grade: 'Fancy Green Extra',
        code: 'FGE',
        color: '#40916c',
        size: '6.5–7.5 mm',
        moisture: '< 11%',
        description:
          'Cápsulas de tamaño medio con color verde extra. Ideal para industria alimentaria, repostería y bebidas aromáticas.',
        markets: ['Europa', 'Qatar', 'Procesadores']
      },
      {
        grade: 'Fancy Green',
        code: 'FG',
        color: '#52b788',
        size: '6–7 mm',
        moisture: '< 12%',
        description:
          'Grano uniforme para molienda, blends y uso industrial. Pureza superior al 99% tras selección manual y mecánica.',
        markets: ['Industria', 'Distribuidores']
      },
      {
        grade: 'Mixed Green / Seeds',
        code: 'MG',
        color: '#74c69d',
        size: '5–6 mm',
        moisture: '< 13%',
        description:
          'Grado comercial y semillas descascaradas para grandes volúmenes. Contratos anuales con trazabilidad completa por lote.',
        markets: ['Contratos anuales', 'Molienda industrial']
      }
    ]
  },
  processes: {
    label: 'Maquilado y Transformación',
    title: 'Procesos',
    subtitle:
      'Planta de maquilado propia con capacidad para procesar, empacar y etiquetar según las especificaciones de cada importador.',
    ctaText: '¿Necesitas un proceso personalizado o empaque con tu marca?',
    ctaButton: 'Solicitar Propuesta de Maquilado',
    steps: [
      {
        step: '01',
        title: 'Recepción y Clasificación',
        description:
          'Ingreso de materia prima con análisis de humedad, color y tamaño. Separación por grados de calidad (Jumbo Green, Imperial Best Green, Fancy Green).',
        icon: '📥'
      },
      {
        step: '02',
        title: 'Limpieza y Selección',
        description:
          'Eliminación de impurezas mediante tamizado y selección manual. Garantizamos pureza superior al 99%.',
        icon: '🔍'
      },
      {
        step: '03',
        title: 'Descascarado',
        description:
          'Proceso mecánico controlado para extraer semillas sin dañar los aceites esenciales del grano.',
        icon: '⚙️'
      },
      {
        step: '04',
        title: 'Molienda (opcional)',
        description: 'Molienda a especificación del cliente: malla 40, 60 u 80. Empaque inmediato al vacío.',
        icon: '🏭'
      },
      {
        step: '05',
        title: 'Empaque y Etiquetado',
        description:
          'Sacos de yute (50–60 kg), cajas de cartón corrugado o empaque privado (private label) según requerimientos del importador.',
        icon: '📦'
      },
      {
        step: '06',
        title: 'Control de Calidad',
        description:
          'Análisis final de humedad, granulometría y prueba organoléptica. Certificado de calidad por lote.',
        icon: '✅'
      }
    ],
    images: [
      {
        src: SHARED_IMAGES.processCultivo,
        alt: 'Cardamomo fresco en planta — flor y fruto de Elettaria cardamomum',
        label: 'Cultivo'
      },
      {
        src: SHARED_IMAGES.processSecado,
        alt: 'Cardamomo seco — cápsulas verdes con semillas',
        label: 'Secado'
      },
      {
        src: SHARED_IMAGES.processClasificacion,
        alt: 'Cardamomo procesado — cápsulas clasificadas por tamaño',
        label: 'Clasificación'
      },
      {
        src: SHARED_IMAGES.processEmpaque,
        alt: 'Sacos de yute para empaque de exportación de especias',
        label: 'Empaque'
      }
    ]
  },
  logistics: {
    label: 'Exportación Confiable',
    title: 'Logística',
    subtitle: 'Tiempos de entrega competitivos y documentación completa para importadores internacionales.',
    ecomTitle: 'Tiempos de Respuesta',
    pipelineTitle: 'Proceso de Exportación desde Guatemala',
    portOriginTitle: 'Puerto de salida',
    portOriginText: 'Puerto Quetzal, Guatemala — conexión directa a principales hubs mundiales',
    docsTitle: 'Documentación',
    docsText: 'Certificado fitosanitario, certificado de origen, factura comercial, lista de empaque',
    trackingTitle: 'Seguimiento',
    trackingText: 'Tracking de contenedor y actualizaciones por correo en cada hito logístico',
    routeCols: {
      port: 'Puerto destino',
      transit: 'Tiempo de tránsito',
      incoterm: 'Incoterm'
    },
    ecomTimes: [
      { label: 'Cotización', time: '24–48 h' },
      { label: 'Muestra', time: '5–7 días' },
      { label: 'Producción', time: '10–15 días' },
      { label: 'Embarque', time: '3–5 días' }
    ],
    routes: [
      {
        destination: 'Europa',
        flag: '🇪🇺',
        port: 'Rotterdam (Países Bajos) / Valencia (España)',
        transitTime: '18–22 días',
        incoterm: 'FOB / CIF',
        details:
          "Contenedores de 20' y 40' HC desde Puerto Quetzal. Certificado fitosanitario MAGA, certificado de origen y factura comercial incluidos. Cumplimiento UE 396/2005 (residuos de plaguicidas)."
      },
      {
        destination: 'Medio Oriente',
        flag: '🌍',
        port: 'Jebel Ali (Dubai) / Jeddah (Arabia Saudita)',
        transitTime: '25–30 días',
        incoterm: 'FOB / CIF',
        details:
          'Empaque reforzado para climas extremos. Cumplimiento de estándares halal. Inspección SGS/Bureau Veritas disponible bajo solicitud del importador.'
      },
      {
        destination: 'Asia',
        flag: '🌏',
        port: 'Singapur / Mumbai',
        transitTime: '28–35 días',
        incoterm: 'FOB',
        details:
          'Conexiones vía transbordo en hubes del Pacífico. Seguimiento en tiempo real del contenedor con actualizaciones por correo.'
      }
    ],
    pipeline: [
      {
        step: '1',
        title: 'Orden y Contrato',
        description:
          'Confirmación de grado, volumen, Incoterm (FOB Puerto Quetzal o CIF destino) y especificaciones de empaque.'
      },
      {
        step: '2',
        title: 'Producción y Maquilado',
        description: 'Clasificación, limpieza y empaque en planta. Control de calidad con certificado por lote.'
      },
      {
        step: '3',
        title: 'Documentación',
        description:
          'Factura comercial, lista de empaque, certificado fitosanitario (MAGA), certificado de origen (AGEXPORT) y conocimiento de embarque.'
      },
      {
        step: '4',
        title: 'Transporte Terrestre',
        description:
          'Traslado en camión refrigerado desde planta en Alta Verapaz/Ciudad de Guatemala hasta Puerto Quetzal (Escuintla).'
      },
      {
        step: '5',
        title: 'Embarque Marítimo',
        description:
          'Estiba en contenedor con bolsa térmica y control de humedad. Salida hacia hub europeo o del Golfo Pérsico.'
      },
      {
        step: '6',
        title: 'Entrega al Importador',
        description:
          'Llegada a puerto destino, despacho aduanero y entrega según Incoterm acordado. Soporte post-venta continuo.'
      }
    ],
    images: [
      {
        src: SHARED_IMAGES.logShip,
        alt: 'Buque portacontenedores para exportación marítima internacional',
        caption: 'Transporte marítimo'
      },
      {
        src: SHARED_IMAGES.logRotterdam,
        alt: 'Puerto de Rotterdam — principal hub de llegada a Europa',
        caption: 'Puerto destino Europa'
      },
      {
        src: SHARED_IMAGES.logDubai,
        alt: 'Puerto Jebel Ali en Dubai — hub del Medio Oriente',
        caption: 'Puerto destino Medio Oriente'
      }
    ]
  },
  contact: {
    label: 'Hablemos',
    title: 'Contacto',
    subtitle:
      '¿Eres importador en Europa o Medio Oriente? Escríbenos para cotización, muestras o visita a nuestra planta.',
    infoTitle: 'Datos de Exportación',
    representativeRole: 'Representante de Exportaciones',
    cedulaLabel: 'Cédula:',
    email: 'Correo',
    phone: 'Teléfono',
    whatsapp: 'WhatsApp',
    office: 'Oficina',
    hours: 'Horario',
    address: 'Zona 4, Ciudad de Guatemala, Guatemala',
    hoursValue: 'Lunes a Viernes, 8:00 – 17:00 (GMT-6)',
    marketsLabel: 'Mercados que atendemos:',
    marketTags: ['España', 'Alemania', 'Países Bajos', 'Emiratos Árabes', 'Arabia Saudita', 'Qatar'],
    form: {
      name: 'Nombre completo *',
      company: 'Empresa *',
      email: 'Correo electrónico *',
      country: 'País *',
      product: 'Producto de interés',
      message: 'Mensaje *',
      messagePlaceholder: 'Cuéntenos sobre su volumen estimado, calidad requerida y destino...',
      submit: 'Enviar Solicitud',
      successTitle: '¡Mensaje recibido!',
      successText:
        'Gracias por su interés. Nuestro equipo de exportaciones le responderá en un plazo de 24–48 horas.'
    },
    productOptions: [
      { value: 'grano', label: 'Cardamomo en Grano' },
      { value: 'descascarado', label: 'Cardamomo Descascarado' },
      { value: 'molido', label: 'Cardamomo Molido' },
      { value: 'maquilado', label: 'Servicio de Maquilado' },
      { value: 'otro', label: 'Otro / Consulta General' }
    ]
  },
  footer: {
    tagline: 'Exportadores familiares de cardamomo premium desde el corazón de las tierras altas guatemaltecas.',
    navTitle: 'Navegación',
    exportTitle: 'Exportamos a',
    exportRegions: 'Europa · Medio Oriente · Asia',
    origin: 'Hecho con orgullo en 🇬🇹 Guatemala',
    copyright: 'Cardamomo Guatemala. Todos los derechos reservados.',
    representative: 'Kevin Rivera · Cédula 30617635',
    motto: 'Del suelo sagrado al mundo.'
  }
};
