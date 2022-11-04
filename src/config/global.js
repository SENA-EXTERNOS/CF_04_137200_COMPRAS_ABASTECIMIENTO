export default {
  global: {
    componenteFormativo: 'Selección de proveedores',
    descripcionCurso:
      'En el presente componente se hace referencia a la selección y calificación de proveedores, se tendrán en cuenta criterios de selección, métodos de evaluación, procesos de provisión de productos, entre otros que hacen parte importante de este procedimiento, para determinar la clasificación de dichos proveedores.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
      {
        clases: ['banner-principal-decorativo-5'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-5.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Proveedores',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Tipo de proveedores',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Clasificación de proveedores',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Verificación de requisitos ',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Informe de selección de proveedores ',
            hash: 't_1_4',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Gestión de proveedores',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Negociación con proveedores',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Etapas del proceso de negociación',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Estrategias de negociación con proveedores',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Seguimiento de proveedores y pedidos',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo: ' Mejores prácticas con proveedores',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Informe',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Tipos',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Características',
            hash: 't_3_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Gestión de proveedores',
      referencia: 'Sánchez Estrella O.  Gestión de proveedores. MF1004_3.',
      tipo: 'Libro',
      link:
        'https://books.google.com.co/books?id=nBQZEAAAQBAJ&printsec=frontcover&dq=gestion+de+proveedores&hl=es&sa=X&redir_esc=y#v=onepage&q&f=false',
    },
    {
      tema: 'Indicadores de calidad y evaluación de proveedores ',
      referencia: 'Carmen Arenal Laza. Gestión de proveedores. MF1004.',
      tipo: 'Libro',
      link:
        'https://books.google.com.co/books?id=v01mEAAAQBAJ&pg=PA151&dq=INDICADORES+DE+DESEMPE%C3%91O+PROVEEDORES&hl=es&sa=X&ved=2ahUKEwj71Y3U6eX5AhVuZTABHQ5tCtQQ6AF6BAgHEAI#v=onepage&q=INDICADORES%20DE%20DESEMPE%C3%91O%20PROVEEDORES&f=false ',
    },
  ],
  glosario: [
    {
      termino: 'Cadena de suministro',
      significado:
        'una cadena de suministro es el conjunto de actividades, instalaciones y medios de distribución necesarios para llevar a cabo el proceso de venta de un producto en su totalidad. Esto se da desde la búsqueda de materias primas, su posterior transformación, llegando hasta la fabricación, transporte y entrega al consumidor final. (Roldán, 2017)',
    },
    {
      termino: 'Canales de distribución',
      significado:
        'los canales de distribución están definidos por las diferentes fases o etapas por las que un producto pasa, de modo que su propiedad va transitando de unas manos a otras, desde el fabricante, hasta el consumidor o usuario final. (Sánchez Galán, 2015)',
    },
    {
      termino: 'EOQ (cantidad económica del pedido)',
      significado:
        'la cantidad económica de pedido o EOQ por las siglas de su nombre en inglés <em>(Economic Order Quantity)<em> es un modelo matemático que sirve para calcular el tamaño óptimo de cada pedido de materia prima. Esto, buscando la mayor eficiencia. (Westreicher, 2022)',
    },
    {
      termino: 'Gestión de inventarios',
      significado:
        'la gestión de inventarios es la administración respecto al ingreso y salida de insumos, productos terminados o semiterminados, bienes auxiliares y herramientas que posee una empresa. (Westreicher, 2019)',
    },
    {
      termino: 'Inventario final',
      significado:
        'el inventario final es aquel que se registra al terminar un ejercicio contable, previo control de entradas y salidas de existencias. (Llamas, 2020)',
    },
    {
      termino: 'Inventario inicial',
      significado:
        'el inventario inicial es aquel que se registra al comienzo de un ejercicio contable, previo cálculo de variaciones de este al final del ejercicio anterior. (Llamas, 2020)',
    },
    {
      termino: '<em>Just in time<em>',
      significado:
        'es la filosofía de dar lo que el cliente pide, la cantidad que pide, a la fecha acordada en el sitio acordado, de acuerdo al método Toyota.',
    },
    {
      termino: 'KPIs',
      significado:
        'los KPI, abreviatura en inglés de Key Performance Indicator, son indicadores de rendimiento que utilizan las organizaciones para medir el desempeño en las áreas productivas. (Orellana Nirian, 2020)',
    },
    {
      termino: 'Lote',
      significado:
        'un lote es una forma de agrupación de activos o instrumentos financieros y valores equivalente en la mayoría de los casos a cien unidades de estos. A menudo la misma permite su posibilidad de traspaso en los mercados. (Sánchez Galán, 2020)',
    },
    {
      termino: 'Materia prima',
      significado:
        'una materia prima, también conocida como bien intermedio, es todo elemento que es transformado durante un proceso de producción, hasta convertirse en un bien de consumo. (Caballero Ferreiro, 2015)',
    },
    {
      termino: 'Mercancía',
      significado:
        'una mercancía es cualquier objeto factible de ser comercializado o intercambiado en el mercado. Se caracteriza por poder satisfacer alguna necesidad del consumidor.(Westreicher, 2020)',
    },
    {
      termino: 'Orden de compra',
      significado:
        'una orden de compra, también llamada orden de pedido o nota de pedido, es un documento mediante el cual el comprador solicita mercancías al vendedor. (Rus Arias,2020)',
    },
    {
      termino: 'Propuesta de valor',
      significado:
        'la propuesta de valor es el factor que hace diferente y útil a una empresa frente a la competencia y es apreciado por los usuarios. (Peiró, 2018)',
    },
    {
      termino: 'Rotación de inventario',
      significado:
        'la rotación del inventario es una práctica de marketing y la dirección estratégica que consiste en el control de los productos desde el punto logístico, por medio de las veces por periodo de tiempo que se renuevan las existencias (Sánchez Galán, 2017)',
    },
    {
      termino: 'Sistema de inventario',
      significado:
        'el sistema de inventarios es el grupo de reglas y procesos que implementa una empresa para planificar y supervisar las mercancías y los materiales de los que dispone. (Westreicher, 2021)',
    },
    {
      termino: 'Suministro',
      significado:
        'el suministro es la dotación de un bien, el cual debe pasar por todo un proceso para ir desde el productor hasta el consumidor o beneficiario final. (Westreicher, 2020)',
    },
    {
      termino: 'Trazabilidad',
      significado:
        'serie de procedimientos que permiten seguir el proceso de evolución de un producto en cada una de sus etapas.',
    },
    {
      termino: 'Valoración de inventario',
      significado:
        'son técnicas aplicadas para valorar las unidades en almacén en términos monetarios. Esta valoración es especialmente útil cuando las unidades se van adquiriendo a distintos precios. (Marco Sanjuán, 2018)',
    },
  ],
  referencias: [
    {
      referencia:
        'Caballero Ferrari, F. J. (2015) <em>Materia prima<em>. Economipedia',
      link: 'https://economipedia.com/definiciones/materia-prima.html',
    },
    {
      referencia: 'Llamas, J. (2020) <em>Inventario final<em>. Economipedia.',
      link: 'https://economipedia.com/definiciones/inventario-final.html',
    },
    {
      referencia: 'Llamas, J. (2020) <em>Inventario inicial<em>. Economipedia.',
      link: 'https://economipedia.com/definiciones/inventario-inicial.html',
    },
    {
      referencia:
        'Marco Sanjuán, F. J. (2017) <em>Métodos de valoración de inventarios<em>. Economipedia',
      link:
        'https://economipedia.com/definiciones/metodos-valoracion-inventarios.html',
    },
    {
      referencia:
        'Orellana Nirian, P. KPI <em>(Key Performance Indicator)<em>. Economipedia.',
      link:
        'https://economipedia.com/definiciones/empresas/kpi-key-performance-indicator.html',
    },
    {
      referencia: 'Peiró, R. (2018) <em>Propuesta de valor. Economipedia.<em>',
      link: 'https://economipedia.com/definiciones/propuesta-de-valor.html',
    },
    {
      referencia:
        'Roldan, P. N. (2017) <em>Cadena de suministro. Economipedia.<em>',
      link: 'https://economipedia.com/definiciones/cadena-de-suministro.html',
    },
    {
      referencia:
        'Rus Arias. E. (2020) <em>Orden de compra.<em>  Economipedia.',
      link: 'https://economipedia.com/definiciones/orden-de-compra.html',
    },
    {
      referencia:
        'Sánchez Galán, J. (2015) <em>Canales de distribución.<em> Economipedia.',
      link:
        'https://economipedia.com/definiciones/canales-de-distribucion.html',
    },
    {
      referencia: 'Sánchez Galán, J. (2020) <em>Lote<em>. Economipedia.',
      link: 'https://economipedia.com/definiciones/lote.html',
    },
    {
      referencia:
        'Westreicher, G. (2019) <em>Gestión de inventaros.<em> Economipedia. ',
      link: 'https://economipedia.com/definiciones/gestion-de-inventarios.html',
    },
    {
      referencia: 'Westreicher, G. (2020) <em>Mercancía.<em> Economipedia.',
      link: 'https://economipedia.com/definiciones/mercancia.html',
    },
    {
      referencia: 'Westreicher, G. (2020) <em>Suministro.<em> Economipedia.',
      link: 'https://economipedia.com/definiciones/suministro.html',
    },
    {
      referencia:
        'Westreicher, G. (2021) <em>Sistema de inventario.<em> Economipedia.',
      link: 'https://economipedia.com/definiciones/sistema-de-inventarios.html',
    },
    {
      referencia:
        'Westreicher, G. (2022) <em>Cantidad económica de pedido.<em> Economipedia.',
      link:
        'https://economipedia.com/definiciones/cantidad-economica-de-pedido-eoq.html',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
