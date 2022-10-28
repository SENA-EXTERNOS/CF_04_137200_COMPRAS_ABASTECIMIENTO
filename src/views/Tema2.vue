<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Titulo de primer nivel

    .row.justify-content-center.align-items-start.mt-5      
      .col-lg-2
          img(src='@/assets/curso/temas/tema2/img1.png')                   
      .col-lg-10
        p.mt-3 La gestión de proveedores consiste en realizar acciones que propenden por emprender relaciones comerciales convenientes y estratégicas a los intereses de las organizaciones, con el fin de proveer o abastecer materias primas, insumos o servicios necesarios en sus procesos, ya sean productivos o de prestación de servicios. Las organizaciones deben generar acciones que van desde la búsqueda, la clasificación, generación de comercio, evaluación de resultados y mejoramiento sobre aspectos relevantes de la misma.

    separador





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
