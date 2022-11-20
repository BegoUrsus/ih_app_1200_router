<template lang="pug">
    section(id="equipo-prevencion")
      BackgroundLoader(:source="frame_prevencion" folder="backgrounds")
      Transition(name="equipo-slide-fade" mode="out-in" appear)
        .bloque-texto(key="texto-prevencion" v-html="texto" class="texto-prevencion")
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import BackgroundLoader from "@/components/Common/BackgroundLoader.vue";

@Component({
  components: {
    BackgroundLoader,
  }
})
export default class EquipoPrevencion extends Vue {

  public frame_prevencion = "1_2_2_equipo_gest_prev.svg";
  public texto =
    `Nuestros profesionales reciben de manera continua formación en materia de Prevención de Riesgos Laborales, actualizada a los nuevos procedimientos de ejecución y aprovechando los avances en cuanto a medidas de protección colectivas e individuales que nos ofrece el mercado.
            <br/><br/>
            Esta formación es impartida por nuestro servicio de Prevención constituido por técnicos especializados que, desde la fase de estudio, se integran en el equipo de Gestión de Obra, elaborando los correspondientes Planes de Seguridad y Salud, comprobando que planificación de obra y presupuesto de seguridad y salud son los idóneos para garantizar una ejecución de obra segura.`;
}

</script>

<style scoped lang="scss">
@import "@/assets/scss/global.scss";

#equipo-prevencion {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  .texto-prevencion {
    top: 208px;
    left: 633px;
    width: 340px;
    height: 230px;
    // color: $text-color-grey;
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
