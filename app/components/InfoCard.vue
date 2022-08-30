<template>
  <div class="card">
    <div class="title">
      {{ title }}
    </div>
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang='scss'>
.card {
    position: relative;
    background-color: white;
    border-radius: 4px;
    box-shadow: 0 0 6px 0 rgba(34,34,34,0.02), 0 4px 8px 0 rgba(34,34,34,0.25);
    margin: 12px 36px;
    padding: 12px;

    .title {
      font-size: 24px;
      padding-bottom: 6px;
    }
}
</style>
