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
  components: {
    InfoCard
  },
  mixins: [titleFunction],
  data () {
    return {
    }
  },
  computed: {
    ...mapState(['houseDetails']),
    housePrice () {
      if (this.houseDetails.Prijs) {
        return this.houseDetails.Prijs.Koopprijs || ''
      }
      return ''
    },
    houseCharacteristics () {
      if (this.houseDetails.KenmerkenKort) {
        const details = this.houseDetails.KenmerkenKort.Kenmerken.map(d => ({
          name: d.Naam,
          value: d.Waarde
        }))
        console.log(details)
        return details
      }
      return ''
    }
  },
  created () {
    console.log(0, this.houseDetails)
  }
}
</script>

<style lang='scss'>
.details {
  .divider {
    height: 1px;
    width: 100%;
    background: #999;
    margin: 12px 0px;
  }
  .details-price {
    font-size: 20px;
    padding: 16px 0px;
    font-weight: 600;
    .details-price__name {
      color: #888;
      padding-right: 12px;
    }
  }
  .details-characteristics-line {
    font-size: 16px;
    .details-characteristics__name {
      color: #888;
      font-weight: 800;
      padding-right: 12px;
    }
  }
}
</style>
