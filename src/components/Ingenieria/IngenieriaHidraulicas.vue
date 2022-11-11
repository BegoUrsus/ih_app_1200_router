<template lang="pug">
  IngenieriaItem.content(:index="2"  key="hidraulicas" :source="frame" folder="backgrounds" :texto="texto")
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import IngenieriaItem from "./IngenieriaItem.vue";

@Component({
  components: {
    IngenieriaItem
  }
})
export default class IngenieriaHidraulicas extends Vue {
  
  frame = "LINEA_2_3_ingenieria_hidra.png";
  
  texto = `- EDAR. Estaciones depuradoras de aguas residuales.
          <br/>
          - ETAP. Estaciones de tratamiento de agua potable ETAP.
          <br/>
          - EB. Estaciones de bombeos tanto de agua potable como de aguas residuales.
          <br/>
          - Riegos.
          <br/><br/>
          <span class="texto-rojo">[ver fotos]</span>`;
}
</script>

<style scoped lang="scss">
.content {
  position: relative; width:100%; height:100%;
}
</style>
