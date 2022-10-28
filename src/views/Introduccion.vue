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
        p.mt-2 Estimado aprendiz, reciba un cordial saludo y sea bienvenido a este componente. Los temas a abordar giran entorno a la relación de las empresas con los proveedores, ya que no existe una organización que tenga la capacidad de auto suplir todas las necesidades que puedan surgir para el desarrollo de sus actividades económicas.          
        p.mt-2 La figura de proveedor es el que puede abastecer: materias primas, insumos, maquinas, tecnologías blandas, servicios tangibles y servicios no tangibles, por lo tanto, en este módulo encontrarás, los diferente tipos de proveedores que existen, como se clasifican y como se evalúan para ser seleccionados de acuerdo a la necesidad que surja al interior de la organización, y comprender como se realiza el seguimiento para el cumplimiento de lo acordado desde los aspectos de planificación, organización, dirección y control de los productos suministrados por los proveedores.
        p.mt-2 La importancia que tendrá este componente para la formación del aprendiz, son los pasos para seleccionar proveedores en una empresa y la gestión que se debe hacer al interior de la organización con ellos para cumplir con los requerimientos establecidos.
        b.mt-2 Lo invitamos a ver el vídeo de introducción que se presenta a continuación. Allí podrá conocer información acerca de lo que se trabajará durante esta etapa formativa. ¡Muchos éxitos!


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
