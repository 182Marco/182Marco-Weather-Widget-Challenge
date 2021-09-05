<template>
  <div class="app">
    <header>
      <nav>
        <router-link class="wid-link" to="/canyoningToscana">
          Canyoning Toscana</router-link
        >
        <router-link class="wid-link" to="/"> Home</router-link>
      </nav>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'App',
    components: {},
  };
</script>

<style lang="scss">
  .app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    height: 100vh;
    background-color: #f6f6f6;
    margin-top: 60px;
    margin: 0;
    padding: 0;
    nav {
      padding: 40px 30px;
      display: flex;
      .wid-link {
        text-decoration: none;
        color: #3481d0;
        font-weight: 700;
        transition: transform 0.3s;
        margin-left: 50px;
        &.router-link-exact-active {
          text-decoration: underline;
        }
        &:hover {
          transform: scale(1.03);
        }
      }
    }
  }
</style>
