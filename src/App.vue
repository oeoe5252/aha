<template>
  <div id="app">
    <!-- [TODO] router-link로 이동하면 뜨는데, 직접 페이지 치면 안나오는 이슈: 블로그 본 거 같은데 다시 카톡 뒤지기 -->
    <div id="sample-nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <router-link to="/styleGuide" style="margin: 10px; font-size; 16px; font-family: Monsterate; color: #ccc;">StyleGuide</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#sample-nav {
  position: fixed;
  bottom: 0;
  right: 0;
}
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }

// #nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
