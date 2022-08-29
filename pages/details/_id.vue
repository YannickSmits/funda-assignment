<template>
  <div>
    <PageHeader />
    test
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import PageHeader from '~/components/PageHeader.vue'

export default {
  name: 'DetailsPage',
  components: {
    PageHeader
  },
  computed: {
    ...mapState(['houseDetails'])
  },
  async created () {
    console.log('start', this.$route.params.id)
    await this.fetchHouseDetails(this.$route.params.id)
    console.log(this.houseDetails.URL)
  },
  methods: {
    ...mapActions(['fetchHouseDetails'])
  }
}
</script>
