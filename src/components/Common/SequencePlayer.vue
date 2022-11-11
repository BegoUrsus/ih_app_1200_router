<template lang="pug">
  section(id="sequence-player")
    img(:key="frameIdx" :src="source")

      
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

// export const zeroPad = (num: number, places: number) => String(num).padStart(places, "0");
// export const fps15 = 1000/15; // 66
// export const fps24 = 1000/24; // 42
// export const fps25 = 1000/25; // 40
export const fps30 = 1000/30; // 33
// export const fps60 = 1000/60; // 16


@Component({
  components: {
  },
})
export default class SequencePlayer extends Vue {
  @Prop() frames!: HTMLImageElement[] | undefined;
  @Prop() default!: HTMLImageElement | undefined;
  totFrames = 0;
  frameIdx = 0;

  get source() {
    if (this.frameIdx == -1)
      return this.default ? this.default.src : null;
    if (!this.frames || this.frameIdx < 0 || this.frameIdx >= this.frames.length )
      return this.default ? this.default.src : null;
    return this.frames[this.frameIdx].src;
  }

  mounted() {
    // console.log("SequencePlayer mounted");
    this.totFrames = this.frames ? this.frames.length : 0;
    this.frameIdx = 0;
    // console.log("imageFrames", this.frames);
    if (this.totFrames > 0)
      this.animateSeq();
    else {
      this.frameIdx = -1;
      this.$emit("finsihed");
    }
  }

  
  animateSeq() {
    if (this.frameIdx < this.totFrames - 1) {
      this.frameIdx++;
      // console.log("Animating: " + this.frameIdx);
      setTimeout(this.animateSeq, fps30);
    }
    else {
      this.frameIdx = -1;
      this.$emit("finished");
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

@import "@/assets/scss/global.scss";

#sequence-player {
  position: absolute; width:100%; height:100%; top:0; left:0;
}

</style>
