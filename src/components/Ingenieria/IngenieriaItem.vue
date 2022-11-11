<template lang="pug">
  .ingenieria-item
    Transition(name="bg-fade" mode="out-in" appear)
      BackgroundLoader(:key="clase[index]" :source="source" :folder="folder")
    Transition(name="ingenieria-slide-fade" mode="out-in" appear)
      .bloque-texto(:key="clase[index]" v-html="texto" :class="clase[index]")
    .show-foto-button(v-if="posButtonY[index]" :style="{top:`${posButtonY[index]}px`}" @click.navive="showPhotos=true")
    Transition(name="photo-slide-fade" mode="out-in")
      PhotoPlayer(v-if="showPhotos && frames.length > 0"  :frames="frames" @close-player="showPhotos=false")


</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import BackgroundLoader from "@/components/Common/BackgroundLoader.vue";
import PhotoPlayer from "@/components/Common/PhotoPlayer.vue";

@Component({
  components: {
    BackgroundLoader,
    PhotoPlayer,
  }
})
export default class IngenieriaItem extends Vue {

  @Prop() source!: string|null;
  @Prop() folder!: string|null;
  @Prop() texto!: string|null;
  @Prop({ default: 0 }) index!: number;

  frames: HTMLImageElement[] = [];
  showPhotos = false;

  created() {
    this.loadFrames();
  }
  mounted() {
    // console.log("IngenieriaItem mounted")
    // console.log("key: ", this.$vnode?.data?.key as string)
    this.showPhotos = false;
  }

  get bgKey() {
    return "bg"+this.index;
  }

  zeroPad = (num: number, places: number) => String(num).padStart(places, "0");
  loadFrames() {
    for (var i = 0; i < this.numFrames[this.index]; i++) {
      this.frames[i] = new Image();
      let img_name = this.zeroPad(i + 1, 2) + ".jpg";
      this.frames[i].src = require("@/assets/fotos/" + this.subfolderName[this.index] + "/" + img_name);
    }
  }

  clase = ['texto-lineales', 'texto-urba', 'texto-hidra', 'texto-indus', 'texto-depor', 'texto-estru', 'texto-geo', 'texto-parques'];

  posButtonY = ['542', '466', '585', '585', null, '662', null, '684'];
  
  numFrames = [4, 59, 4, 2, 0, 2, 0, 3];

  subfolderName = [
      "02_01_ingenieria_lineales",
      "02_02_ingenieria_urbanizacion",
      "02_03_ingenieria_hidraulicas",
      "02_04_ingenieria_industriales",
      "",
      "02_06_ingenieria_estructuras",
      "",
      "02_08_ingeninieria_parques",
  ];

}

</script>

<style scoped lang="scss">
.ingenieria-item {
  position: absolute; width:100%; height:100%;
  top: 0; left: 0;

  .texto-lineales {
    top: 444px;
    left: 774px;
    width: 382px;
    height: 129px;
  }

  .texto-urba {
    top: 479px;
    left: 774px;
    width: 382px;
    height: 20px;
  }

  .texto-hidra {
    top: 504px;
    left: 774px;
    width: 382px;
    height: 129px;
  }

  .texto-indus {
    top: 535px;
    left: 774px;
    width: 382px;
    height: 83px  
  }

  .texto-depor {
    top: 576px;
    left: 774px;
    width: 382px;
    height: 20px;
  }

  .texto-estru {
    top: 564px;
    left: 774px;
    width: 382px;
    height: 129px;
  }

  .texto-geo {
    top: 612px;
    left: 774px;
    width: 382px;
    height: 100px;
  }

  .texto-parques {
    top: 618px;
    left: 774px;
    width: 382px;
    height: 105px;
  }

  .photo {
    position: absolute;
    width: 303px;
    height:356px;
    min-width: 303px;
    max-width: 303px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .show-foto-button {
      position:absolute; 
      left: 762px; 
      top:530px;
      width: 88px;
      height: 46px;
      // background-color: rgba(255, 0, 0 ,0.2);
      cursor: pointer;
  }

}

/* slide transition */

.bg-fade-enter-active {
  transition: all .5s ease;
  transition-delay: .5s;
}
.bg-fade-leave-active {
  transition: all .25s ease;
}
.bg-fade-enter, 
.bg-fade-leave-to
{
  opacity: 0;
}

.ingenieria-slide-fade-enter-active {
  transition: all .5s ease;
}
.ingenieria-slide-fade-leave-active {
  transition: all 5s ease;
}
.ingenieria-slide-fade-enter, 
.ingenieria-slide-fade-leave-to
{
  transform: translateX(250px);
  opacity: 0;
}


</style>

