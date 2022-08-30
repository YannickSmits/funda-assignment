<template>
  <div>
    <PageHeader />
    <div class="title">Search House By ID</div>
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
  .title {
    padding: 24px 0px;
    font-size: 20px;
    font-weight: bold;
  }
  input {
    height: 24px;
    width: 280px;
  }
  button {
    height: 30px;
    width: 120px;
    color: white;
    background-color: #f7a100;
    border: none;
    border-radius: .125em;
    font-weight: 400;
  }
</style>
