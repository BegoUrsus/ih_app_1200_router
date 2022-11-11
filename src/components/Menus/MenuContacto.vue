<template lang="pug">
  .contacto-button(@mouseover="hovering=true" @mouseleave="hovering=false" @click="sendMail")
    .texto-telefono(style="top: 224px") {{ textoTel }} 
    .texto-telefono(style="top: 236px") {{ textoTel2 }}
    .texto-mail(:style="mailStyle") {{ textoMail }}
</template>

<script lang="ts">
import { TEXT_COLOR_RED, TEXT_COLOR_NORMAL } from "@/store";
import { Component, Vue } from "vue-property-decorator";

@Component
export default class MenuContacto extends Vue {
  public textoTel = "M. (+34) 606 45 17 22"
  public textoTel2 = "T / F. (+34) 91 872 50 74";
  public textoMail = "info@ingenieriahumana.es"
 
  public hovering = false;

  mounted() {
    // console.log("MenuContacto mounted");
    this.hovering = false;
  }

  get textColor() {
    return this.hovering ? TEXT_COLOR_RED : TEXT_COLOR_NORMAL;
  }

  get mailStyle() {
      let style =  {
        top: "260px",
        color: this.textColor,
        // fontWeight: 500,
      };
      // console.log(style);
      return style;
  }

  sendMail() {
    // console.log("sendMail");
    const win: Window = window;
    win.location = "mailto:ingo@ingenieriahumana.es";
  }

}
</script>


<style scoped lang="scss">

@import "@/assets/scss/global.scss";

.contacto-button {
  position: absolute;
  cursor: pointer;
  margin: 5px;
  width: calc(100% - 10px);

}
.texto-telefono,
.texto-mail {
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  color: $text-color-normal;
  font-size: 12px;
  // text-shadow: 0px 0px 4px white,0px 0px 1px white,0px 0px 2px white,0px 0px 3px white,0px 0px 4px white,
}
.red-button {
    color: $text-color-red;
}
</style>
