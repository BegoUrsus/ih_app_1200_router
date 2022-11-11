<template lang="pug">
  IngenieriaItem.content(:index="3" key="industriales" :source="frame" folder="backgrounds" :texto="texto")
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import IngenieriaItem from "./IngenieriaItem.vue";

@Component({
  components: {
    IngenieriaItem
  }
})
export default class IngenieriaIndustriales extends Vue {
  
  frame = "LINEA_2_4_ingenieria_indus.png";
  
  texto = `- Centrales Eléctricas.
          <br/>
          - Centrales de Recogida de Residuos Sólidos Urbanos.
          <br/>
          - Centros de Transformación.
          <br/><br/>
          <span class="texto-rojo">[ver fotos]</span>`;
}
</script>

<style scoped lang="scss">
.content {
  position: relative; width:100%; height:100%;
}
</style>
