<template>
  <v-app>
    <top-nav />
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import TopNav from "./components/TopNav.vue";
export default {
  name: "App",

  components: { TopNav },

  data: () => ({
    //
  }),
};
</script>
