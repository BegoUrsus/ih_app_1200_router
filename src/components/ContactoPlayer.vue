<template lang="pug">
    //- router-link(to="/main/contacto" key="contacto")
    section(id="contacto-player")
      BackgroundLoader(:source="source" folder="backgrounds")
      .bloque-texto(v-html="texto" :class="clase")
      .email(@click="sendMail")
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import BackgroundLoader from "@/components/Common/BackgroundLoader.vue";
import MenuPrincipal from "@/components/Menus/MenuPrincipal.vue";


@Component({
  components: {
    BackgroundLoader,
    MenuPrincipal,
  }
})
export default class ContactoPlayer extends Vue {

  public frame_contacto = "6_0_contacto.svg";
  public backgroundRef = this.frame_contacto;

  // mounted() {
  //   console.log("contactoPlayer mounted " + this.$store.state.mainState)
  // }

  public get source(): string {
    return this.frame_contacto;
  }

  sendMail() {
    // console.log("sendMail");
    const win: Window = window;
    win.location = "mailto:ingo@ingenieriahumana.es";
  }

    get texto() {
    return `<div class="texto-rojo" style="transform: scaleX(1.05); transform-origin: top left;">
        M. (+34) 606 45 17 22
        <br/>
        T / F. (+34) 91 872 50 74
      </div>
      <div class="texto-rojo" style="transform: scaleX(.95); transform-origin: top left;">
        <br/>
        info@ingenieriahumana.es
      </div>`;
  }

  get clase() {
    return "texto-contactos";
  }


}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#contacto-player {
  position: relative; width:100%; height:100%;

  .texto-contactos {
    top: 319px;
    left: 369px;
    width: 297px;
    height: 111px;
    // background-color: rgba(255, 0, 0, 0.2);
    font-size: 22px;
    line-height: 1;
    animation: myAnimation .5s;
    animation-timing-function: ease-out;
  }

  @keyframes myAnimation {
    0%   { opacity: 0; left: 766px; }
    100%   { opacity: 1; left:369px; }
  }

}


.email {
  position: relative;
  cursor: pointer;
  top: 312px;
  left: 364px;
  width: 272px;
  height: 101px;  
  // background-color: rgba(0,0,0,0.2);
}
</style>
