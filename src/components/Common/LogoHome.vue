<template lang="pug">
  .logo-home(style="position:absolute; left:0; bottom:0")
    img.rombo(id="rombo" src="@/assets/shapes/rombo_180.svg" @mouseover.self="showHome=true" @mouseleave="showHome=false" @click="goHome")
    .home(id="home" :style="{display: homeDisplay }") INICIO

</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class LogoHome extends Vue {
  public home = document.getElementById("home");
  public showHome = false;

  get homeDisplay() {
    return this.showHome ? "block" : "none";
  }

  mounted() {
    this.showHome = false;
  }

  goHome() {
    // console.log("LogoHome - goHome");
    this.showHome = false;
    this.$router.push("/intro");
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

@import "@/assets/scss/global.scss";

.rombo {
  position: absolute;
  display: block;
  width: 160px;
  width: 220px;
  left: 24px;
  bottom: 24px;
  cursor: pointer;
  // background-color: blue;
  
}

.home {
  position: absolute;
  left: 24px;
  bottom: 18px;
  font-size: 14px;
  font-weight: 500;
  color: $text-color-grey;
  pointer-events: none;
}
</style>
