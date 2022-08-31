<template>
  <div class="details">
    <InfoCard :title="title(2)">
      <div class="details-price">
        <span class="details-price__name">Prijs</span>
        <span class="details-price__value" v-html="housePrice" />
      </div>
      <div class="divider" />
      <div class="details-characteristics">
        <div
          v-for="(detail, d) in houseCharacteristics"
          :key="d"
          class="details-characteristics-line"
        >
          <span class="details-characteristics__name" v-html="detail.name" />
          <span class="details-characteristics__value" v-html="detail.value" />
          <div class="divider" />
        </div>
      </div>
    </InfoCard>
  </div>
</template>

<script lang='ts'>
import { mapState } from 'vuex'
import InfoCard from './InfoCard.vue'
import titleFunction from './mixins/titleFunction'

export default {
  name: 'InfoDetails',
  components: {
    InfoCard
  },
  mixins: [titleFunction],
  computed: {
    ...mapState(['houseDetails']),
    housePrice () {
      // Could be improved by optional chaining but it is not allowed by NuxtJS
      if (this.houseDetails.Prijs) {
        return this.houseDetails.Prijs.Koopprijs || ''
      }
      return ''
    },
    houseCharacteristics () {
      if (this.houseDetails.KenmerkenKort) {
        return this.houseDetails.KenmerkenKort.Kenmerken.map(d => ({
          name: d.Naam,
          value: d.Waarde
        }))
      }
      return ''
    }
  }
}
</script>

<style lang='scss'>
@import "@/styles/variables.scss";
.details {
  .divider {
    height: 1px;
    width: 100%;
    background: #999;
    margin: $base-size*3 0px;
  }
  .details-price {
    font-size: 20px;
    padding: $base-size*4 0px;
    font-weight: 600;
    .details-price__name {
      color: $light-grey;
      padding-right: $base-size*3;
    }
  }
  .details-characteristics-line {
    font-size: 16px;
    .details-characteristics__name {
      color: $light-grey;
      font-weight: 800;
      padding-right: $base-size*3;
    }
  }
}
</style>
