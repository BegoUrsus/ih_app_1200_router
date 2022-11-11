<template lang="pug">
  IngenieriaItem.content(:index="1" key="urbanizacion" :source="frame" folder="backgrounds" :texto="texto")
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import IngenieriaItem from "./IngenieriaItem.vue";

@Component({
  components: {
    IngenieriaItem
  }
})
export default class IngenieriaUrbanizacion extends Vue {
  
  frame = "LINEA_2_2_ingenieria_urba.png";
  
  texto = `<span class="texto-rojo">[ver fotos]</span>`;

}
</script>

<style scoped lang="scss">
.content {
  position: relative; width:100%; height:100%;
}
</style>
