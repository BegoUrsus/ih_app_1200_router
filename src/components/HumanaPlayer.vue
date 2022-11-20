<template lang="pug">
    section(id="humana-player")
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
export default class HumanaPlayer extends Vue {

  public frame_humana = "5_0_humana.svg";

  public backgroundRef = this.frame_humana;

  frames: HTMLImageElement[] = [];
  showPhotos = false;
  numFrames = 11;
  subfolderName = "05_humana"

  created() {
    this.loadFrames();
  }

  mounted() {
    // console.log("humanaPlayer mounted " + this.$store.state.mainState)
    this.showPhotos = false;
  }

  public get source(): string {
    return this.frame_humana;
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
    return `INGENIERÍA HUMANA aporta su granito de arena para conseguir un DESARROLLO SOSTENIBLE también en el mundo empresarial. Para ello además de su sería filosofía de empresa y la profesionalidad de sus técnicos, dedica un porcentaje de sus beneficios a la colaboración con instituciones que necesiten servicios de ingeniería para el desarrollo de proyectos que mejoren la vida de los más necesitados y que no dispongan de medios para llevarlos a cabo.
      <br/><br/>
      <span class="texto-rojo">PROYECTOS HUMANA:</span>
      <br/>
      Actualmente INGENIERÍA HUMANA colabora con la FUNDACION GIL GAYARRE en la supervisión de proyectos y Dirección de sus obras.
      <br/><br/>
      - Ejecución de separador de grasas.
      <br/>
      - Pavimentación de aceras.
      <br/>
      - Reparación de canalizaciones.
      <br/>
      - Impermeabilización de cubiertas y terrazas.
      <br/>
      - Conducción de aguas fecales.
      <br/>
      - Depuradora Granja San José.
      <br/><br/>
      <span class="texto-rojo">[ver fotos]</span>`;
  }

  get clase() {
    return "texto-humana";
  }

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#humana-player {
  position: relative; width:100%; height:100%;

  .texto-humana {
    top: 60px;
    left: 400px;
    width: 434px;
    height: 321px;
    // background-color: rgba(255, 0, 0 ,0.2);
    animation: myAnimation .5s;
    animation-timing-function: ease-out;
  }

  @keyframes myAnimation {
    0%   { opacity: 0; left: 730px; }
    100%   { opacity: 1; left:400px; }
  }

}

.show-foto-button {
    position:absolute; 
    left: 394px;
    top: 348px;
    width: 72px;
    height: 36px;
    // background-color: rgba(255, 0, 0 ,0.2);
    cursor: pointer;
}

</style>
