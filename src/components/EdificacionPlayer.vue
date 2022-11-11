<template lang="pug">
    section(id="edificacion-player")
      BackgroundLoader(:source="source" folder="backgrounds")
      .bloque-texto(v-html="texto" :class="clase")
      .show-foto-button(@click.navive="showPhotos=true")
      Transition(name="photo-slide-fade" mode="out-in")
        PhotoPlayer(v-if="showPhotos && frames.length > 0"  :frames="frames" @close-player="showPhotos=false")
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import BackgroundLoader from "@/components/Common/BackgroundLoader.vue";
import MenuPrincipal from "@/components/Menus/MenuPrincipal.vue";
import PhotoPlayer from "@/components/Common/PhotoPlayer.vue";

@Component({
  components: {
    BackgroundLoader,
    MenuPrincipal,
    PhotoPlayer,
  }
})
export default class EdificacionPlayer extends Vue {

  public frame_edificacion = "3_0_edificacion.jpg";

  public backgroundRef = this.frame_edificacion;

  frames: HTMLImageElement[] = [];
  showPhotos = false;
  numFrames = 1;
  subfolderName = "03_edificacion"

  created() {
    this.loadFrames();
  }

  mounted() {
    // console.log("EdificacionPlayer mounted " + this.$store.state.mainState)
    this.showPhotos = false;
  }

  public get source(): string {
    return this.frame_edificacion;
  }

  zeroPad = (num: number, places: number) => String(num).padStart(places, "0");
  loadFrames() {
    for (var i = 0; i < this.numFrames; i++) {
      this.frames[i] = new Image();
      let img_name = this.zeroPad(i + 1, 2) + ".jpg";
      this.frames[i].src = require("../assets/fotos/" + this.subfolderName + "/" + img_name);
    }
  }

  get texto() {
    return `Además de construcción residencial, INGENIERÍA HUMANA  realiza proyectos de rehabilitación y construcción de hoteles, naves industriales o centros comerciales.
      <br/><br/>
      Nuestro equipo de profesionales a pie de obra garantiza el cumplimiento de los estándares de calidad  marcados por INGENIERÍA HUMANA en cada una de las fases de los proyectos y obras.
      <br/><br/>
      INGENIERÍA HUMANA cuenta con un equipo de profesionales que cubre todas las fases del proceso constructivo de una obra, desde el movimiento de tierras y ejecución de estructura, hasta la post venta de un residencial.
      <br/><br/>
      <span class="texto-rojo">[ver fotos]</span>`;
  }

  get clase() {
    return "texto-edificacion";
  }

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#edificacion-player {
  position: relative; width:100%; height:100%;

  .texto-edificacion {
    top: 394px;
    left: 866px;
    width: 310px;
    height: 241px;
    // background-color: rgba(255, 0, 0 ,0.2);
    animation: myAnimation 1s;
    animation-timing-function: ease-out;
  }

  @keyframes myAnimation {
    0%   { opacity: 0; top: 100px; }
    100%   { opacity: 1; top:394px; }
  }

}

.show-foto-button {
    position:absolute; 
    left: 861px;
    top: 636px;
    width: 72px;
    height: 36px;
    // background-color: rgba(255, 0, 0 ,0.2);
    cursor: pointer;
}

</style>
