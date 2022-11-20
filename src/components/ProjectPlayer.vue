<template lang="pug">
    section(id="project-player")
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
export default class ProjectPlayer extends Vue {

  public frame_project = "4_0_project.svg";

  public backgroundRef = this.frame_project;

  frames: HTMLImageElement[] = [];
  showPhotos = false;
  numFrames = 1;
  subfolderName = "04_management"

  created() {
    this.loadFrames();
  }

  mounted() {
    // console.log("projectPlayer mounted " + this.$store.state.mainState)
    this.showPhotos = false;
  }

  public get source(): string {
    return this.frame_project;
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
    return `El objetivo de INGENIERÍA HUMANA como PROJECT MANAGER es aplicar los conocimientos de nuestros técnicos, habilidades, herramientas y técnicas a las actividades que conforman un proyecto para satisfacer las necesidades y expectativas del cliente.
      <br/><br/>
      El DIRECTOR DE PROYECTO elabora una óptima planificación, se encarga del desarrollo, supervisión y consigue la finalización del proyecto con importantes beneficios económicos, humanos y de imagen para las empresas.
      <br/><br/>
      <span class="texto-rojo">[ver fotos]</span>`;
  }

  get clase() {
    return "texto-project";
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#project-player {
  position: relative; width:100%; height:100%;

  .texto-project {
    top: 322px;
    left: 374px;
    width: 587px;
    height: 111px;
    // background-color: rgba(255, 0, 0 ,0.2);
    animation: myAnimation 1s;
    animation-timing-function: ease-out;
  }

  @keyframes myAnimation {
    0%   { opacity: 0; top: 100px; }
    100%   { opacity: 1; top:322px; }
  }
}

.show-foto-button {
    position:absolute; 
    left: 367px;
    top: 438px;
    width: 72px;
    height: 36px;
    // background-color: rgba(255, 0, 0 ,0.2);
    cursor: pointer;
}

</style>
