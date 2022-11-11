<template lang="pug">
  .menu_ingenieria
    router-link(v-for="(item, idx) in items" :key="item" :to="itemRoute(idx)")
      MenuButton(:key="item" :texto="buttonText[idx]"
        :offset="calcOffset(idx)")
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import MenuButton from "./MenuButton.vue";


@Component({
  components: {
    MenuButton,
  },
})
export default class MenuIngenieria extends Vue {
  // mounted() {
  //   console.log("Menu Ingenieria mounted");
  // }

  items = ["LINEALES", "URBANIZACION", "HIDRAULICAS", "INDUSTRIALES", "DEPORTIVAS", "ESTRUCTURAS", "GEOTECNIA", "PARQUES"];
  buttonText = [
      "1. OBRAS LINEALES",
      "2. OBRAS DE URBANIZACIÓN",
      "3. OBRAS HIDRAULICAS",
      "4. INSTALACIONES INDUSTRIALES",
      "5. INSTALACIONES DEPORTIVAS",
      "6. ESTRUCTURAS",
      "7. GEOTÉCNIA Y MEDIO AMBIENTE",
      "8. PARQUES TEMÁTICOS / PARQUES TECNOLÓGICOS"    ];

  itemRoute(idx: number) {
    return `/main/ingenieria/${this.items[idx].toLowerCase()}`;
  }

  calcOffset(idx: number): string {
    var of = idx * 31;
    return `${of}px`;
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

@import "@/assets/scss/global.scss";

.menu_ingenieria {
  position: absolute;
  top: 440px;
  left: 364px;
  width: 400px;
  height: 246px;
  font-size: 13px;
  // background-color: rgba(0, 255, 0, 0.2);
  border-right: 2px solid $text-color-normal;
}
</style>
