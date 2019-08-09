<template>
  <span :class="typeClass">{{type}}</span>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Badge extends Vue {
  @Prop({ default: '', required: true }) private type: string;

  get typeClass() {
    return this.type ? this.type.toLowerCase() : '';
  }
}
</script>

<style lang="scss" scoped>
span {
  background: transparent;
  border-radius: 5px;
  color: #ffffff;
  font-size: 0.8rem;
  padding: 2px 5px;

  & + & {
    margin-left: 5px;
  }
}

.normal {
  background-color: #A8A77A;
}

.fire {
  background-color: #EE8130;
}

.water {
  background-color: #6390F0;
}

.electric {
  background-color: #F7D02C;
}

.grass {
  background-color: #7AC74C;
}

.ice {
  background-color: #96D9D6;
}

.fighting {
  background-color: #C22E28;
}

.poison {
  background-color: #A33EA1;
}

.ground {
  background-color: #E2BF65;
}

.flying {
  background-color: #A98FF3;
}

.psychic {
  background-color: #F95587;
}

.bug {
  background-color: #A6B91A;
}

.rock {
  background-color: #B6A136;
}

.ghost {
  background-color: #735797;
}

.dragon {
  background-color: #6F35FC;
}

.dark {
  background-color: #705746;
}

.steel {
  background-color: #B7B7CE;
}

.fairy {
  background-color: #D685AD;
}
</style>
