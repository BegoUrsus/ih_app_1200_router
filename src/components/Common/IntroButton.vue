<template lang="pug">
  .rombo-wrapper()
    img.rombo.blink(id="rombo" src="@/assets/shapes/rombo_rojo.png" @click="romboClicked" @mouseover.self="bigLogo=true" @mouseleave="bigLogo=false")
    img.logo(id="logo" src="@/assets/shapes/logo_180.svg" :style="{display: logoDisplay, scale: logoScale }")

</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
  },
})
export default class IntroButton extends Vue {
  public showLogo = false;
  public bigLogo = false;

  mounted() {
    this.showLogo = true;
    this.bigLogo = false;
  }

  get logoDisplay() {
    // return "block";
    return this.showLogo ? "block" : "none";
  }

  get logoScale() {
    return 1;
    // return this.bigLogo ? 1.2 : 1;
  }

  romboClicked() {
    this.showLogo = false;
    this.$emit("rombo-clicked")
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

@import "@/assets/scss/global.scss";

.rombo-wrapper {
  position: absolute;
  top: 0;
  bottom:0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: center;
  margin: auto;
  width: $img-width;
  min-width: $img-width;
  max-width: $img-width;
  height: $img-height;
  min-height: $img-height;
  max-height: $img-height;
}

.rombo {
  position: absolute;
  display: block;
  width: 77px;
  height: 17px;
  left: 607px;
  top: 470px;
  cursor: pointer;
}

.logo {
  position: absolute;
  display: block;
  left: 623px;
  top: 523px;
  transform-origin: top left;
  scale: 1;
}

.blink {
  -webkit-animation: blink 3s infinite both;
  animation: blink 3s infinite both;
}

@-webkit-keyframes blink {
  0%,
  50%,
  100% {
    opacity: 0;
  }
  25%,
  75% {
    opacity: 1;
  }
}
@keyframes blink {
  0%,
  50%,
  100% {
    opacity: 0;
  }
  25%,
  75% {
    opacity: 1;
  }
}
</style>
