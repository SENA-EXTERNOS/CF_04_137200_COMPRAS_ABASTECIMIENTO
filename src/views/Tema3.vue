<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Informe

    .row.mt-4                 
        .col-lg-7
          .bloque-texto-b.color-cajon.p-3
            .bloque-texto-b__texto
              p Los informes de proveedores proporcionan datos que pueden ser llevados a un sistema de alertas, ya sea manual o sistematizado, para llevar la trazabilidad y el control de cada etapa en la gestión con proveedores.
          .col-lg-12
            p.mt-3.edittexttm El documento se compone de las actividades de coordinación. Incluye las actividades de acoplamiento, y el día a día con respecto al seguimiento de entrega del producto. Se realiza con una periodicidad establecida en el año.         
        .col-lg-5
          figure
            img(src='@/assets/curso/temas/tema2/img18.png' )

        separador
  
    #t_3_1

      .titulo-segundo.color-acento-contenido.mt-2
        h2 3.1  Tipos
    
      p.mt-5 Los tipos de informes de la gestión de los proveedores dependen casi siempre del sector de la industria donde esté ubicada la empresa, pero, todos presentan unos parámetros muy similares que evalúan, como son:

      .col-lg-12.mt-5
        figure
          img(src='@/assets/curso/temas/tema2/img19.png' )
          figcaption Fuente: elaboración del experto
           

      separador
  
    #t_3_2

      .titulo-segundo.color-acento-contenido.mt-2
        h2 3.2  Características

      .row.mt-2.justify-content-center.mt-5
      .col-12
        .bloque-texto-g.color-primario.coloryellow.tarjetaimgcar.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img.carimg2(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img20.svg')})`}"
          )
          .bloque-texto-g__texto3.p-4
            .col-11.col-lg-12
              p Los informes de proveedores proporcionan visibilidad de alertas, tendencias de uso en el área de almacenamiento, el inventario que se tiene para cada tipo de cliente que se atiende, además de contar con datos estadísticos de los resultados de las evaluaciones que se han realizado de manera periódica de los clientes, con hallazgos que generan información que ayuda a detectar requerimientos que se deben atender para evitar incidentes, e, incluso, el realizar un cambio de proveedor de manera oportuna.
              p.mt-3 Este documento formal también puede ser utilizado en la comunicación interna, como insumo para el informe de gestión de las empresas o como parte de la documentación para auditorías de control interno y externos para temas de certificaciones de normas, ya sean de calidad, exportación, entre otros

        





</template>

<script>
export default {
  name: 'Tema3',
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
