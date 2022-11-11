<template lang="pug">
#app
  //- img(:src="getSource"
  //-     alt="" width="100%"
  //-   )
  //- div {{ documentWidth }}
  #app-main(v-cloak)
    #outer
      transition(name="fade")
        router-view
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import { gsap } from "gsap";

export const IMG_WIDTH = 1200;
export const IMG_HEIGHT = 780;

@Component({
  components: {
  },
})

export default class App extends Vue {  
  // get getSource() {
  //   let width = this. documentWidth;
  //   if (width <= 200)
  //     return "ih0217_w_200.jpg";
  //   if (width <= 563)
  //     return "ih0217_w_563.jpg"
  //   if (width <= 842)
  //     return "ih0217_w_842.jpg"
  //   return "ih0217_w_1200.jpg"
  // }
  // get documentWidth() {
  //   return document.documentElement.clientWidth;
  // }
  created() {
    window.addEventListener("resize", this.sizeAll);
    window.addEventListener("orientationchange", this.sizeAll);
  }
  destroyed() {
    window.removeEventListener("resize", this.sizeAll);
    window.removeEventListener("orientationchange", this.sizeAll);
  }

  mounted() {
    gsap.set("#app-main", { transformOrigin: "top left" });
    this.sizeAll();
  }

  sizeAll() {
    // your code for handling resize...
    // To resize window: https://stackoverflow.com/questions/18750769/scale-div-with-its-content-to-fit-window

    let w = document.documentElement.clientWidth;
    let h = document.documentElement.clientHeight;

    let ratioImage = IMG_WIDTH / IMG_HEIGHT;
    let ratioClient = w / h;

    // console.log("document.documentElement.clientWidth/Height ", w, h);
    // console.log("IMG_WIDTH/HEIGHT: ", IMG_WIDTH, IMG_HEIGHT);
    // console.log("ratioImage/Client: ", ratioImage, ratioClient);

    let s_w = (w - 50) / IMG_WIDTH;
    let s_h = (h - 50) / IMG_HEIGHT;

    let s = ratioClient > ratioImage ? s_h : s_w;
    // console.log("A scale: ", s_w, s_h, s);
    if (s > 2.5) s = 2.5;
    gsap.set("#app-main", { scale: s });

    let appMain = document.getElementById("app-main");
    if (appMain === null) return;
    let ww = appMain.getBoundingClientRect().width;
    // console.log("w: ", w, " - appMain.getBoundingRect.width: ", ww);
    let wh = appMain.getBoundingClientRect().height;
    // console.log("h", h, " - appMain.getBoundingRect.height: ", wh);

    // if (w > ww) 
      gsap.set("#app-main", { x: (w - ww) / 2 });
    // if (h > wh) 
      gsap.set("#app-main", { y: (h - wh) / 2 });
  }

}
</script>

<style lang="scss">
@import "@/assets/scss/global.scss";

html,
body {
  margin: 0;
  padding: 0;
  border: 0;
}

body {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  
  // background:$text-color-grey;
  // background: #121212;
  // background: white;

  /* image */
  // background-image: url('assets/background_1200.jpg');
  // background-repeat: no-repeat;
  // background-size: cover;

  /* metallic silver 1 */
  // background: linear-gradient(
  //   90deg, 
  //   #787878 0%,
  //   #b5b5b5 25%,
  //   #e3e3e3 50%,
  //   #b5b5b5 75%,
  //   #787878 100%
  // );
  
  /* metallic silver 2 */
  // background: linear-gradient(
  //   90deg, 
  //   #7e7e7e 0%,
  //   #e3e3e3 25%,
  //   #787878 50%,
  //   #e3e3e3 75%,
  //   #7e7e7e 100%
  // );

  // loon crest
  // background: 
  //       linear-gradient(
  //           to bottom, 
  //           rgba(255,255,255,0.15) 0%, 
  //           rgba(0,0,0,0.15) 100%),
  //       radial-gradient(
  //           at top center, 
  //           rgba(255,255,255,0.40) 0%, 
  //           rgba(0,0,0,0.40) 120%) 
  //       #989898;
  // background-blend-mode: multiply,multiply;

  //premium-dark
  background: #000000;  /* fallback for old browsers */
  background: linear-gradient(to right, #434343 0%, black 100%);
  background: -webkit-linear-gradient(to right, #434343 0%, black 100%);


  // netflix
  // background: #8E0E00;  /* fallback for old browsers */
  // background: -webkit-linear-gradient(to bottom, #1F1C18, #8E0E00);  /* Chrome 10-25, Safari 5.1-6 */
  // background: linear-gradient(to bottom, #1F1C18, #8E0E00); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  // red mist
  // background: #000000;  /* fallback for old browsers */
  // background: -webkit-linear-gradient(to bottom, #000000, #e74c3c, #000000);  /* Chrome 10-25, Safari 5.1-6 */
  // background: linear-gradient(to bottom, #000000, #e74c3c, #000000); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}

#app {
  font-family: 'Noto Sans', sans-serif;
  font-weight: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: $text-color-normal;
}

.bloque-texto {
    position: absolute;
    top: 47px;
    left: 576px;
    width: 371px;
    height: 500px;
    font-weight: normal;
    transform: scaleX(.95);
    transform-origin: top left;

    color: $text-color-normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 1.205;
    text-shadow: 0 0 10px rgb(255, 255, 255);

    // background-color: rgba(255, 0, 0, 0.5);

    .texto-bold {
        font-weight: 500;
        color: $text-color-grey;
    }

    .texto-rojo {
        font-weight: 500;
        color: $text-color-red;
    }

}

  .left-border {
    border-left: 2px solid $text-color-normal;
    padding-left: 10px;
    margin-left: -10px;
  }

#app-main {
  width: $img-width;
  height: $img-height;
  margin: 0;
  background: white;

  #outer {
    width: $img-width;
    height: $img-height;
    background: transparent;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }

  .full-wh {
    width: 100%;
    height: 100%;
  }
}

a {
    color: $text-color-normal;
}

a:hover {
  color: $text-color-red;
}
.red-active-link {
    color: $text-color-red;
}

/***** TRANSITIONS **********/

// fade transition
.fade-enter-active {
  transition: opacity .5s ease;
}
.fade-leave-active {
  transition: opacity .25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* photo slide transition */
.photo-slide-fade-enter-active {
  transition: all .5s ease;
}
.photo-slide-fade-leave-active {
  transition: all .25s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.photo-slide-fade-enter, 
.photo-slide-fade-leave-to
{
  transform: translateX(250px);
  opacity: 0;
}

</style>
