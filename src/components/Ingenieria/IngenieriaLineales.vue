<template lang="pug">
  IngenieriaItem.content(:index="0" key="lineales" :source="frame" folder="backgrounds" :texto="texto")
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import IngenieriaItem from "./IngenieriaItem.vue";

@Component({
  components: {
    IngenieriaItem
  }
})
export default class IngenieriaLineales extends Vue {
  
  frame = "LINEA_2_1_ingenieria_lineales.png";
  
  texto = `- Carreteras. Nuevo trazado, acondicionamientos y variantes.
          <br/>
          - Instalaciones eléctricas aéreas y subterráneas.
          <br/>
          - Conducciones por gravedad y forzadas, de aguas residuales, agua potable y aguas regeneradas.
          <br/>
          - Conducciones de gas.
          <br/>
          - Conducciones neumáticas de Residuos Sólidos Urbanos.
          <br/><br/>
          <span class="texto-rojo">[ver fotos]</span>`;

}
</script>

<style scoped lang="scss">
.content {
  position: relative; width:100%; height:100%;
}
</style>
