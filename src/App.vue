<template>
  <div id="app">
    <div
      :id="'content'"
      :class="'mx-8'"
    >
      <HelloWorld msg="Welcome to Your Vue.js App"/>
      <router-view
          :key="$route.fullPath"
      ></router-view>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/Main.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  },
  mounted() {
    if(document.getElementById('app')) {
      this.$store.dispatch('auth/fetchAuthUser', '12345');
    }
  }
}
</script>

<style lang="scss">
  @import './sass/app.scss';
  #app {
    min-height: 100%;
  }
  #content {
    bottom: auto;
    left: 200px;
    position: absolute;
    right: 0;
    top: 64px;
    margin-bottom: 30px;
    max-width: 925px;
  }
</style>}
