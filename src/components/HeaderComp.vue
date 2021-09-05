<template>
  <header>
    <nav>
      <router-link class="wid-link" to="/canyoningToscana">
        Canyoning Toscana</router-link
      >
      <router-link class="wid-link" to="/"> Home</router-link>
    </nav>
  </header>
</template>

<script>
  export default {
    name: 'HeaderComp',
    components: {
      Slider,
    },
  };
</script>

<style lang="scss" scoped>
  nav {
    padding: 40px 30px;
    display: flex;
    .wid-link {
      text-decoration: none;
      color: #3481d0;
      font-weight: 700;
      transition: transform 0.3s;
      &:hover {
        transform: scale(1.03);
      }
    }
  }
</style>
