<template lang="pug">
  #main-view.full-wh
    Transition(name="fade" mode="out-in")
      router-view
    img(id="logo_menu" src="@/assets/shapes/logo_menu.png" class="logo-menu" )
    MenuPrincipal
    LogoHome

</template>


<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import MenuPrincipal from "@/components/Menus/MenuPrincipal.vue";
import LogoHome from "@/components/Common/LogoHome.vue";

@Component({
  components: {
    MenuPrincipal,
    LogoHome,
  },
})
export default class MainView extends Vue {

}
</script>

<style lang="scss" scoped>
  .logo-menu {
    position: absolute;
    top: 0px;
    left: -2px;
    pointer-events: none;
  }
</style>
