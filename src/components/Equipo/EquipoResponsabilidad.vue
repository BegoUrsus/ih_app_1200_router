<template lang="pug">
    section(id="equipo-responsabilidad")
      BackgroundLoader(:source="frame_responsabilidad" folder="backgrounds")
      Transition(name="equipo-slide-fade" mode="out-in" appear)
        .bloque-texto(key="texto-responsabilidad" v-html="texto" class="texto-responsabilidad")
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import BackgroundLoader from "@/components/Common/BackgroundLoader.vue";

@Component({
  components: {
    BackgroundLoader,
  }
})
export default class EquipoResponsabilidad extends Vue {

  public frame_responsabilidad = "1_2_3_equipo_gest_resp.jpg";
  public texto =
    `Antes del inicio de cada obra, se elabora el PLAN DE GESTIÓN MEDIOAMBIENTAL, adaptado a las características del Proyecto y ubicación de la zona de obras.
    <br/><br/>
    El PLAN DE GESTIÓN MEDIAMBIENTAL, supone un plus de respeto al cuidado del medioambiente en la ejecución de obras, que desde INGENIERÍA HUMANA consideramos debe introducirse como algo habitual en toda obra. De esta forma, en nuestros proyectos y obras se toman las siguientes medidas:
    <br/><br/>
    - Planificación Logística de accesos a las obras, minimizando afecciones al entorno.<br/>
    - Gestión de Residuos. Son transportados a las zonas de vertido o tratamiento que corresponden a cada tipo de residuo. construcción y/o mantenimiento de jardines.<br/>
    - Delimitación de zonas de acopio en obra.<br/>
    - Ubicación  de zonas controladas de limpieza de camiones hormigonera.<br/>
    - Instalación de zonas de limpieza de ruedas de camiones en fase de movimiento de tierras.<br/>
    - Estudio de viabilidad de trasplantes de especies vegetales en caso de ser afectadas por la zona de obras.`;
}

</script>

<style scoped lang="scss">
@import "@/assets/scss/global.scss";

#equipo-responsabilidad {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  .texto-responsabilidad {
    top: 165px;
    left: 633px;
    width: 344px;
    height: 420px;
  }
  
  /* equipo slide transition */
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
}
</style>
