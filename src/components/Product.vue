<template>
  <v-card tag="article" class="mb-5" flat @click="cardClick">
    <v-card class="d-flex flex-row mb-0" flat>
      <v-img
        :src="product.image"
        :max-height="dimension"
        :max-width="dimension"
      ></v-img>

      <v-card-actions>
        <v-btn
          outlined
          class="mb-n2 ml-n1 align-self-end"
          depressed
          :small="$vuetify.breakpoint.xsOnly ? false : true"
          right
          color="primary"
          dark
          @click.stop="btnClick"
        >
          <v-icon left>mdi-play</v-icon>Apply Now</v-btn
        >
      </v-card-actions>
    </v-card>

    <!-- <v-card class="d-flex flex-row mb-0" flat>
      <v-avatar :size="$vuetify.breakpoint.xsOnly ? 250 : 125" tile>
        <v-img :src="product.image" class="pa-0" :aspect-ratio="1"></v-img>
      </v-avatar>

      <v-card-actions>
        <v-btn
          outlined
          class="mb-n2 align-self-end"
          depressed
          :small="$vuetify.breakpoint.xsOnly ? false : true"
          right
          color="primary"
          dark
        >
          <v-icon left>mdi-play</v-icon>Apply Now</v-btn
        >
      </v-card-actions>
    </v-card> -->

    <!-- <div class="d-flex flex-no-wrap">
      <v-avatar size="125" tile>
        <v-img :src="product.image"></v-img>
      </v-avatar>
      <div>
        <v-card-actions>
          <v-btn class="ml-2 mt-3" right>Apply Now</v-btn>
        </v-card-actions>
      </div>
    </div> -->

    <!-- //most nice one below -->
    <!-- <v-img :src="product.image"></v-img>
    <v-spacer></v-spacer>
    <v-card-actions right>
      <v-btn color="success" outlined>
        Apply Now
      </v-btn>
    </v-card-actions> -->

    <v-card-text
      class="pa-0 text-subtitle-1"
      v-for="(item, keyName, index) in productDesc"
      :key="index"
    >
      {{ item }}
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: ["product"],
  computed: {
    productDesc: function() {
      let productWithoutImage = Object.assign({}, this.product);
      delete productWithoutImage["image"];
      return productWithoutImage;
    },
    dimension: function() {
      if (this.$vuetify.breakpoint.name === "xs") return "250px";
      else return "150px";
    },
  },
  methods: {
    cardClick() {
      this.$router.push({ path: "card" });
    },
    btnClick() {
      this.$router.push({ path: "button" });
    },
  },
};
</script>
