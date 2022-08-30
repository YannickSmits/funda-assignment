<template>
  <div>
    <PageHeader />
    <InfoText class="info-text" />
    <InfoDetails class="info-details" />
    <InfoPhotos class="info-photos" />
    <InfoMaps class="info-maps" />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import PageHeader from '~/components/PageHeader.vue'
import InfoText from '~/components/InfoText.vue'
import InfoDetails from '~/components/InfoDetails.vue'
import InfoPhotos from '~/components/InfoPhotos.vue'
import InfoMaps from '~/components/InfoMaps.vue'

export default {
  name: 'DetailsPage',
  components: {
    PageHeader,
    InfoText,
    InfoDetails,
    InfoPhotos,
    InfoMaps
  },
  computed: {
    ...mapState(['houseDetails'])
  },
  async created () {
    await this.fetchHouseDetails(this.$route.params.id)
    await this.fetchHouseLocation(this.houseDetails)
  },
  methods: {
    ...mapActions(['fetchHouseDetails', 'fetchHouseLocation'])
  }
}
</script>

<style lang='scss'>
</style>
