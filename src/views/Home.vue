<template>
  <div class="home">
    <Pokemons />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Pokemons from '@/containers/Pokemons.vue'; // @ is an alias to /src

@Component({
  components: {
    Pokemons,
  },
})
export default class Home extends Vue {}
</script>
