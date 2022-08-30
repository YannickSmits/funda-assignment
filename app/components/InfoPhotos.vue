<template>
  <div class="photos">
    <InfoCard :title="title(3)">
      <carousel
        :per-page="2"
        :pagination-size="14"
        pagination-active-color="#f59f01"
      >
        <template
          v-for="(photo, p) in photoList"
        >
          <slide :key="p">
            <img :src="photo" class="photo">
          </slide>
        </template>
      </carousel>
    </InfoCard>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'
import { mapState } from 'vuex'
import InfoCard from './InfoCard.vue'
import titleFunction from './mixins/titleFunction'

export default {
  components: {
    InfoCard,
    Carousel,
    Slide
  },
  mixins: [titleFunction],
  computed: {
    ...mapState(['houseDetails']),
    photoList () {
      if (this.houseDetails['Media-Foto']) {
        const photos = this.houseDetails['Media-Foto'].map(photo => photo.replace('_klein.', '_groot.'))
        return photos
      }
      return ''
    }
  }
}
</script>

<style lang='scss'>
.photo {
  vertical-align: middle;
  width: 100%
}
</style>
