<template>
  <div class="home">
    <Pokedex />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Pokedex from '@/containers/Pokedex.vue'; // @ is an alias to /src

@Component({
  components: {
    Pokedex,
  },
})
export default class Home extends Vue {}
</script>
