<template>
  <div>
    <PageHeader />
    <p>Search House By ID</p>
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
  input {
    height: 18px;
    width: 280px;
  }
</style>
