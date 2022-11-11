<template lang="pug">
    section(id="equipo-calidad")
      BackgroundLoader(:source="frame_calidad" folder="backgrounds")
      Transition(name="equipo-slide-fade" mode="out-in" appear)
        .bloque-texto(key="texto-calidad" v-html="texto" class="texto-calidad")
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import BackgroundLoader from "@/components/Common/BackgroundLoader.vue";

@Component({
  components: {
    BackgroundLoader,
  }
})
export default class EquipoCalidad extends Vue {

  public frame_calidad = "1_2_1_equipo_gest_calidad.jpg";
  public texto =
    `INGENIERÍA HUMANA certificada la calidad de sus trabajos mediante la aplicación de un Plan de Calidad para cada una de las fases de la obra:
    <br/><br/>
    <span class="texto-rojo">- PLAN DE GESTIÓN DE LA DOCUMENTACIÓN. </span>
    <br/>
    Desde el encargo a INGENIERÍA HUMANA de la ejecución de una obra, toda la documentación generada se archiva siguiendo el Plan de Calidad específico de cada obra. Este sistema permite tener acceso rápido a cualquier documento generado.
    <br/><br/>
    <span class="texto-rojo">- PLAN DE ASEGURAMIENTO DE LA CALIDAD. </span>
    <br/>
    Todas las unidades de obra bajo la supervisión de nuestros DIRECTORES DE OBRA, se ejecutan siguiendo los procedimientos establecidos en el PROGRAMA DE PUNTOS DE INSPECCIÓN, de esta forma se garantiza que la ejecución de los diferentes tajos sigue las normas en cuanto a calidad exigidas por INGENIERÍA HUMANA. El Programa de Puntos de inspección queda certificado mediante la firma de los responsables (Encargados, Jefes de Obra, Jefes de Producción, Topógrafos, Personal de Laboratorio), que se ha hecho la comprobación de la correcta ejecución, geometría o resultados de ensayos de laboratorio necesarios.
    <br/><br/>
    <span class="texto-rojo">- PLAN DE CALIDAD DE LOS MATERIALES.</span>
    <br/>
    La calidad de los materiales queda certificada mediante la elaboración de ESPECIFICACIONES TÉCNICAS, que incluyen los certificados de calidad de los fabricantes, las características geométricas y las características mecánicas que han de cumplir. Una vez aprobadas dichas Especificaciones por la Dirección de Obra, se presentan muestras para su aprobación.
    <br/><br/>
    El correcto funcionamiento del PLAN DE CALIDAD es auditado un mínimo de dos veces por año.`;
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

  .texto-calidad {
    top: 103px;
    left: 633px;
    width: 353px;
    height: 605px;
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
