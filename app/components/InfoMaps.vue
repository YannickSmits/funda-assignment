<template>
  <div class="maps">
    <InfoCard :title="title(6)">
      <div id="map-wrap" style="height: 50vh" class="map">
        <no-ssr>
          <l-map :zoom="13" :center="calculatedLonLat">
            <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png" />
            <l-marker :lat-lng="calculatedLonLat" />
          </l-map>
        </no-ssr>
      </div>
    </InfoCard>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import InfoCard from './InfoCard.vue'
import titleFunction from './mixins/titleFunction'

export default {
  name: 'InfoMaps',
  components: {
    InfoCard
  },
  mixins: [titleFunction],
  data () {
    return {
      defaultCoordinates: [52.3771842688297, 4.919207941116205]
    }
  },
  computed: {
    ...mapState(['houseDetails', 'houseLocation']),
    calculatedLonLat () {
      if (this.houseLocation.lat) {
        return [this.houseLocation.lat, this.houseLocation.lng]
      }
      return this.defaultCoordinates
    }
  }
}
</script>

<style lang='scss'>
.map {
  padding: 10% 10%;
}
</style>
