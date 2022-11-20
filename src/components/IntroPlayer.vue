<template lang="pug">
  section(id="intro-player" @click="onRomboClicked")
    SequencePlayer(id="first-seq" v-if="firstSeq" @finished="onFirstSeqFinished" :frames="framesIn" :default="defaultIn" :slow="true")
    IntroButton(v-if="buttonEnabled" @rombo-clicked="onRomboClicked")
    SequencePlayer(id="second-seq" v-if="secondSeq" @finished="onSecondSeqFinished" :frames="framesOut" :default="defaultOut" :whiteBg="true")

      
</template>

<script lang="ts">
import router from "@/router";
import { Component, Vue } from "vue-property-decorator";
import IntroButton from "@/components/Common/IntroButton.vue";
import SequencePlayer from "@/components/Common/SequencePlayer.vue"
import BackgroundLoader from "@/components/Common/BackgroundLoader.vue";


// export const zeroPad = (num: number, places: number) => String(num).padStart(places, "0");
// export const fps15 = 1000/15; // 66
// export const fps24 = 1000/24; // 42
// export const fps25 = 1000/25; // 40
// export const fps30 = 1000/30; // 33
// export const fps60 = 1000/60; // 16


@Component({
  components: {
    IntroButton,
    BackgroundLoader,
    SequencePlayer,
  },
})
export default class IntroPlayer extends Vue {
  firstSeq = false;
  secondSeq = false;
  public buttonEnabled = false;

  get framesIn(): HTMLImageElement[] {
    return this.$store.state.imageFrames.get('img_0_intro_in');
  }
  get framesOut(): HTMLImageElement[] {
    return this.$store.state.imageFrames.get('img_0_intro_out');
  }

  get defaultIn(): HTMLImageElement {
    const img = new Image();
    img.src = require("@/assets/backgrounds/0_intro.svg");
    return img;
  }

  get defaultOut(): HTMLImageElement {
    const img = new Image();
    img.src = require("@/assets/sequences/0_intro/out/ih0125.svg");
    return img;
  }

  created() {
    // console.log("IntroPlayer created");
    this.firstSeq = false;
    this.buttonEnabled = false;
    this.secondSeq = false;
  }
  mounted() {
    // console.log("IntroPlayer mounted");
    this.buttonEnabled = false;
    this.secondSeq = false;
    this.firstSeq = true;
  }

  beforeDestroy() {
    // console.log("IntroPlayer beforeDestroy");
    this.firstSeq = false;
  }

  onFirstSeqFinished() {
    this.buttonEnabled = true;
  }

  onRomboClicked() {
    this.secondSeq = true;
    this.buttonEnabled = false;
  }

  onSecondSeqFinished() {
    router.push('/main/equipo/valores');
  }


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

#intro-player,
#first-seq,
#second-seq,
.full {
  position: absolute; width:100%; height:100%; top:0; left:0;
}

button {
   position:absolute; bottom: 10px; right: 10px;
}

</style>
