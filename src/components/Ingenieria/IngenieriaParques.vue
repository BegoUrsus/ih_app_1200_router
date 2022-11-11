<template lang="pug">
  IngenieriaItem.content(:index="7" key="parques" :source="frame" folder="backgrounds" :texto="texto")
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import IngenieriaItem from "./IngenieriaItem.vue";

@Component({
  components: {
    IngenieriaItem
  }
})
export default class IngenieriaParques extends Vue {
  
  frame = "LINEA_2_8_ingenieria_parques.png";

  texto = `- Urbanización.
          <br/>
          - Infraestructura.
          <br/>
          - Zonas de servicios.
          <br/>
          - Viales.
          <br/><br/>
          <span class="texto-rojo">[ver fotos]</span>`;
          
}
</script>

<style scoped lang="scss">
.content {
  position: relative; width:100%; height:100%;
}
</style>
