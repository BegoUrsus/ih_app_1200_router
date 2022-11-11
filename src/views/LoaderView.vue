<template lang="pug">
  section(id="loader")
    BackgroundLoader(source="loader.png")
    .progress-container(id="progress-container")
      .progress-bar(id="progress-bar" :style="progressStyle")
      .loading-text loading...
    //- div(id="status") {{ $store.state.status }}
      
</template>

<script lang="ts">

import router from "@/router";
import { Component, Vue, Watch } from "vue-property-decorator";
import BackgroundLoader from "@/components/Common/BackgroundLoader.vue";

// export const imageFrames: Map<string, HTMLImageElement[]> = new Map<string, HTMLImageElement[]>();
// export const frames_0_intro_in: HTMLImageElement[] = [];
// export const frames_0_intro_out: HTMLImageElement[] = [];


@Component({
  components: {
    BackgroundLoader
  },
})
export default class LoaderView extends Vue {
  readonly totSecs = 2; //22;
  totImages = 0;
  totImagesLoaded = 0;


  @Watch('$store.state.sectionsLoaded')
  onSectionsLoaded(newValue: string[]) {
    if (newValue && newValue.length == this.totSecs) {
      this.$store.state.loaded = true;
      this.gotoIntro();
    }
  }

  preloadImages(urls: string[], destination: HTMLImageElement[], allImagesLoadedCallback: () => void){
    var loadedCounter = 0;
    var toBeLoadedNumber = urls.length;

    for (const url of urls) {
      preloadImage(url, destination, () => {
        loadedCounter++;
        this.totImagesLoaded++;
        // console.log('Number of loaded images: ' + loadedCounter + " totImagesLoaded: " + this.totImagesLoaded);
        if(loadedCounter == toBeLoadedNumber){
          allImagesLoadedCallback();
        }
      });      
    }
    function preloadImage(url: string, destination: HTMLImageElement[], anImageLoadedCallback: () => void){
        var img = new Image();
        img.src = url;
        destination.push(img);
        img.onload = anImageLoadedCallback;
    }
  } 

