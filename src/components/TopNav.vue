<template>
  <nav>
    <v-app-bar app color="primary" dark>
      <div class="d-flex mx-n8">
        <v-img
          alt="FinastraBank Logo"
          :height="height"
          width="200px"
          src="../assets/finastraLogo.png"
          contain
        />
      </div>

      <v-spacer></v-spacer>
      <v-menu bottom left v-if="$vuetify.breakpoint.smAndDown">
        <template v-slot:activator="{ on, attrs }">
          <v-btn dark icon v-bind="attrs" v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item v-for="(link, i) in links" :key="i" :to="link.to">
            <v-list-item-title>{{ link.text }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <div v-else>
        <v-btn v-for="link in links" :key="link.to" :to="link.to" text>
          <span class="mr-2">{{ link.text }}</span>
        </v-btn>
      </div>
    </v-app-bar>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      links: [
        { to: "about", text: "About Us" },
        { to: "products", text: "Products" },
        { to: "newsroom", text: "Newsroom" },
        { to: "contact", text: "Contact Us" },
      ],
    };
  },
  computed: {
    height: function() {
      let breakpoint = this.$vuetify.breakpoint.name;
      if (breakpoint === "xs" || breakpoint === "sm") {
        return "56px";
      } else return "64px";
    },
  },
};
</script>
