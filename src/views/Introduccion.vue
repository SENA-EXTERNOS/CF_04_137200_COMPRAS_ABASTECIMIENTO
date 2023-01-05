<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    
    .row.mt-4                 
      .col-lg-7
        p Apreciado aprendiz, bienvenido a este componente formativo, donde se abordará la relación de las empresas con los proveedores, debido que no existe una organización que tenga la capacidad de auto suplir todas las necesidades que puedan surgir en el desarrollo de sus actividades económicas.
        p La figura de proveedor es la que puede abastecer: materias primas, insumos, máquinas, tecnologías blandas, servicios tangibles y servicios no tangibles, por lo tanto, encontrará los diferente tipos de proveedores que existen, cómo se clasifican y cómo se evalúan para ser seleccionados de acuerdo con la necesidad que surja al interior de la organización, y comprender como se realiza el seguimiento para el cumplimiento de lo acordado desde los aspectos de planificación, organización, dirección y control de los productos suministrados por los proveedores.
        p La importancia que tendrá este componente para la formación del aprendiz, es entregar los pasos para seleccionar proveedores en una empresa y la gestión que se debe hacer al interior de la organización con ellos para cumplir con los requerimientos establecidos.
        p En el siguiente video conocerá, de forma general, la temática que se estudiará a lo largo del componente formativo.



      .col-lg-5
        figure
          img(src='@/assets/curso/temas/Introduccion/img1.png')


      .row.mt-4
          figure
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
            figcaption   VIDEO




    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
