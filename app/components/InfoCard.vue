<template>
  <div class="card">
    <div class="title" v-html="title" />
    <slot />
  </div>
</template>

<script>
export default {
  name: 'InfoDetails',
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang='scss'>
@import "@/styles/variables.scss";
.card {
  position: relative;
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 0 6px 0 rgba(34,34,34,0.02), 0 4px 8px 0 rgba(34,34,34,0.25);
  margin: $base-size*3 $base-size*9;
  padding: $base-size*3;

  .title {
    font-size: 24px;
    padding-bottom: $base-size*1.5;
  }
}
</style>
