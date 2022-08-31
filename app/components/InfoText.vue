<template>
  <div class="information">
    <InfoCard :title="title(0)">
      <v-clamp autoresize :max-lines="5">
        {{ information }}
        <template #after="{ toggle, clamped, expanded }">
          <span
            v-if="clamped || expanded"
            class="read-text"
          >
            <a @click="toggle"> {{ clamped ? "meer" : "minder" }} </a>
          </span>
        </template>
      </v-clamp>
    </InfoCard>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import VClamp from 'vue-clamp'
import InfoCard from './InfoCard.vue'
import titleFunction from './mixins/titleFunction'

export default {
  name: 'InfoText',
  components: {
    VClamp,
    InfoCard
  },
  mixins: [titleFunction],
  computed: {
    ...mapState(['houseDetails']),
    information () {
      return this.houseDetails.VolledigeOmschrijving ? this.houseDetails.VolledigeOmschrijving : ''
    }
  }
}
</script>

<style lang='scss'>
@import "@/styles/variables.scss";
.information {
  font-size: 16px;
  .read-text {
    display: inline-block;
    text-align: center;
    cursor: pointer;
    color: #00716b;
    text-decoration: underline;
    padding-left: $base-size*2;
    &:hover {
      color: #37aba1;
      text-decoration-color: #37aba1;
    }
  }
}
</style>
