<template>
  <div class="layout--customer-app">
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
html, body{
  width: 100vw;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  overflow-y: auto;
  background-color: #eaeaea !important;
}

#main-content{
  padding: 2rem;
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

</style>
