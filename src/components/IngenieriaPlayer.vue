<template lang="pug">
    section(id="ingenieria-player")
      BackgroundLoader(:source="frameFondo" folder="backgrounds")
      router-view
      Transition(name="ingenieria-menu-fade" appear)
        MenuIngenieria
      Transition(name="ingenieria-texto-fade" appear)
        .bloque-texto(v-html="textoIngenieria" class="texto-ingenieria")

</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import BackgroundLoader from "@/components/Common/BackgroundLoader.vue";
import MenuIngenieria from "@/components/Menus/MenuIngenieria.vue";
import MenuPrincipal from "@/components/Menus/MenuPrincipal.vue"; 

@Component({
  components: {
    BackgroundLoader,
    MenuPrincipal,
    MenuIngenieria,
  }
})
export default class IngenieriaPlayer extends Vue {

  mounted() {
    // console.log("IngenieriaPlayer mounted " + this.$store.state.mainState + " " + this.$store.state.ingenieriaState)
  }

  frameFondo = "2_0_ingenieria.jpg";

  textoIngenieria = `El área de Ingeniería Civil está formada por profesionales Ingenieros de Caminos e Ingenieros Técnicos de Obras Públicas, con más de 14 años de experiencia proyectando, gestionando, dirigiendo y construyendo todo tipo de obras civiles.
      <br/><br/>
      Algunas obras de referencia desarrolladas por nuestros técnicos son:`;

 }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

#intro-player {
  position: relative; width:100%; height:100%;
}

#ingenieria-player,
.content {
  position: relative; width:100%; height:100%;
}

#ingenieria-player {
  .texto-ingenieria {
    top: 320px;
    left: 369px;
    width: 410px;
    height: 113px;
  }

  /* ingenieria fade transition */
  .ingenieria-texto-fade-enter-active {
    transition: all .75s ease;
  }
  .ingenieria-texto-fade-leave-active {
    transition: all .25s ease;
  }
  .ingenieria-texto-fade-enter, .fade-leave-to
  {
    opacity: 0;
  }

  /* ingenieria fade transition */
  .ingenieria-menu-fade-enter-active {
    transition: all .75s ease;
    transition-delay: 0.5s;
  }
  .ingenieria-menu-fade-leave-active {
    transition: all .25s ease;
  }
  .ingenieria-menu-fade-enter, .fade-leave-to
  {
    opacity: 0;
  }

}


</style>
