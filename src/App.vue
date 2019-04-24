<template>
  <div id="app">
    <NavigationSide class="nav-side"></NavigationSide>
    <div
      :id="'content'"
      :class="'mx-8'"
    >
      <NavigationTop class="nav-top"></NavigationTop>
      <router-view
          :key="$route.fullPath"
      ></router-view>
    </div>
  </div>
</template>

<script>
import NavigationTop from './components/navigation/NavigationTop.vue';
import NavigationSide from './components/navigation/NavigationSide.vue';

export default {
  name: 'app',
  components: {
    NavigationTop,
    NavigationSide,
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
    max-width: 950px;
  }
  .nav-top {
    position: fixed;
    top: 0;
    left: 200px;
    width: 100%;
  }
  .nav-side {
    position: fixed;
    height: 100vh;
    width: 200px;
  }
</style>}
