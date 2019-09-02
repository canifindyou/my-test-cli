<template>
  <div id="app">
    <Head/>
    <router-view/>
  </div>
</template>

<script>
import Head from "../src/components/head"
export default {
  name: 'App',
  components:{
    Head
  }
}
</script>

<style>
#app{
  width: 100%;
  height: 100%;
}
html,body{
  height: 100%;
  min-width: 400px;
  /* width:100% */
}
*{
  padding: 0;
  margin: 0;
}
</style>
