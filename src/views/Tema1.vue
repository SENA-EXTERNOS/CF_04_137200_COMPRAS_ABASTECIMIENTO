<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Proveedores

    .row.mt-2.justify-content-center.mt-5
      .col-10
        .bloque-texto-g.color-primario.tarjetaimgcar.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img.carimg(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img1.png')})`}"
          )
          .bloque-texto-g__texto3.p-4
            .col-11.col-lg-12
              p Las organizaciones, independientemente de su naturaleza, difícilmente pueden ser autosuficientes en la adquisición de bienes y servicios necesarios para la transformación de sus productos o la prestación de sus servicios. Ante esta situación lo más lógico y práctico, es realizar aquel proceso por medio de terceros, sean otras entidades o personas jurídicas, las cuales estén en capacidad de suplirlas. 
               

      Separador

    #t_1_1
    
    .titulo-segundo.color-acento-contenido.mb-5
      h2 1.1  Tipo de proveedores

      .row.mt-4                 
        .col-8
          p.mt-4.text-left Los proveedores se clasifican, principalmente, teniendo en cuenta sus diferencias entre renglones de la producción, el tamaño de la organización, las necesidades, el tipo de estructura organizacional y la industria. De forma general podemos encontrar dos tipos:

        .col-lg-4.mb-4
          figure
            img(src='@/assets/curso/temas/tema1/img2.svg').dimensionimgtema1

    
    .bg--gradientBlue.p-5
      SlyderB(:datos="datosSlyder")
    .row.justify-content-end.mb-5.me-3


    .row.justify-content-around.align-items-centerrd
          .col-9
            .tarjeta.colorpdf.p-2.mt-2
              .row.justify-content-around.align-items-center
                .col-lg-1
                  img(src="@/assets/curso/temas/tema1/img3.svg" )
                .col-10
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                      h3.mb-1 Descripción de Proveedores externos
                      p.text-small Si desea profundizar sobre cada uno de los tipos de proveedores, descargue el siguiente documento.
                    .col-sm-auto
                      a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/Anexo1Técnicasdemodeladodelascaracterísticasdeingeniería.pdf')" target="_blank")
                        span Descargar
                        i.fas.fa-file-download
      

    Separador  

    #t_1_2

    .titulo-segundo.color-acento-contenido.mb-5        
      h2 1.2 Clasificación de proveedores

    p La identificación de fuentes de suministro y búsqueda de proveedores en el mercado es una acción que se realiza de forma cada vez más globalizada. También es más sencilo encontrar miles de posibles proveedores de cualquier tipo y en cualquier lugar del mundo.   


    ImagenInfografica.color-acento-botones
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/tema1/img4.png', alt='Texto que describa la imagen')   

      .tarjeta.color-yellow.p-3(x="14%" y="53%" numero="1")        
        p Fabricantes o distribuidores.
      .tarjeta.color-yellow.p-3(x="50%" y="54%" numero="2")        
        p Proveedores por zonas geográficas.
      .tarjeta.color-yellow.p-3(x="86%" y="54%" numero="3")
        p Proveedores pequeños o grandes.
      .tarjeta.color-yellow.p-3(x="33%" y="85%" numero="4")      
        p Proveedores que son clientes a la vez.      
      .tarjeta.color-yellow.p-3(x="70%" y="85%" numero="5")      
        p Proveedor único o varios proveedores.

    p.mt-5 Las organizaciones deben contar con métodos para encontrar los proveedores que cumplan a mayor cabalidad las políticas de aprovisionamiento de cada empresa, a continuación se citarán los instrumentos más utilizados en la Industria:
      

    .bg--img_03
      .row.justify-content-center.mb-4
        .col-lg-4
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/temas/tema1/img5.png", alt="alt").img400.m-auto
        .col-lg-8
          AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta color-primario")
            .row(titulo="ISO 9000, (2005) Sistemas de Gestión de la Calidad. Definiciones y fundamentos")
              .col-12
                p.mb-0 Establece un punto de partida para comprender las normas y define los términos fundamentales utilizados en la familia de normas ISO 9000, que se necesitan para evitar malentendidos en su utilización, especificando el vocabulario clave a utilizar dentro del proceso. 

            .row(titulo="ISO 9001(2015). Sistemas de Gestión de la Calidad. Requisitos")
              .col-12
                p.mb-0 Es la norma que establece los criterios que permiten lograr eficazmente los requisitos del cliente y los reglamentarios, para conseguir la satisfacción del cliente. Incluye los principios de motivación y participación activa de la dirección como el ciclo de mejora continua. Es el único estándar que puede certificarse. Esta norma exige la elaboración de la documentación que debe conservar el sistema de gestión de calidad, sus políticas y procedimientos.

            .row(titulo="ISO 9004. Sistemas de Gestión de la Calidad. Directrices para la mejora del desempeño")
              .col-12
                p.mb-0 Sistemas de Gestión de la Calidad. Directrices para la mejora del desempeño: esta norma proporciona ayuda para la gestión del éxito sostenido del sistema de gestión de la calidad para beneficiar a todas las partes interesadas a través de las mejoras y el mantenimiento de la satisfacción del cliente. La Norma ISO 9004 abarca tanto la eficiencia como la eficacia del sistema de gestión de la calidad.  Se puede tomar como una ampliación de la norma anterior y no es certificable.

            .row(titulo="ISO 19011. Directrices para la auditoría ambiental y de la calidad")
              .col-12
                p.mb-0 Proporciona directrices para verificar la capacidad del sistema para conseguir objetivos de la calidad definidos. Esta norma se puede utilizar internamente para auditar a los proveedores de la organización.


      Separador  

    #t_1_3

    .titulo-segundo.color-acento-contenido.mb-5        
      h2 1.3 Verificación de requisitos

    .row.justify-content-center.align-items-start.mt-5      
        .col-lg-2
            img(src='@/assets/curso/temas/tema1/img6.svg')                   
        .col-lg-10
          p.mt-3 Para una correcta gestión de proveedores por parte del departamento de compras, es necesario saber lo que se espera de ellos y hacerles saber cuáles son los estándares de satisfacción que posee la empresa, bajo las políticas de compras y  abastecimiento, con el fin de que éstas sean satisfechas de la manera más completa posible, y exista un entendimiento entre las partes. Por otro lado, es importante crear un sistema de monitoreo que permita clasificar los proveedores por sus características. Esta tipificación se puede lograr a través de auditorías a los procesos que generen un criterio objetivo de calificación y una tabla de calificación subjetiva que permita parametrizar el cumplimiento de los requerimientos acordados.

    Separador

    h4 Criterios de evaluación
    .row.mt-4                 
        .col-7
          p.mt-4.text-left Los criterios de selección son útiles para poder clasificar de manera sistemática y objetiva puntos que son de importancia a evaluar dentro de una relación comercial entre dos partes.
          p.mt-3 Dentro de éstos se pueden relacionar:

          ul.lista-ul--
            li 
              i.fas.fa-angle-right.yelllow
              | Calidad del producto.
            
            li 
              i.fas.fa-angle-right.yelllow
              | Garantía del producto.
            li 
              i.fas.fa-angle-right.yelllow
              | Servicio posventa.
            li 
              i.fas.fa-angle-right.yelllow
              | Cumplimiento en entrega de mercancía.

            li 
              i.fas.fa-angle-right.yelllow
              | Facilidad de pago.

          .titulo-sexto.color-negrotitulotabla
            p  #[b Tabla 1.] 
              | Criterios de evaluación



          .tabla-a 
            table.tabladimension    
              caption Fuente: elaboración propia del experto
              thead
                tr
                  th CRITERIO EMPRESA
                  th ÍNDICE DE CUMPLIMIENTO            
              tbody
                tr
                  td A) Calidad
                  td 25%
                  
                tr
                  td B) Garantía de producto
                  td 15%
                  

                tr
                  td C) Servicio postventa
                  td 20%
                  

                tr
                  td D) Cumplimiento
                  td 25%
                  
                
                tr
                  td E) Facilidad de pago
                  td 15%
                tr
                  td Total
                  td 100%
              
            



        .col-lg-5.mb-4
          figure
            img(src='@/assets/curso/temas/tema1/img7.png')

    p Posterior a la definición de los criterios y a la socialización de los mismos ante los proveedores ya contratados o con convenios de suministros, el paso a seguir, es la aplicación de la evaluación de desempeño de manera sistemática y concertada con cada uno de ellos.

    p Para esto se les recuerdan los criterios a examinar, las fechas a realizar las evaluaciones, las entregas de los resultados, los días en que se harán reuniones para acordar acciones de mejora, si así se amerita; y cronogramas de avances de dichas actividades a mejorar. 

    p Una herramienta usada en este proceso es la ficha de evaluación:

    .titulo-sexto.color-negrotitulotabla
            p  #[b Tabla 2.] 
              | Ficha de evaluación

    .tabla-a
            table 
              caption Fuente: elaboración propia del experto       
              thead
                tr
                  th Proveedor
                  th Fecha evaluación 
                  th A 25%
                  th B 15%
                  th C 20%
                  th D 25%
                  th E 15%
                  th Total 100%

              tbody
                tr
                  td Proveedor A
                  td 
                  td
                  td
                  td
                  td
                  td
                  td
                  
                tr
                  td Proveedor B
                  td 
                  td
                  td
                  td
                  td
                  td
                  td
                  

                tr
                  td Proveedor C
                  td 
                  td
                  td
                  td
                  td
                  td
                  td
                  

                tr
                  td Proveedor D
                  td 
                  td
                  td
                  td
                  td
                  td
                  td

    .row.mt-2.justify-content-center.mt-5
      .col-8
        h5.mt-5 Ejemplo
        p Se presenta una evaluación de desempeño a los proveedores de ferreterías que suministran insumos para una empresa de construcción y los resultados fueron los siguientes:

    
        .titulo-sexto.color-negrotitulotabla
                p  #[b Tabla 3.] 
                  | Desarrollo evaluación

        .tabla-a
          table.tabladimension1
            caption      
            thead
              tr
                th Proveedor
                th Fecha evaluación 
                th A 25%
                th B 15%
                th C 20%
                th D 25%
                th E 15%
                th Total 100%

            tbody
              tr
                td Ferretería A
                td 20 Abril 2022
                td 23
                td 10
                td 20
                td 25
                td 15
                td 93
                
              tr
                td Ferretería B
                td 20 Abril 2022
                td 24
                td 15
                td 20
                td 20
                td 10
                td 89
                

              tr
                td Ferretería C
                td 20 Abril 2022
                td 25
                td 10
                td 20
                td 25
                td 15
                td 95
                

              tr
                td Ferretería D
                td 20 Abril 2022
                td 20
                td 10
                td 20
                td 25
                td 15
                td 90

        p.mt-5 Los resultados de esta evaluación nos revelan que el proveedor que mayor desempeño tuvo fue la ferretería C y la de menos porcentaje de cumplimiento fue la B. El aspecto a mejorar por todos los proveedores es el criterio B (garantías) y el que mayor cumplimiento tiene es el C (servicio posventa). Finalmente, aquel que menos se cumple por parte de todos los proveedores, y del que más acciones de mejora se deben socializar con ellos es el B (garantía del producto).

    separador

    b Métodos de evaluación
    p.mt-2 Existen varios métodos para evaluar proveedores ofrecidos por varios autores, por lo tanto, se traerá a colación los más reconocidos en el mercado:

    
    .row.justify-content-center.mt-3
    .col-lg-12.sm-5
      TabsA.color-primario.mt-4  
        .tarjeta.color-primario.p-4(titulo="Método de puntuación")       
          .row              
            .col-xl-10
              h4 Método de puntuación
              p El más sencillo, se definen criterios de lo que se espera del servicio del proveedor, calificándolos según su nivel de importancia. Entre más alto sea el puntaje, será el proveedor con mayor probabilidad de ser elegido.
        .tarjeta.color-primario.p-4(titulo="Método de Priorización")

          .row            
            .col-xl-10
              h4 Método de Priorización 
              p El más práctico. Se basa en los resultados del trabajo de los proveedores, según los objetivos a cumplir de acuerdo a términos de calidad, precio y servicio.
        .tarjeta.color-primario.p-4(titulo="Método de evaluación de expertos")            
          
          .row            
            .col-xl-10
              h4 Método de evaluación de expertos
              p El más conocido y antiguo.  Llamado también método Delphin, en el que se evalúa a través de un cuestionario donde se presentan para resolver problemas que se ven reflejado en los clientes, o en lo que se espera mejorar para lograr un objetivo. 

          
        .tarjeta.color-primario.p-4(titulo="Método de análisis de la jerarquía")            
          .row
            
            .col-xl-10
              h4 Método de análisis de la jerarquía
              p Se basa en criterios de precio, calidad y servicio, y que se espera de cada uno a un nivel más detallado, para comparar los proveedores y seleccionar el que obtenga la calificación más alta.


    Separador  

    #t_1_4

    .titulo-segundo.color-acento-contenido.mb-5        
      h2 1.4 Verificación de requisitos


    .row.justify-content-center.align-items-start.mt-5      
        .col-lg-2
            img(src='@/assets/curso/temas/tema1/img8.png')                   
        .col-lg-10
          p.mt-3 El informe de selección de proveedores es un documento que permite conocer bajo qué criterios se evaluaron y se clasificaron los proveedores que previamente se preseleccionaron, y que fueron sometidos a una evaluación objetiva, permitiendo saber cuáles son las características de cada uno de ellos y realizar acuerdos comerciales como: contratos de suministros o contratos de prestación de servicios, teniendo en cuenta los mejores puntajes en cada aspecto.
          p.mt-2 Una vez realizado el ejercicio y al haber obtenido los resultados, estos deben ser entregados a las áreas interesadas en la evaluación,  y, a la gerencia, para posteriormente ser almacenados como documentación para el área de inventarios y de calidad en las organizaciones.





      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    datosSlyder: [
      {
        texto:
          'Los proveedores se clasifican, principalmente, teniendo en cuenta sus diferencias entre renglones de la producción, el tamaño de la organización, las necesidades, el tipo de estructura organizacional y la industria. De forma general podemos encontrar dos tipos:',
        imagen: require('@/assets/template/img-placeholder.svg'),

        titulo:
          'Never, never assume that what you have achieved is good enough',
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo:
          'Never, never assume that what you have achieved is good enough',
        texto:
          'Your rapidograph pens are dried up, the x-acto blades in your bag are rusty, and your mind is dull. Stop clicking your mouse, get messy, go back to the basics and make something original.',
        imagen: require('@/assets/template/img-placeholder.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
    ],
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
