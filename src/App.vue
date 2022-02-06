<template>
  <div id="app">
    <v-app>
      <NavBar />
      <transition>
        <keep-alive>
          <router-view :key="$route.fullPath"></router-view>
        </keep-alive>
      </transition>
    </v-app>
  </div>
</template>

<script>
import NavBar from "@/components/navbar.vue";
export default {
  name: "App",
  components: {NavBar}
};
</script>

<style lang="scss">
@import "./styles/index.scss";
</style>
