<template>
  <div class="header">
    <nuxt-link to="/" class="headeroption">
      <img src="~../assets/funda.webp" class="logo">
    </nuxt-link>
  </div>
</template>

<script>
</script>

<style lang='scss'>
.header {
  width: 100%;
  background-color: #f59f01;
  .headeroption {
    display: inline-block;
    font-size: 18px;
    padding: 2px 0px 2px 36px;
    color: white;
    text-decoration: none;
  }
  .logo {
    height: 30px;
    padding-top: 4px;
  }
}
</style>
