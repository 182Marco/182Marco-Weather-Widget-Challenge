<template>
  <section>
    <div class="cont">
      <div class="wrap slide-left">
        <div class="box" v-for="(obj, i) in next5Hours" :key="i">
          <span class="temp">{{ (obj.temp - 273.15).toFixed() }}° </span>
          <img
            :src="
              `http://openweathermap.org/img/wn/${obj.weather[0].icon}@2x.png`
            "
            alt="icon"
          />
          <span>{{ (hoursNow + i + 1) % 12 }}:00 </span>
          <span v-if="hoursNow + i + 1 < 13">AM</span>
          <span v-if="hoursNow + i + 1 > 12">PM</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'ViewNextHours',
    props: {
      currentWeather: Array,
    },
    components: {},
    data() {
      return {
        next5Hours: [],
        hoursNow: 0,
      };
    },
    created() {
      this.justSomeHours(5);
      this.gethoursNow();
    },
    methods: {
      justSomeHours(n) {
        this.next5Hours = this.currentWeather.filter((e, i) => i < n);
      },
      gethoursNow() {
        const d = new Date();
        this.hoursNow = parseInt(d.getHours());
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
        .box {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          height: 82%;
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
