<template>
  <!-- <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div> -->
  <v-app id="app">
    <!-- <router-view/> -->
    <template v-if="showMenu">
      <drawer ></drawer>
      <home></home>
    </template>
    <login v-else-if="showLogin"></login>
    <home-new v-else></home-new>
  </v-app>
</template>
<script>
import Home from './components/Home.vue'
import Drawer from './components/Drawer.vue'
import HomeNew from './components/HomeNew.vue'
import Login from './components/Login.vue'
export default {
  components: {
    Home,
    Drawer,
    HomeNew,
    Login
  },
  computed: {
    showMenu() {
      console.log('IME RUTE: ' + this.$route.name);
      return this.$route.name !== 'HomeNew' && this.$route.name !== 'Home' && this.$route.name !== 'Login';
    },
    showLogin() {
      console.log('IME RUTE: ' + this.$route.name);
      return this.$route.name === 'Login';
    }
  }
}
</script>


<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
