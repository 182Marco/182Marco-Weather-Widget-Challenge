<template>
  <section>
    <div class="cont">
      <div class="wrap slide-left">
        <p>
          {{ (currentWeather.temp - 273.15).toFixed() }}°
          <span class="location"> Tuscany, Italy</span>
        </p>

        <img
          :src="
            `http://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`
          "
          alt="icon"
        />
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'ViewNow',
    props: {
      currentWeather: Object,
    },
    components: {},
    data() {
      return {};
    },
    methods: {},
  };
</script>

<style lang="scss" scoped>
  section {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .cont {
      height: 100%;
      width: 50%;
      position: relative;
      overflow: hidden;
      .wrap {
        position: absolute;
        top: 0;
        left: 0;
        height: 98%;
        width: 100%;
        display: flex;
        justify-content: space-around;
        border-radius: 30px;
        background: #fff;
        p {
          display: inline-flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          font-size: 5rem;
          font-weight: 700;
          .location {
            font-size: 1rem;
            color: rgb(156, 156, 156);
          }
        }
      }
    }
  }

  .slide-left {
    animation: slide-left 0.3s;
  }

  @keyframes slide-left {
    0% {
      left: -100%;
    }
    100% {
      left: 0;
    }
  }
</style>
