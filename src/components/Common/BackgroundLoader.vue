<template lang="pug">
#background-loader.bg-loader(:style="mainStyle")
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class BackgroundLoader extends Vue {
  @Prop() source!: string | null;
  @Prop() folder!: string | null;

  // mounted() {
  //   console.log("BackgroundLoader mounted");
  // }

  get bgName() {
    return this.folder ? this.folder + "/" + this.source : this.source;
  }

  get bgImage() {
    if (!this.source) return require("@/assets/background_1200.jpg");
    return require("@/assets/" + this.bgName);
  }

  get mainStyle() {
    // console.log("mainStyle - " + this.bgImage);
    return {
      backgroundImage: `url(${this.bgImage})`,
    };
  }

  // @Watch("source")
  // onSourceChanged(newValue: string) {
  //   console.log("Source changed: ", newValue);
  // }
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/global.scss";

.bg-loader {

  position: absolute;
  top: 0;
  left: 0;
  width: $img-width;
  height: $img-height;

  background-color: transparent;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
}
</style>