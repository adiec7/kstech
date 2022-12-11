<template>
  <div id="app">
    <router-view name="header" />
    <router-view />
    <router-view name="footer" />
    <back-to-top text="Top"></back-to-top>
  </div>
</template>
<script>
export default {
  components: {},
};
</script>
<style lang="scss">
body {
  scroll-behavior: smooth;
  overflow: hidden;
}
#app {
  font-family: "Raleway", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

@media (max-width: 600px) {
  body {
    overflow: auto;
  }
}
</style>
