<template lang="pug">
    .outer
      Transition(name="fade")
        img.inner(:key="getFrame" ref="photo" :src="getSource" v-show="show")
      .button-cerrar(@click="onClose")
        .texto-cerrar cerrar
      .texto-progress(v-if="showProgress") {{ progressText}}
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  components: {
  }
})
export default class PhotoPlayer extends Vue {
  @Prop() frames: HTMLImageElement[] | undefined;
  
  show = false;
  public frameIdx = 0;
  public timer: number | undefined;

  public totFrames = 0;
  public interval = 4000;

  mounted() {
    // console.log("PhotoPlayer mounted" + this.$store.state.mainState + " " + this.$store.state.ingenieriaState )
    this.frameIdx = -1;

    this.show = true;
    this.animateSeq();

  }

  onClose() {
    this.$emit('close-player');
  }

  beforeDestroy() {
    this.show = false;
    clearTimeout(this.timer)
  }

  animateSeq() {
    if (!this.frames || this.frames.length === 0) return;

    this.frameIdx = this.frameIdx < this.frames.length - 1 ? this.frameIdx + 1 : 0;
    if (this.frames.length > 1)
      this.timer = setTimeout(this.animateSeq, this.interval);
  }

  get getSource() {
    if (!this.frames || this.frames.length === 0) return null;
    return this.frames[this.frameIdx].src;
  }

  get showProgress() {
    return this.frames && this.frames.length > 1;
  }

  get progressText() {
    if (!this.showProgress)
      return "";
    return `${this.frameIdx + 1} / ${this.frames?.length}`;
  }

  get getFrame() {
    return this.frameIdx;
  }

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

@import "@/assets/scss/global.scss";

.outer {
  position: absolute; 
  width:434px; 
  // height: 780px; 
  top: 0; 
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, .65);
}
.inner {
  position: absolute;
  width: 364px;
  height:427px;
  left: 35px;
  top: 164px;
  background-color: transparent;
  opacity: 1;
}
  
.texto-progress {
  position: absolute;
  left: 34px;
  top: 590px;
  width: 364px;
  font-size: 10px;
  color: white;
  background-color: transparent;
  padding: 2px;
  text-align: center;
}
  
.button-cerrar {
  position: absolute;
  top: 142px;
  right: 35px;
  cursor: pointer;
  color: white;
  // background-color: rgba(255,255,255,0.5);
  
  .texto-cerrar {
    font-size: 12px;
    margin: 4px;
  }
  :hover {
    color: $text-color-red;
  }

}

.fade-enter-active {
  transition: all .75s ease-in;
}
.fade-leave-active {
  transition: all .75s ease-out;
}
.fade-enter, .slide-fade-leave-to {
  // transform: translateX(400px);
  opacity: 0;
}


</style>
