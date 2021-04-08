<template>
  <div id="main-layout">
        this is pages/index/app.vue
    <main-header></main-header>
  </div>
</template>

<script>
import MainHeader from "@/layouts/main/Header"
import MainContent from "@/layouts/main/Content"
import MainFooter from "@/layouts/main/Footer"

export default {
    name: 'MainLayout',
    components: { MainHeader, MainContent, MainFooter },
}
</script>

<style lang="scss">
</style>
