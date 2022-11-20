<template lang="pug">
    section(id="equipo-gestion")
      Transition(name="fade" mode="out-in")
        router-view
      Transition(name="slide-fade-menu" appear)
        MenuGestion
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import MenuGestion from "@/components/Menus/MenuGestion.vue";

@Component({
  components: {
    MenuGestion,
  }
})
export default class EquipoGestion extends Vue {

}

</script>

<style scoped lang="scss">
@import "@/assets/scss/global.scss";

#equipo-gestion {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  // /* slide-fade-menu transition */
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
