<template lang="pug">
  .menu_principal
    router-link(v-for="(item, idx) in items" :key="items[idx]" :to="itemRoute(idx)" :class="{'red-active-link': isSubsActive(item)}")
      MenuButton(:texto="buttonText[idx]" :offset="calcOffset(idx)")
    MenuContacto()

</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import MenuButton from "./MenuButton.vue";
import MenuContacto from "./MenuContacto.vue";


@Component({
  components: {
    MenuButton,
    MenuContacto,
  },
})
export default class MenuPrincipal extends Vue {

  items = ["EQUIPO", "INGENIERIA", "EDIFICACION", "PROJECT", "HUMANA", "CONTACTO"];
  buttonText = ["EQUIPO", "INGENIERIA CIVIL", "EDIFICACIÓN", "PROJECT MANAGEMENT", "HUMANA", "CONTACTO"];

  isSubsActive(item: string) {
    return this.$route.path.startsWith('/main/'+ item.toLowerCase());
  }
  
  itemRoute(idx: number) {
    if (idx === 0)
      return `/main/equipo/valores`;
    else if (idx === 1)
      return `/main/ingenieria/lineales`;
    return `/main/${this.items[idx].toLowerCase()}`;
  }

  calcOffset(idx: number): string {
    var of = idx * 32
    switch(idx) {
      case 3: of = 96; break;
      case 4: of = 126; break;
      case 5: of = 157; break;
    }
    return `${of}px`;
  }

  itemSelected(item: string) {
    return this.$router.currentRoute.matched.find(x => x.name == item.toLowerCase())
  }

  onClicked(item: string) {
    // console.log("Clicked menu principal " + item)
    this.$emit('set-main-state', item);
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.menu_principal {
  position: absolute;
  top: 125px;
  height: 187px;
  left: 23px;
  width: 184px;
  // background-color: rgba(255, 0, 0, 0.2);
  text-align: right;
  font-size: 14.3px;
}

</style>
