<template>
  <div>
    <PageHeader />
    <InfoText class="info-text" />
    <InfoDetails class="info-details" />
    <InfoPhotos class="info-photos" />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import PageHeader from '~/components/PageHeader.vue'
import InfoText from '~/components/InfoText.vue'
import InfoDetails from '~/components/InfoDetails.vue'
import InfoPhotos from '~/components/InfoPhotos.vue'

export default {
  name: 'DetailsPage',
  components: {
    PageHeader,
    InfoText,
    InfoDetails,
    InfoPhotos
  },
  computed: {
    ...mapState(['houseDetails'])
  },
  async created () {
    await this.fetchHouseDetails(this.$route.params.id)
    console.log(this.houseDetails.URL)
  },
  methods: {
    ...mapActions(['fetchHouseDetails'])
  }
}
</script>

<style lang='scss'>
</style>
