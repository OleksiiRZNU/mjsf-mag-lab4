<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col">
          <home/>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Home from "./views/home/Home.vue";


export default Vue.extend({
  name: 'App',
  components: {
    Home,
  }
});
</script>

<style>
@import '~bootstrap/dist/css/bootstrap.css';
#app{
  display: block;
}

</style>
