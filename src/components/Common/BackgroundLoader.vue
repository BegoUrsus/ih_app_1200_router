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
    return require("@/assets/" + this.bgName);
  }

  get mainStyle() {
    // console.log("mainStyle - " + this.bgImage);
    if (!this.source) return "{}"
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

  // background-color: white;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
}
</style>