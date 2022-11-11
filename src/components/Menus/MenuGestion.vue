<template lang="pug">
  .menu_gestion
    router-link(key="calidad" to="/main/equipo/gestion/calidad")
      MenuButton(texto="SISTEMAS DE CALIDAD" :offset="calcOffset(0)")
    router-link(key="prevencion" to="/main/equipo/gestion/prevencion")
      MenuButton(texto="SISTEMAS DE PREVENCIÓN" :offset="calcOffset(1)")
    router-link(key="responsabilidad" to="/main/equipo/gestion/responsabilidad")
      MenuButton(texto="RESPONSABILIDAD MEDIOAMBIENTAL" :offset="calcOffset(2)")
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import MenuButton from "./MenuButton.vue";


@Component({
  components: {
    MenuButton,
  },
})
export default class MenuGestion extends Vue {

  calcOffset(idx: number): string {
    var of = idx * 32
    return `${of}px`;
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.menu_gestion {
  position: absolute;
  top: 188px;
  left: 276px;
  width: 288px;
  height: 108px;
  font-size: 14.3px;  
  // background-color: rgba(0, 0, 255, 0.2);
}
</style>
