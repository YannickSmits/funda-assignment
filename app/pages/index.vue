<template>
  <div>
    <PageHeader />
    <div class="title">
      Search House By ID
    </div>
    <input v-model="searchId" placeholder="">
    <button @click="searchHouse()">
      Search
    </button>
  </div>
</template>

<script>
import PageHeader from '~/components/PageHeader.vue'

export default {
  name: 'IndexPage',
  components: {
    PageHeader
  },
  data () {
    return {
      searchId: 'cf6ffb70-86de-4077-bd5e-6d7d257eb0ce'
    }
  },
  methods: {
    searchHouse () {
      this.$router.push({ path: `/details/${this.searchId}` })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";
.title {
  padding: $base-size*6 0px;
  font-size: 20px;
  font-weight: bold;
}
input {
  height: 24px;
  width: 280px;
}
button {
  height: $base_size*8;
  width: 120px;
  color: white;
  background-color: $funda-orange;
  border: none;
  border-radius: .125em;
  font-weight: 400;
}
</style>
