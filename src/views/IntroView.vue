<template lang="pug">
  IntroPlayer
</template>


<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import IntroPlayer from '@/components/IntroPlayer.vue'

@Component({
  components: {
    IntroPlayer,
  }
})
export default class IntroView extends Vue {}
</script>

