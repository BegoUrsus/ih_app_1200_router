<template lang="pug">
  .menu-button(:style="{top:offset}") {{ texto }}
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class MenuButton extends Vue {
  @Prop() texto!: string;
  @Prop() offset!: string;
}
</script>

<style scoped lang="scss">

.menu-button {
  position: absolute;
  cursor: pointer;
  margin: 5px;
  width: calc(100% - 10px);
  // background-color: white;
  font-weight: normal;
}

</style>
