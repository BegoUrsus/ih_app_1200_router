<template lang="pug">
    section(id="equipo-player")
      router-view
      MenuEquipo
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import MenuEquipo from "@/components/Menus/MenuEquipo.vue";

@Component({
  components: {
    MenuEquipo,
  }
})
export default class EquipoPlayer extends Vue {
  // beforeDestroy() {
  //   console.log("BEFORE DESTROY EquipoPlayer");
  //   console.log("store.to: " + this.$store.state.toRoute + " store.from: " + this.$store.state.fromRoute);
  // }
}

</script>

<style scoped lang="scss">
@import "@/assets/scss/global.scss";

#equipo-player {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  /* fade transition */
  .fade-enter-active {
    transition: opacity 5s ease;
  }
  .fade-leave-active {
    transition: opacity .25s ease;
  }
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }

  /* slide transition */
  .equipo-slide-fade-enter-active {
    transition: all .5s ease-in;
  }
  .equipo-slide-fade-leave-active {
    transition: all .25s ease-out;
  }
  .equipo-slide-fade-enter, 
  .equipo-slide-fade-leave-to {
    transform: translateX(150px);
    opacity: 0;
  }

  // /* slide transition */
  .slide-fade-menu-enter-active {
    transition: all .5s ease;
  }
  .slide-fade-menu-leave-active {
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    transition-delay: .1s;
  }
  .slide-fade-menu-enter, 
  .slide-fade-menu-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */ {
    transform: translateY(150px);
    opacity: 0;
  }

}
</style>
