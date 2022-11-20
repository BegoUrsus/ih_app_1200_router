<template lang="pug">
  IngenieriaItem.content(:index="4" key="deportivas" :source="frame" folder="backgrounds" :texto="texto")
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import IngenieriaItem from "@/components/Ingenieria/IngenieriaItem.vue";

@Component({
  components: {
    IngenieriaItem
  }
})
export default class IngenieriaDeportivas extends Vue {
  
  frame = "LINEA_2_5_ingenieria_depor.png";
  
  // texto = `<span class="texto-rojo">[ver fotos]</span>`;
  texto = "";
}
</script>

<style scoped lang="scss">
.content {
  position: relative; width:100%; height:100%;
}
</style>
