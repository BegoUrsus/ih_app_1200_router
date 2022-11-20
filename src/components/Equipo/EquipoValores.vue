<template lang="pug">
    section(id="equipo-valores")
      BackgroundLoader(:source="frame_valores" folder="backgrounds")
      Transition(name="equipo-slide-fade" mode="out-in" appear)
        .bloque-texto(key="texto-valores" v-html="texto" class="texto-valores")
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import BackgroundLoader from "@/components/Common/BackgroundLoader.vue";

@Component({
  components: {
    BackgroundLoader,
  },
})
export default class EquipoValores extends Vue {

  public frame_valores = "1_1_equipo_valores.svg";
  public texto =
    `INGENIERÍA HUMANA nace de la colaboración entre Ingenieros de Caminos, Ingenieros de Obras Públicas, Arquitectos, Arquitectos Técnicos, Ingenieros Industriales e Ingenieros Técnicos Agrícolas que acumulan años de experiencia en las distintas tipologías de Obras Civiles, Edificación e Instalaciones Industriales.
    <br/><br/>
    <span class="texto-rojo">VALORES</span>
    <br/><br/>
    Para INGENIERÍA HUMANA la mejora en cuanto a la CALIDAD en el desarrollo de cada encargo, <span class="texto-bold">superando las expectativas del proyecto</span> es nuestro principal valor, proporcionando al cliente una asistencia técnica para optimizar los procedimientos de ejecución, con objeto de conseguir la mayor calidad con <span class="texto-bold">soluciones técnicas brillantes</span> y que además supongan respecto al presupuesto de proyecto una mejora para el cliente.
    <br/><br/>
    Todos los profesionales de INGENIERÍA HUMANA, trabajan siguiendo un Plan de Aseguramiento de la Calidad, que permite garantizar nuestros estrictos estándares de calidad, siguiendo un PLAN DE GESTIÓN DE LA DOCUMENTACIÓN.
    <br/><br/>
    Esta importante esfuerzo continuo en la mejora y ASEGURAMIENTO DE LA CALIDAD de ejecución, nos convierte en un referente en el campo de ingeniería a nivel nacional.`;

  // beforeDestroy() {
  //   console.log("BEFORE DESTROY EquipoValores");
  //   console.log("store.to: " + this.$store.state.toRoute + " store.from: " + this.$store.state.fromRoute);
  // }


}

</script>

<style scoped lang="scss">
@import "@/assets/scss/global.scss";

#equipo-player {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  .texto-valores {
    top: 48px;
    // left: 562px;
    // width: 410px;
    // height: 418px;
    left: 573px;
    width: 393px;
    height: 395px;
  }

  /* fade transition */
  .fade-enter-active {
    transition: opacity 5s ease;
  }
  .fade-leave-active {
    transition: opacity .25s ease;
  }
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }

  /* slide transition */
  .equipo-slide-fade-enter-active {
    transition: all .5s ease-in;
  }
  .equipo-slide-fade-leave-active {
    transition: all .25s ease-out;
  }
  .equipo-slide-fade-enter, 
  .equipo-slide-fade-leave-to {
    transform: translateX(150px);
    opacity: 0;
  }

  // /* slide transition */
  .slide-fade-menu-enter-active {
    transition: all .5s ease;
  }
  .slide-fade-menu-leave-active {
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    transition-delay: .1s;
  }
  .slide-fade-menu-enter, 
  .slide-fade-menu-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */ {
    transform: translateY(150px);
    opacity: 0;
  }

}
</style>