  loadFrames() {
    const frames_0_intro_in: HTMLImageElement[] = [];
    const frames_0_intro_out: HTMLImageElement[] = [];
    // const frames_1_1_equipo_valores_in: HTMLImageElement[] = [];
    // const frames_1_1_equipo_valores_out: HTMLImageElement[] = [];
    // const frames_1_2_0_equipo_gest_in: HTMLImageElement[] = [];
    // const frames_1_2_0_equipo_gest_out: HTMLImageElement[] = [];
    // const frames_1_2_1_equipo_gest_calidad_in: HTMLImageElement[] = [];
    // const frames_1_2_1_equipo_gest_calidad_out: HTMLImageElement[] = [];
    // const frames_1_2_2_equipo_gest_prev_in: HTMLImageElement[] = [];
    // const frames_1_2_2_equipo_gest_prev_out: HTMLImageElement[] = [];
    // const frames_1_2_3_equipo_gest_resp_in: HTMLImageElement[] = [];
    // const frames_1_2_3_equipo_gest_resp_out: HTMLImageElement[] = [];
    // const frames_2_ingenieria_in: HTMLImageElement[] = [];
    // const frames_2_ingenieria_out: HTMLImageElement[] = [];
    // const frames_3_edificacion_in: HTMLImageElement[] = [];
    // const frames_3_edificacion_out: HTMLImageElement[] = [];
    // const frames_4_project_in: HTMLImageElement[] = [];
    // const frames_4_project_out: HTMLImageElement[] = [];
    // const frames_5_humana_in: HTMLImageElement[] = [];
    // const frames_5_humana_out: HTMLImageElement[] = [];
    // const frames_6_contacto_in: HTMLImageElement[] = [];
    // const frames_6_contacto_out: HTMLImageElement[] = [];

    const loadImages = (urls: string[], frames: HTMLImageElement[], tag: string) => {
      this.preloadImages(urls, frames, () => {
        // console.log('All FRAMES IN INTRO were loaded');
        this.$store.state.sectionsLoaded.push(tag);
        this.$store.state.imageFrames.set('img_' + tag, frames);
      });
    }

    const img_0_intro_in = require.context('@/assets/sequences/0_intro/in', false, /\.jpg$/).keys()
      .map(key => { return require("@/assets/sequences/0_intro/in" + key.substring(1)); }
    );
    this.totImages += img_0_intro_in.length;
    loadImages(img_0_intro_in, frames_0_intro_in, '0_intro_in');
    
    const img_0_intro_out = require.context('@/assets/sequences/0_intro/out', false, /\.jpg$/).keys()
      .map(key => { return require("@/assets/sequences/0_intro/out" + key.substring(1)); }
    );
    this.totImages += img_0_intro_out.length;
    loadImages(img_0_intro_out, frames_0_intro_out, '0_intro_out');
  
    // const img_1_1_equipo_valores_in = require.context('@/assets/sequences/1_1_equipo_valores/in', false, /\.jpg$/).keys()
    //   .map(key => { return require("@/assets/sequences/1_1_equipo_valores/in" + key.substring(1)); }
    // );
    // this.totImages += img_1_1_equipo_valores_in.length;
    // loadImages(img_1_1_equipo_valores_in, frames_1_1_equipo_valores_in, '1_1_equipo_valores_in');
    
    // const img_1_1_equipo_valores_out = require.context('@/assets/sequences/1_1_equipo_valores/out', false, /\.jpg$/).keys()
    //   .map(key => { return require("@/assets/sequences/1_1_equipo_valores/out" + key.substring(1)); }
    // );
    // this.totImages += img_1_1_equipo_valores_out.length;
    // loadImages(img_1_1_equipo_valores_out, frames_1_1_equipo_valores_out, '1_1_equipo_valores_out');
  
    // const img_1_2_0_equipo_gest_in = require.context('@/assets/sequences/1_2_0_equipo_gest/in', false, /\.jpg$/).keys()
    //   .map(key => { return require("@/assets/sequences/1_2_0_equipo_gest/in" + key.substring(1)); }
    // );
    // this.totImages += img_1_2_0_equipo_gest_in.length;
    // loadImages(img_1_2_0_equipo_gest_in, frames_1_2_0_equipo_gest_in, '1_2_0_equipo_gest_in');
    
    // const img_1_2_0_equipo_gest_out = require.context('@/assets/sequences/1_2_0_equipo_gest/out', false, /\.jpg$/).keys()
    //   .map(key => { return require("@/assets/sequences/1_2_0_equipo_gest/out" + key.substring(1)); }
    // );
    // this.totImages += img_1_2_0_equipo_gest_out.length;
    // loadImages(img_1_2_0_equipo_gest_out, frames_1_2_0_equipo_gest_out, '1_2_0_equipo_gest_out');
  
    // const img_1_2_1_equipo_gest_calidad_in = require.context('@/assets/sequences/1_2_1_equipo_gest_calidad/in', false, /\.jpg$/).keys()
    //   .map(key => { return require("@/assets/sequences/1_2_1_equipo_gest_calidad/in" + key.substring(1)); }
    // );
    // this.totImages += img_1_2_1_equipo_gest_calidad_in.length;
    // loadImages(img_1_2_1_equipo_gest_calidad_in, frames_1_2_1_equipo_gest_calidad_in, '1_2_1_equipo_gest_calidad_in');
    
    // const img_1_2_1_equipo_gest_calidad_out = require.context('@/assets/sequences/1_2_1_equipo_gest_calidad/out', false, /\.jpg$/).keys()
    //   .map(key => { return require("@/assets/sequences/1_2_1_equipo_gest_calidad/out" + key.substring(1)); }
    // );
    // this.totImages += img_1_2_1_equipo_gest_calidad_out.length;
    // loadImages(img_1_2_1_equipo_gest_calidad_out, frames_1_2_1_equipo_gest_calidad_out, '1_2_1_equipo_gest_calidad_out');
  
    // const img_1_2_2_equipo_gest_prev_in = require.context('@/assets/sequences/1_2_2_equipo_gest_prev/in', false, /\.jpg$/).keys()
    //   .map(key => { return require("@/assets/sequences/1_2_2_equipo_gest_prev/in" + key.substring(1)); }
    // );
    // this.totImages += img_1_2_2_equipo_gest_prev_in.length;
    // loadImages(img_1_2_2_equipo_gest_prev_in, frames_1_2_2_equipo_gest_prev_in, '1_2_2_equipo_gest_prev_in');
    
    // const img_1_2_2_equipo_gest_prev_out = require.context('@/assets/sequences/1_2_2_equipo_gest_prev/out', false, /\.jpg$/).keys()
    //   .map(key => { return require("@/assets/sequences/1_2_2_equipo_gest_prev/out" + key.substring(1)); }
    // );
    // this.totImages += img_1_2_2_equipo_gest_prev_out.length;
    // loadImages(img_1_2_2_equipo_gest_prev_out, frames_1_2_2_equipo_gest_prev_out, '1_2_2_equipo_gest_prev_out');
  
    // const img_1_2_3_equipo_gest_resp_in = require.context('@/assets/sequences/1_2_3_equipo_gest_resp/in', false, /\.jpg$/).keys()
    //   .map(key => { return require("@/assets/sequences/1_2_3_equipo_gest_resp/in" + key.substring(1)); }
    // );
    // this.totImages += img_1_2_3_equipo_gest_resp_in.length;
    // loadImages(img_1_2_3_equipo_gest_resp_in, frames_1_2_3_equipo_gest_resp_in, '1_2_3_equipo_gest_resp_in');
    
    // const img_1_2_3_equipo_gest_resp_out = require.context('@/assets/sequences/1_2_3_equipo_gest_resp/out', false, /\.jpg$/).keys()
    //   .map(key => { return require("@/assets/sequences/1_2_3_equipo_gest_resp/out" + key.substring(1)); }
    // );
    // this.totImages += img_1_2_3_equipo_gest_resp_out.length;
    // loadImages(img_1_2_3_equipo_gest_resp_out, frames_1_2_3_equipo_gest_resp_out, '1_2_3_equipo_gest_resp_out');
  
    // const img_2_ingenieria_in = require.context('@/assets/sequences/2_ingenieria/in', false, /\.jpg$/).keys()
    //   .map(key => { return require("@/assets/sequences/2_ingenieria/in" + key.substring(1)); }
    // );
    // this.totImages += img_2_ingenieria_in.length;
    // loadImages(img_2_ingenieria_in, frames_2_ingenieria_in, '2_ingenieria_in');
    
    // const img_2_ingenieria_out = require.context('@/assets/sequences/2_ingenieria/out', false, /\.jpg$/).keys()
    //   .map(key => { return require("@/assets/sequences/2_ingenieria/out" + key.substring(1)); }
    // );
    // this.totImages += img_2_ingenieria_out.length;
    // loadImages(img_2_ingenieria_out, frames_2_ingenieria_out, '2_ingenieria_out');
  
    // const img_3_edificacion_in = require.context('@/assets/sequences/3_edificacion/in', false, /\.jpg$/).keys()
    //   .map(key => { return require("@/assets/sequences/3_edificacion/in" + key.substring(1)); }
    // );
    // this.totImages += img_3_edificacion_in.length;
    // loadImages(img_3_edificacion_in, frames_3_edificacion_in, '3_edificacion_in');
    
    // const img_3_edificacion_out = require.context('@/assets/sequences/3_edificacion/out', false, /\.jpg$/).keys()
    //   .map(key => { return require("@/assets/sequences/3_edificacion/out" + key.substring(1)); }
    // );
    // this.totImages += img_3_edificacion_out.length;
    // loadImages(img_3_edificacion_out, frames_3_edificacion_out, '3_edificacion_out');
  
    // const img_4_project_in = require.context('@/assets/sequences/4_project/in', false, /\.jpg$/).keys()
    //   .map(key => { return require("@/assets/sequences/4_project/in" + key.substring(1)); }
    // );
    // this.totImages += img_4_project_in.length;
    // loadImages(img_4_project_in, frames_4_project_in, '4_project_in');
    
    // const img_4_project_out = require.context('@/assets/sequences/4_project/out', false, /\.jpg$/).keys()
    //   .map(key => { return require("@/assets/sequences/4_project/out" + key.substring(1)); }
    // );
    // this.totImages += img_4_project_out.length;
    // loadImages(img_4_project_out, frames_4_project_out, '4_project_out');

    // const img_5_humana_in = require.context('@/assets/sequences/5_humana/in', false, /\.jpg$/).keys()
    //   .map(key => { return require("@/assets/sequences/5_humana/in" + key.substring(1)); }
    // );
    // this.totImages += img_5_humana_in.length;
    // loadImages(img_5_humana_in, frames_5_humana_in, '5_humana_in');
    
    // const img_5_humana_out = require.context('@/assets/sequences/5_humana/out', false, /\.jpg$/).keys()
    //   .map(key => { return require("@/assets/sequences/5_humana/out" + key.substring(1)); }
    // );
    // this.totImages += img_5_humana_out.length;
    // loadImages(img_5_humana_out, frames_5_humana_out, '5_humana_out');
  
    // const img_6_contacto_in = require.context('@/assets/sequences/6_contacto/in', false, /\.jpg$/).keys()
    //   .map(key => { return require("@/assets/sequences/6_contacto/in" + key.substring(1)); }
    // );
    // this.totImages += img_6_contacto_in.length;
    // loadImages(img_6_contacto_in, frames_6_contacto_in, '6_contacto_in');
    
    // const img_6_contacto_out = require.context('@/assets/sequences/6_contacto/out', false, /\.jpg$/).keys()
    //   .map(key => { return require("@/assets/sequences/6_contacto/out" + key.substring(1)); }
    // );
    // this.totImages += img_6_contacto_out.length;
    // loadImages(img_6_contacto_out, frames_6_contacto_out, '6_contacto_out');
  
  }


  mounted() {
    if (!this.$store.state.loaded)
      this.loadFrames();
    else {
      this.gotoIntro();
    }
  }

  get status() {
    return this.$store.state.status ? "onLine" : "offLine";
  }

  gotoIntro() {
    setTimeout(() => { router.push('/intro');} , 500);

  }

  get progressStyle() {
    const percent = this.totImages > 0 ? this.totImagesLoaded / this.totImages * 100 : 0;
    // console.log(this.totImages, this.totImagesLoaded, percent)
    return {
      width: ( 100 - percent ) + '%',
    };
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

@import "@/assets/scss/global.scss";

#loader {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
#progress-container {
  position: absolute;
  top: 352px;
  right: 338px;
  width: 524px;
  height: 78px;
}
#progress-bar {
  position: absolute;
  background-color: white;
  opacity: 0.75;
  top: 0px;
  right: 0px;
  width: 100%;
  height: 100%;
}
.loading-text {
  position: absolute;
  bottom: -10px;
  width: 100%;
  text-align: center;
  font-size: 12px;
}
#status {
  position: absolute;
  bottom: 10px;
  left: 0;
  width: 100%;
  text-align: center;
}
</style>
