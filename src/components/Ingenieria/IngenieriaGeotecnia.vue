<template lang="pug">
  IngenieriaItem.content(:index="6"  key="geotecnia" :source="frame" folder="backgrounds" :texto="texto")
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import IngenieriaItem from "./IngenieriaItem.vue";

@Component({
  components: {
    IngenieriaItem
  }
})
export default class IngenieriaEstructuras extends Vue {
  
  frame = "LINEA_2_7_ingenieria_geo.png";

  texto = `- Encauzamientos.
          <br/>
          - Estabilización de taludes.
          <br/>
          - Sellado de Vertederos.
          <br/>
          - Acondicionamiento de ríos.`;
          
}
</script>

<style scoped lang="scss">
.content {
  position: relative; width:100%; height:100%;
}
</style>
