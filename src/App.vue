<template>
  <div class="layout--customer-app primary-color secondary-color">
    <NavBar />
    <router-view />
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'

export default {
  name: 'Home',
  components: {
    NavBar,
  }
}
</script>

<style>
.primary-color {
  color: black !important;
}

.secondary-color {
  background-color: purple !important;
}

html, body{
  width: 100vw;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  overflow-y: auto;
}

#main-content{
  padding: 2rem;
}

main {
  width: 100%;
  height: 100vh;
  overflow-y: auto;
}

.layout--customer-app{
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto;
  /* display: flex;
  flex-direction: column; */
}

a {
  color: unset !important;
  text-decoration: unset !important;
}

.card {
  border-radius: 10px !important;
  box-shadow: 0 0 0.5rem 0.2rem #bbb !important;
}

.icon {
    min-width: 2em;
    max-width: 2em;
    cursor: pointer;
}

.fontIcon {
  font-size: 1.5rem;
  text-align:center;
}

.iconRobot {
    min-width: 2em;
    max-width: 2em;
    margin-left: -4px;
    cursor: pointer;
}

.with-arrow{
    position: relative;
}

.with-arrow::after{
    content: '';
    width: 0.85em;
    height: 0.85em;
    top: 50%;
    position: absolute;
    border-top: solid 0.15em #000;
    border-right: solid 0.15em #000;
    transform: translateY(-50%);
}

.with-arrow--right::after{
    right: 1em;
    transform: translateY(-50%) rotate(45deg);
}
</style>
