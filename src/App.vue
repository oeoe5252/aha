<template>
  <div id="app">
    <div id="sample-nav">
      <router-link to="/" style="margin: 10px; font-size; 16px; font-family: Monsterate; color: #ccc;">HW5</router-link>
      <router-link to="/styleGuide" style="margin: 10px; font-size; 16px; font-family: Monsterate; color: #ccc;">StyleGuide</router-link>
    </div>

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'Index',
}
</script>

<style lang="scss">
#sample-nav {
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 500;
  .router-link-active {
    background-color: red;
  }
}
</style>
