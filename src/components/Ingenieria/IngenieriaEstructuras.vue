<template lang="pug">
  IngenieriaItem.content(:index="5"  key="estructuras" :source="frame" folder="backgrounds" :texto="texto")
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
  
  frame = "LINEA_2_6_ingenieria_estru.png";

  texto = `- Puentes.
          <br/>
          - Pasarelas.
          <br/>
          - Túneles y Falsos Túneles.
          <br/>
          - Enlaces.
          <br/>
          - Hincas.
          <br/>
          - Obras de Fábrica, cajones.
          <br/><br/>
          <span class="texto-rojo">[ver fotos]</span>`;

}
</script>

<style scoped lang="scss">
.content {
  position: relative; width:100%; height:100%;
}
</style>
