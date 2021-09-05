<template>
  <div
    class="slider"
    tabindex="0"
    ref="root"
    @keyup.left="prev"
    @keyup.right="next"
  >
    <ViewNow
      v-if="results.current"
      v-show="i === 1"
      :currentWeather="results.current"
    />
    <ViewNextHours
      v-if="results.current"
      v-show="i === 2"
      :currentWeather="results.hourly"
    />
    <ViewNextDays
      v-if="results.current"
      v-show="i === 3"
      :currentWeather="results.daily"
    />
    <div class="circle-wrap">
      <div
        v-for="n in 3"
        :key="`_${n}`"
        class="circle"
        :class="{ active: n == i }"
        @click="i = n"
      ></div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import ViewNow from './ViewNow';
  import ViewNextHours from './ViewNextHours';
  import ViewNextDays from './ViewNextDays';

  export default {
    name: 'Slider',
    components: {
      ViewNow,
      ViewNextHours,
      ViewNextDays,
    },
    data() {
      return {
        //   SLIDER DATA
        i: 1,
        intId: 0,
        loopTime: 2000,
        //    API DATA
        apikey: 'c278145521e28b7e1be24fa8cffdc7eb',
        lat: '44.03',
        lon: '10.66',
        results: {},
      };
    },
    created() {
      this.callWheaterApi(this.apikey, this.lat, this.lon);
    },
    methods: {
      next() {
        this.i === 3 ? (this.i = 1) : this.i++;
      },
      prev() {
        this.i === 1 ? (this.i = 3) : this.i--;
      },
      //   APICALL
      callWheaterApi(key, lat, lon) {
        axios
          .get(
            `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${key}`
          )
          .then(r => (this.results = r.data))
          .catch(er => console.log(er));
      },
    },
  };
</script>

<style lang="scss" scoped>
  .slider {
    position: relative;
    height: 28vh;
    position: relative;
    background-color: #f6f6f6;
    .slider:focus {
      outline: none;
    }
    .circle-wrap {
      position: absolute;
      left: 50%;
      top: 85%;
      transform: translateX(-50%);
      height: 10px;
      margin: 0 auto;
      width: 45px;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      &:focus,
      &:hover {
        border: none;
        outline: none;
      }
      .circle {
        width: 8px;
        height: 8px;
        border: 1px solid #2c3e50;
        border-radius: 50%;
        cursor: pointer;
        &.active {
          background-color: #2c3e50;
        }
      }
    }
  }
</style>
