<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .row.justify-content-center
      .col-lg-8.sm-8
        .titulo-sexto.color-acento-botones
           b Compras y Abastecimiento
           p Síntesis: Selección de proveedores

      .col-lg-2
        figure
          img(src="@/assets/curso/temas/g4.svg" width='80,61' height='80,7')
    .row.justify-content-center
      .col-lg-10
        p.mt-5 A continuación, podrá observar una síntesis de todos los temas vistos en este componente.
    
    
    .row.justify-content-center
      .col-lg-10.mb-5.mt-5
        figure
          img(src="@/assets/curso/temas/sintesis.png", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
