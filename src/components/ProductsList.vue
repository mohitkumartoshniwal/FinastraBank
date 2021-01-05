<template>
  <v-container class="mt-5" tag="section">
    <v-row>
      <v-col>
        <h2 class="ml-11">
          {{ typeOfProduct }}
        </h2>
      </v-col>
    </v-row>
    <v-row class="ml-10 mt-5 d-flex flex-row">
      <v-col sm6 v-for="(product, i) in listOfProducts" :key="i">
        <product :product="product" :i="i" />
      </v-col>
    </v-row>
    <!-- <v-row justify="center">
      <v-col md="12" lg="12">
        <h2>
          {{ typeOfProduct }}
        </h2>
      </v-col>
    </v-row>

    <v-row>
      <v-col md="12" lg="12">
        <v-row>
          <v-col md="4" lg="4" v-for="(product, i) in listOfProducts" :key="i">
            <product :product="product" :i="i" />
          </v-col>
        </v-row>
      </v-col>
    </v-row> -->
  </v-container>
</template>
<script>
import Product from "./Product.vue";
export default {
  components: { Product },
  data() {
    return {};
  },
  props: {
    listOfProducts: Array,
    typeOfProduct: String,
  },
};
</script>

<style scoped></style>
