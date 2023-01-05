<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Gestión de proveedores

    .row.justify-content-center.align-items-start.my-5      
      .col-lg-2
          img(src='@/assets/curso/temas/tema2/img1.png')                   
      .col-lg-10
        p.mt-3 La gestión de proveedores consiste en realizar acciones que propenden por emprender relaciones comerciales convenientes y estratégicas para las organizaciones, con el fin de proveer o abastecer materias primas, insumos o servicios necesarios en sus procesos, ya sean productivos o de prestación de servicios. Las organizaciones deben generar acciones que van desde la búsqueda, pasando por  la clasificación, generación de comercio, evaluación de resultados , hasta llegar al mejoramiento.


    h3 Negociación con proveedores

    p.mb-3 La gestión de los proveedores se desprende de la necesidad de negociar y establecer términos comunes para la relación comercial entre las empresas. En estas negociaciones se debe tener en cuenta precios de intercambio, valores agregados dentro de estas, garantías, servicio postventa, condiciones de pago, entre muchos otros aspectos.
    p.mb-5 Existen factores clave a tener en cuenta antes de sentarse a concertar con los posibles proveedores:

    .row.justify-content-center.my-5
      .col-lg-6        
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta clr--gris")
          .row(titulo="Información relevante")
            .col-12
              p Antes de tratar de entrar en cualquier negociación, se debe tener mucha información que permita dimensionar quién es la contraparte (<em>Benchmarking</em> de proveedores), en donde se conozcan aspectos como: condiciones comerciales que manejan, portafolio de productos o servicios, precios, servicios postventa, empresas a las que sirven de proveedores, etc.
          
          .row(titulo="Preparar la negociación")
            .col-12
              p Además de la información de la contraparte, con la que se cuenta, también se debe definir claramente el objetivo que se quiere alcanzar en la negociación, teniendo presente sus límites y los aspectos que se pueden asumir o ceder.

          .row(titulo="Brindar información")
            .col-12
              p Así como se requiere información de la contraparte, también se debe brindar de la propia organización, con datos que puedan ser relevantes para un posible proveedor y útiles para su propio análisis.

          .row(titulo="Tiempo requerido")
            .col-12
              p Depende de la dimensión y de la importancia de la relación comercial con la contraparte, esta puede tomar tiempo para cualquiera de las partes, por esto no conviene apresurar las cosas y se debe dar tiempo a que el acuerdo se cristalice de la forma más conveniente y justa, ceñidas a las políticas y normativas de ambas partes.
     
     
     
      .col-lg-6.d-none.d-lg-flex
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/temas/tema2/img2.png", alt="alt").m-auto


      .row.justify-content-center.align-items-start.mt-3     
      .col-lg-5
          img(src='@/assets/curso/temas/tema2/img3.png')                   
      .col-lg-7
        p Los aspectos más importantes en cualquier negociación son: 

        ul.lista-ul--
            li 
              i.fas.fa-angle-right.yelllow
              b  Precios: 
              | que son en gran parte los que motivan a seleccionar un proveedor, pero no el único.
            
            li.mt-3 
              i.fas.fa-angle-right.yelllow
              b  Agilidad en las entregas o exclusividad: 
              |  son aspectos que hacen parte de valores agregados que se pueden requerir y que se pueden obtener por este método de negociación.
            li.mt-3
              i.fas.fa-angle-right.yelllow
              b  Condiciones de pago: 
              | este es un aspecto que le interesa mucho a la contraparte y que podría servir de moneda de cambio si se establecen plazos de pago convenientes para ellos, se podrían obtener muchos de los objetivos de la negociación. Y será la condición MÍNIMA de plazos de pago con los clientes de la empresa.
            
    
    h3 Etapas en el proceso de negociación

    p Una vez establecido un contacto con los posibles proveedores y haber asegurado la intención de una negociación, se deben tener en cuenta cinco etapas para dicho proceso:
    .col-lg-12.mt-5
      figure
          img(src="@/assets/curso/temas/tema2/img4.png", alt="alt")

    .row.justify-content-around.align-items-centerrd.my-5
          .col-10
            .tarjeta.bg8.mt-2.p-3
              .row.justify-content-around.align-items-center
                .col-lg-1.mb-3
                  img(src="@/assets/curso/temas/tema2/img5.svg" )
                .col-11
                  .row.justify-content-between.align-items-center
                    .col.mb-4.mb-sm-0
                      h4.mb-1.text-white Negociación con proveedores
                      p.text-small.text-white Si desea profundizar más en el tema Etapas en la negociación con proveedores, descargue el siguiente documento.
                    .col-sm-auto
                      a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/Anexo 2 - Etapas en la negociacion con proveedores.pdf')" target="_blank")
                        span Descargar
                        i.fas.fa-file-download


    .bg4
      h3 Estrategias de negociación con proveedores
    
      .row.justify-content-center.align-items-start.my-5      
        .col-lg-4
            img(src='@/assets/curso/temas/tema2/img6.svg') 
                          
        .col-lg-8
          p Todo proceso de negociación con proveedores debe ser minuciosamente preparado teniendo en cuenta la información recolectada del posible proveedor o proveedores. Esta debe ser corroborada con diferentes fuentes, incluyendo clientes que ya posean. Esto es importante para que los resultados planeados sean los esperados y se pueda avanzar en las diferentes acciones de relacionamiento con el nuevo proveedor.    
          p.mt-2 Para dicho fin se plantean dos estrategias:

    TabsC.color-acento-contenido.mb-5
      .py-3.py-md-4.colorpesta(titulo="Estrategia ‘ganar-ganar’")
        .row
          .col-lg-5.order-2.order-lg-1
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/tema2/img7.svg', alt='').img400.m-auto
          .col-lg-5.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura Estrategia ‘ganar-ganar’
            p Esta estrategia busca que ambas partes obtengan beneficios en el proceso de negociación, pero, tratando que la contraparte gane de la misma manera. De esta forma se genera un ambiente de confianza que permite ceder en aspectos poco relevantes que ayuden a evitar controversia.

            
      .py-3.py-md-4.colorpesta(titulo="Estrategia ‘ganar-perder’")
        .row.justify-content-center          
          .col-lg-5.order-2.order-lg-1
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/tema2/img8.svg', alt='').img400.m-auto
          .col-lg-5.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura Estrategia ‘ganar-perder’
            p Solo se busca el máximo beneficio a costa del oponente; en esta estrategia prima el interés particular de una de las partes y no interesan las relaciones a futuro.  Por ello las negociaciones suelen ser tensas y desgastantes, convirtiéndose en una estrategia situacional, en donde, se suelen dar desacuerdos o acuerdos no orgánicos  que generan controversias comerciales, que pueden dirimirse en cortes por aspectos legales en los compromisos contractuales, lo cual se considera una desventaja de la misma.
    

    h3 Seguimiento de proveedores y pedidos

    .bg3.mb-5
      .row.mt-4                 
          .col-9
            p.mt-3 En toda gestión de proveedores, como actividad responsable está la verificación y seguimiento que se debe hacer a los mismos de manera constante, con el fin de cotejar el cumplimiento de requisitos previamente acordados.
            p.mt-3 Los principales beneficios del seguimiento de los pedidos son:

            ul.lista-ul
              li 
                i.fas.fa-angle-right.yelllow
                | Asegurar que estén alineados a los requerimientos.
              
              li 
                i.fas.fa-angle-right.yelllow
                | Mantener una base de datos de proveedores constantemente evaluada de manera objetiva.
              li 
                i.fas.fa-angle-right.yelllow
                |  Realizar constante retroalimentación para generar oportunidades de mejora que nutran la relación, cliente- proveedor.
              li 
                i.fas.fa-angle-right.yelllow
                |  Gestionar la eficiencia y eficacia del proveedor.

          .col-lg-3
            figure
              img(src='@/assets/curso/temas/tema2/img9.png' width='400px' height='213px' )


    h3 Ciclo de gestión de pedidos

    p.mb-5 En el seguimiento de proveedores, además de evaluarlos de acuerdo a indicadores de gestión de sus servicios, se debe realizar seguimiento a los pedidos realizados. Para esto, es vital conocer cuál es el ciclo de la gestión de los pedidos.

    .row.mt-4
          figure
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
            figcaption   VIDEO

    .row.justify-content-around.align-items-centerrd.my-5
          .col-10
            .tarjeta.bg8.mt-2
              .row.justify-content-around.align-items-center
                .col-lg-1
                  img(src="@/assets/curso/temas/tema2/img10.svg" )
                .col-10
                  .row.justify-content-between.align-items-center
                    .col.p-4
                      h3.mb-1.text-left.text-white Ciclo de gestión de pedidos
                      p.text-small.text-white Si desea profundizar más en el tema Gestión de pedidos, descargue el siguiente documento.
                    .col-sm-auto
                      a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/Anexo 3 - Gestion de pedidos.pdf')" target="_blank")
                        span Descargar
                        i.fas.fa-file-download

    h3 Gestión automatizada de pedidos GAP

    .row.mt-4.mb-5               
        .col-lg-7
          .bloque-texto-b.color-cajon.p-3
            .bloque-texto-b__texto
              p Con el intercambio comercial y el avance tecnológico en las organizaciones, cada día se hacen grandes esfuerzos para optimizar los procesos y transformarlos de manera eficiente, con el fin de requieran menos intervención de personas, menos reprocesos, menos errores, más agilidad y más economía entre las partes.  De ahí se genera un nuevo concepto ‘gestión automatizada de pedidos’, GAP, que consiste en la automatización de los procesos de entrega, despacho, descuento de inventario, facturación, seguimiento y demás aspectos conectados al intercambio comercial con cualquier tipo de cliente. 
          .col-lg-12
            p.mt-3.edittexttm  Uno de los beneficios de los sistemas GAP, es la inmediatez de la información y la precisión de ésta, permitiendo en tiempo real conocer la capacidad que se tiene para cumplir con un requerimiento de un cliente o realizar sus proyecciones. También se eliminan aspectos indeseables en la gestión comercial con los proveedores, como son el <em>lead time gap</em> (tiempos de entrega por fuera de términos pactados) y los cuellos de botella en producción (retrasos por falta de materias primas o capacidad instalada en el proceso productivo).
                   
        
        .col-lg-5
          figure
            img(src='@/assets/curso/temas/tema2/img11.png' )

    h3 Indicadores de evaluación de proveedores

    p Los indicadores de calidad son herramientas estadísticas basadas en información objetiva que se utilizan como criterio de juzgamiento y evaluación del desempeño de una organización en cualquier aspecto, en este caso en evaluación de proveedores.
    p.mb-5 Por la naturaleza de los indicadores que se utilizan en logística y gestión de inventarios, estos son llamados, <em>KPI</em>  que significa, <em>Key Performance Indicator</em>, es decir, Indicador Clave de Desempeño. Estos son los indicadores o valores cuantitativos que se pueden medir, comparar y monitorear, con el fin de exponer el desempeño de los procesos y trabajar en las estrategias de un negocio.

    .bg--img_03
      .row.justify-content-center.mb-4
        .col-lg-4
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/temas/tema2/img12.png", alt="alt").img400.m-auto
        .col-lg-8
          AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta color-primario")
            .row(titulo="Indicadores de cumplimiento")
              .col-12
                p.mb-0 Este indicador identifica la efectividad de los proveedores y qué podría afectar el nivel de recepción oportuna de mercancías que estén destinadas a su proceso productivo para su comercialización.
            .row(titulo="Indicadores de evaluación")
              .col-12
                p.mb-0 Miden aspectos puntuales en la relación con los proveedores, como lo son cumplimiento de plazos, errores en la gestión como proveedor, logística inversa (cantidad de devoluciones gestionadas por los mismos por motivos de errores en las entregas).
            .row(titulo="Indicadores de eficiencia")
              .col-12
                p.mb-0 Estos indicadores miden el porcentaje de éxito de los proveedores, es decir, compras y entregas generadas sin retraso de manera exitosa, al igual que entregas perfectamente realizadas en el menor tiempo posible.
            .row(titulo="Indicadores de eficacia")
              .col-12
                p.mb-0 Este indicador mide principalmente el cumplimiento de los compromisos pactados con los proveedores sin esperar eficiencia o valores agregados.



    h3 Mejores prácticas con proveedores

    .row.justify-content-center.align-items-start.mt-5.tarjeta--azul    
      .col-lg-9
        p.mt-5 Para la gestión de proveedores, se recomiendan prácticas sanas y constructivas para una relación longeva y que permita la evolución de ambas empresas, al igual que la materialización de relaciones comerciales mutuamente beneficiosas.

      .col-lg-9.mt-4
        .tarjeta.tarjeta--blue.p-4
          PasosB.color-secundario
            .row(titulo="")
              .col-md-2
                figure
                  img(src='@/assets/curso/temas/tema2/img13.svg' width='136px' height='136px', alt='Texto que describa la imagen')    
              .col-md-10
                h3 Condiciones contractuales claras
                p.mt-4 Cuando existe claridad entre lo que se busca y lo que los proveedores están dispuestos a ofrecer, se debe dejar claro, condiciones, cantidades, tiempos de entrega, garantías, descuentos, promociones, entre otros aspectos importantes. Estos elementos no se deben dejar en términos medios, ya que llevarán al desgaste de la relación comercial, y no permitirán un flujo deseado de abastecimiento de productos o servicios.

            .row(titulo="")
              .col-md-2
                figure
                  img(src='@/assets/curso/temas/tema2/img14.svg' width='134px' height='136px', alt='Texto que describa la imagen')    
              .col-md-10
                h3 Comunicación expedita
                p.mt-4 Otra de las estrategias indispensables para buenas relaciones con los proveedores es la comunicación expedita, esto permite un buen puente de interacción en el cual se pueden expresar inquietudes mutuas de la manera más orgánica posible, lo que permite generar un ambiente de confianza que favorezca el vínculo comercial y la solución de posibles problemas o inconvenientes en la prestación de los servicios o comercialización de productos,  sin necesidad de recurrir a grandes protocolos que puedan generar retrasos en la transacción.

            .row(titulo="")
              .col-md-2
                figure
                  img(src='@/assets/curso/temas/tema2/img15.svg' width='136px' height='120px', alt='Texto que describa la imagen')    
              .col-md-10
                h3 Evaluación constante
                p.mt-4 Otra condición indispensable es la evaluación constante de la capacidad de los proveedores para suministrar productos y servicios, conservando las condiciones contractuales indicadas de manera constante y consistente. También es importante revisar qué tan flexibles pueden ser las evaluaciones de desempeño, mediante el uso de indicadores.


            .row(titulo="")
              .col-md-2
                figure
                  img(src='@/assets/curso/temas/tema2/img16.svg' width='134px' height='114px', alt='Texto que describa la imagen')    
              .col-md-10
                h3 Búsqueda constante de nuevos proveedores
                p.mt-4 Este aspecto es importante, ya que permite tener una perspectiva diferente acerca de lo que se puede ofrecer en todo tipo de aspectos con la apertura de nuevos cupos de proveedores. Nunca es bueno mantener relaciones de proveedores con una sola entidad, por eso es importante clasificarlos y entregar cupos.

            .row(titulo="")
              .col-md-2
                figure
                  img(src='@/assets/curso/temas/tema2/img17.svg' width='131px' height='132px', alt='Texto que describa la imagen')    
              .col-md-10
                h3 Política de pago justo
                p.mt-4 Una de las estrategias para que una organización sea atractiva a diferentes proveedores es una política de pago justo. Esta debe ser acorde al producto y servicio que se venden o prestan, en cuanto a la proporción de los valores pagados. Con ello se obtienen buenas relaciones contractuales.


</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
