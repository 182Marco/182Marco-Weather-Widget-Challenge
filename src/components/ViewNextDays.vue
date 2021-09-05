<template>
  <section>
    <div class="cont">
      <div class="wrap slide-left">
        <div v-for="(obj, i) in next5Days" :key="i">
          <span class="temp">{{ (obj.temp.day - 273.15).toFixed() }}° </span>
          <img
            :src="
              `http://openweathermap.org/img/wn/${obj.weather[0].icon}@2x.png`
            "
            alt="icon"
          />
          <span>{{ days[(dayNow + i + 1) % 7] }} </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'ViewNextDays',
    props: {
      currentWeather: Array,
    },
    components: {},
    data() {
      return {
        dayNow: 0,
        days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      };
    },
    created() {
      this.justSomeDays(5);
      this.getdayNow();
    },
    methods: {
      justSomeDays(n) {
        this.next5Days = this.currentWeather.filter((e, i) => i < n);
      },
      getdayNow() {
        const d = new Date();
        this.dayNow = parseInt(d.getDay());
      },
    },
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
      width: 40%;
      position: relative;
      overflow: hidden;
      .wrap {
        position: absolute;
        top: 0;
        left: 0;
        height: 98%;
        width: 99%;
        display: flex;
        justify-content: space-between;
        border-radius: 30px;
        background: #fff;
        span {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 1rem;
          font-weight: 700;
          &.temp {
            margin-top: 15px;
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
