<template>
  <div >
    <l-map :zoom="zoom" :center="center" style="height: 100%; width: 100%">
        <div class="container">
            <div class="row h-100 justify-content-center">
                <div class="col-auto col-md-12 col-sm-12 my-3">
                    <h1 class="card-title text-center text-color">Restaurant map</h1>
                </div>
            </div>
        </div>
      <l-tile-layer
        :url="LTileLayer"
        :attribution="attribution"
        :options="options"
      />
      <l-circle @click="showAlert"
          :lat-lng="circle.center"
          :radius="circle.radius"
          :color="circle.color"
      />
    </l-map>
  </div>
</template>

<script>
import { LMap, LTileLayer, LCircle } from "vue2-leaflet";
import RobotService from '@/services/RobotService';

export default {
  name: "Example",
  components: {
    LMap,
    LTileLayer,
    LCircle
  },
  data() {
    return {
      robots: [],
      zoom: 2,
       attribution:
        '',
      options: {
        minZoom: 0,
        maxZoom: 2,
        continuousWorld: false,
        noWrap: true
      },
      center: [51.44000, 5.480],
      LTileLayer: ('maps/custom_map/{z}/{x}/{y}.png'),
      circle: {
        center: [51.44000, -50.480],
        radius: 400000,
        color: 'red',
      }
    };
  },
  methods: {
    showAlert() {
      alert("Robot id = " + this.$data.robots[0].id + "\n" +
        "Robot name = " + this.$data.robots[0].name + "\n" +
        "Robot battery = " + this.$data.robots[0].battery + "%"
      );
    },

    async getAllRobots() {
        this.$data.robots = await RobotService.getAll();
    },
  },

  mounted: function() {
      this.getAllRobots();
  }
}
</script>

<style>
  .example-custom-control {
    background: #fff;
    padding: 0 0.5em;
    border: 1px solid #aaa;
    border-radius: 0.1em;
  }
</style>
