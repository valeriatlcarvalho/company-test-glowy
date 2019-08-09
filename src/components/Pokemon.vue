<template>
  <div class="pokemon-card" :class="frontHidden ? 'flip-container flip' : 'flip-container'">
    <div class="pokemon-card-front" @click="openDetails()">
      <div class="pokemon-card-front-content">
        <img :src="`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokemon.number}.png`" />
        <div class="pokemon-card-front-effect pokemon-card-front-effect-first-layer"></div>
        <div class="pokemon-card-front-effect pokemon-card-front-effect-second-layer"></div>
      </div>
      <div class="pokemon-card-front-footer">
        <div class="pokemon-card-front-footer-tab">
          <strong class="pokemon-card-front-footer-tab-number">#{{pokemon.number}}</strong>
        </div>
        <strong class="pokemon-card-front-footer-name">{{pokemon.name}}</strong>
        <div class="pokemon-card-front-footer-types">
          <Badge
            v-for="type in pokemon.types"
            :key="`${pokemon.id}-${type}`"
            :type="type"
          ></Badge>
        </div>
      </div>
    </div>

    <div class="pokemon-card-back">
      <div class="pokemon-card-back-info">
        <div class="pokemon-card-back-info-box">
          <span class="pokemon-card-back-info-box-label">MAX HP</span>
          <span class="pokemon-card-back-info-box-value">{{pokemon.maxHP}}</span>
        </div>
        <div class="pokemon-card-back-info-box">
          <span class="pokemon-card-back-info-box-label">MAX CP</span>
          <span class="pokemon-card-back-info-box-value">{{pokemon.maxCP}}</span>
        </div>
      </div>

      <div class="pokemon-card-back-attack">
        <h2 class="pokemon-card-back-attack-header-title">Fast Attacks</h2>
        <table class="pokemon-card-back-attack-table">
          <tr>
            <th align="left">Attack</th>
            <th>Type</th>
            <th>Power</th>
          </tr>
          <tr
            v-for="attack in pokemon.attacks.fast"
            :key="attack"
          >
            <td align="left">{{attack.name}}</td>
            <td>
              <Badge
                v-for="type in attack.types"
                :key="`${attack.name}-${type}`"
                :type="type"
              ></Badge>
            </td>
            <td>{{attack.damage}}</td>
          </tr>
        </table>
      </div>
      <div class="pokemon-card-back-attack">
        <h2 class="pokemon-card-back-attack-header-title">Special Attacks</h2>
        <table class="pokemon-card-back-attack-table">
          <tr>
            <th align="left">Attack</th>
            <th>Type</th>
            <th>Power</th>
          </tr>
          <tr
            v-for="attack in pokemon.attacks.special"
            :key="attack"
          >
            <td align="left">{{attack.name}}</td>
            <td>
              <Badge
                v-for="type in attack.types"
                :key="`${attack.name}-${type}`"
                :type="type"
              ></Badge>
            </td>
            <td>{{attack.damage}}</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import gql from 'graphql-tag';

import Badge from './Badge.vue';


// const QUERY_DETAIL = gql`{
//   query SearchByPokemon($id: id!, $name: name!) {
//     pokemon(id: $id, name: $name) {
//       maxHP
//       maxCP
//       attacks {
//         fast {
//           name
//           type
//           damage
//         }
//         special {
//           name
//           type
//           damage
//         }
//       }
//     }
//   }
// }`;

export default Vue.extend({
  components: {
    Badge,
  },
  props: {
    pokemon: {
      type: Object,
      required: true,
      default: {},
    },
    details: {
      type: Object,
      default: {},
    },
    frontHidden: {
      type: Boolean,
      default: false,
    },
  },
  // apollo: {
  //   details: {
  //     query: QUERY_DETAIL,
  //     variables: {
  //       "id": this.pokemon.id,
  //       "name": this.pokemon.name,
  //     }
  //   },
  // },
  methods: {
    openDetails() {
      this.frontHidden = true;
    },
  }
});
</script>

<style lang="scss" scoped>
$card-width: 280px;
$card-height: 400px;

