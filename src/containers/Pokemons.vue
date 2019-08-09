<template>
  <div class="pokemons-page">
    <Pokemon
      v-for="pokemon in pokemons"
      :key="pokemon.id"
      :pokemon="pokemon"
    ></Pokemon>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { gql } from 'apollo-boost';
import Pokemon from '../components/Pokemon.vue';

const QUERY_POKEMONS = gql`{
  pokemons(first: 151) {
    id
    number
    name
    weight {
      maximum
      minimum
    }
    height {
      maximum
      minimum
    }
    classification
    types
    resistant
    attacks {
      fast {
        name
        type
        damage
      }
      special {
        name
        type
        damage
      }
    }
    weaknesses
    fleeRate
    maxCP
    evolutions {
      id
      number
      name
    }
    evolutionRequirements {
      amount
      name
    }
    maxHP
    image
  }
}`;

@Component({
  components: {
    Pokemon,
  },
  apollo: {
    pokemons: {
      query: QUERY_POKEMONS,
    },
  },
})
export default class Pokemons extends Vue {
  private pokemons: object[] = [];
}
</script>

<style lang="scss" scoped>
.pokemons-page {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
