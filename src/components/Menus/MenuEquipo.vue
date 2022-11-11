<template lang="pug">
  .menu_equipo
    router-link(key="valores" to="/main/equipo/valores")
      MenuButton(texto="VALORES" :offset="calcOffset(0)")
    router-link(key="gestion" to="/main/equipo/gestion/calidad" :class="{'red-active-link': $route.path.startsWith('/main/equipo/gestion')}")
      MenuButton(texto="SISTEMAS DE GESTIÓN" :offset="calcOffset(1)")
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import MenuButton from "./MenuButton.vue";

const of = 32;
@Component({
  components: {
    MenuButton,
  },
})
export default class MenuEquipo extends Vue {

  calcOffset(idx: number): string {
    return `${of * idx}px`;
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.menu_equipo {
  position: absolute;
  top: 125px;
  left: 218px;
  width: 204px;
  height: 62px;
  font-size: 14.3px;
  // background-color: rgba(0, 255, 0, 0.2);
}
</style>