.pokemon-card {
  display: flex;
  height: $card-height;
  margin: 15px;
  position: relative;
  width: $card-width;

  img {
    max-height: 85%;
    max-width: 100%;
  }

  &-front {
    background-image: radial-gradient(#ffffff, #dcdcdc);
    border: solid 1px #ccc;
    border-radius: 5px;
    height: $card-height;
    transform: rotateY(0deg);
    width: $card-width;
    z-index: 2;

    &-content {
      height: 303px;
    }

    &-effect {
      left: 0;
      position: absolute;
      top: 0;
      width: 100%;

      &-first-layer {
        background-image: linear-gradient(136deg, rgba(255, 255, 255, 0.3) 15px, rgba(255, 255, 255, 0.3) 30px, rgba(255, 255, 255, 0.3) 65px, transparent 65px);
        height: 100%;
        width: 100%;
      }

      &-second-layer {
        background-image: linear-gradient(136deg, transparent, rgba(255, 255, 255, 0.3) 30px, rgba(255, 255, 255, 0.3) 80px, transparent 80px);
        height: 100%;
        width: 100%;
      }
    }

    &-footer {
      align-items: flex-start;
      background-color: #ffffff;
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;
      display: flex;
      flex-direction: column;
      max-height: 100px;
      justify-content: start;
      padding: 20px;
      position: relative;

      &-tab {
        align-items: center;
        align-self: center;
        background: #ffffff;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        display: flex;
        height: 40px;
        justify-content: center;
        position: absolute;
        top: -30px;
        width: 120px;

        &-number {
          line-height: 1;
          font-size: 1.3rem;
          font-family: 'Ubuntu', sans-serif;
        }
      }

      &-name {
        line-height: 1.5;
        font-size: 1.3rem;
        font-family: 'Ubuntu', sans-serif;
      }

      &-types {
        align-items: flex-start;
        display: flex;
        height: auto;
        justify-content: flex-start;
      }
    }
  }

  &-back {
    background-image: radial-gradient(#ffffff, #dcdcdc);
    border: solid 1px #ccc;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    height: $card-height;
    transform: rotateY(180deg);
    width: $card-width;

    &-info {
      display: flex;
      padding: 20px;

      &-box {
        background: #efefef;
        border: solid 1px #cccccc;
        display: flex;
        flex: 1;
        flex-direction: column;
        padding: 5px;

        & + & {
          margin-left: 15px;
        }

        &-label {
          color: #adadad;
          display: flex;
          font-size: 0.9rem;
          font-weight: bold;
          justify-self: flex-start;
          text-transform: uppercase;
        }

        &-value {
          font-family: 'Ubuntu', sans-serif;
          font-size: 1.6rem;
          font-weight: bold;
          line-height: 1.1;
          margin-top: 5px;
        }
      }
    }

    &-attack {
      padding: 0 20px 20px;

      &-header-title {
        font-family: 'Ubuntu', sans-serif;
        font-size: 1.3rem;
        line-height: 1;
        text-align: left;
      }

      &-table {
        width: 100%;

        th {
          font-family: 'Ubuntu', sans-serif;
          font-size: 1rem;
          line-height: 1;
        }
      }
    }
  }

  &-front, &-back {
    backface-visibility: hidden;
    left: 0;
    position: absolute;
    top: 0;
    transition: 0.6s;
    transform-style: preserve-3d;
  }

  &:hover {
    background-image: radial-gradient(#ffffff, #e8e8e8);
    margin-top: 12px;
    transition: margin-top 0.3s ease;

    .pokemon-card-front-effect {
      &-first-layer {
        background-image: linear-gradient(136deg, rgba(255, 255, 255, 0.3) 5px, rgba(255, 255, 255, 0.3) 30px, rgba(255, 255, 255, 0.3) 90px, transparent 90px);
        transition: background 0.8s linear;
      }

      &-second-layer {
        background-image: linear-gradient(136deg, transparent 10px, rgba(255, 255, 255, 0.3) 30px, rgba(255, 255, 255, 0.3) 110px, transparent 110px);
        transition: background 0.8s linear;
      }
    }
  }
}

.flip-container {
  perspective: 1000;
  transform-style: preserve-3d;
}

.flipper {
  transition: 0.6s;
  transform-style: preserve-3d;
  position: relative;
}

.flip {
  transform: rotateY(180deg);
}
</style>
