<!--<template>
  <l-map style="height: 350px" :zoom="zoom" :center="center">
  <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
    <l-circle
          :lat-lng="circle.center"
          :radius="circle.radius"
          :color="circle.color"
      />
  </l-map>
</template>

<script>
import {LMap, LTileLayer, LCircle} from 'vue2-leaflet';

export default {
  components: {
    LMap,
    LTileLayer,
    LCircle
  },
  data () {
    return {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution:
        '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      zoom: 4,
      center: [51.44000, 5.480],
      circle: {
        center: [51.44000, 5.480],
        radius: 4500,
        color: 'red'
      }
    };
  }
}
</script> -->
<template>

  <div >
    <l-map
      :zoom="zoom"
      :center="center"
      style="height: 500px; width: 100%"
    >
      <l-tile-layer
        :url="url"
        :attribution="attribution"
      />
      <l-circle
          :lat-lng="circle.center"
          :radius="circle.radius"
          :color="circle.color"
      />
      <l-control class="example-custom-control">
        <p @click="showAlert">
          Click me
        </p>
      </l-control>
    </l-map>
  </div>
</template>

<script>
import { LMap, LTileLayer, LControl, LCircle } from "vue2-leaflet";

export default {
  name: "Example",
  components: {
    LMap,
    LTileLayer,
    LControl,
    LCircle
  },
  data() {
    return {
      zoom: 3,
      center: [51.44000, 5.480],
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      circle: {
        center: [51.44000, 5.480],
        radius: 4500,
        color: 'red'
      }
    };
  },
  methods: {
    showAlert() {
      alert("Click!");
    }
  }
};
</script>

<style>
.example-custom-control {
  background: #fff;
  padding: 0 0.5em;
  border: 1px solid #aaa;
  border-radius: 0.1em;
}

</style>