<template>
  <div>
    <products-list
      v-for="(product, key, index) in products"
      :key="index"
      :listOfProducts="product"
      :typeOfProduct="productType(index)"
    >
    </products-list>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
import ProductsList from "../components/ProductsList.vue";
export default {
  name: "Home",
  data() {
    return {
      products: [],
      typesOfProducts: ["Savings Account", "Fixed Deposits"],
    };
  },
  components: { ProductsList },
  mounted() {
    axios
      .get("../data/data.json")
      .then((res) => {
        this.products = res.data;
      })
      .catch(console.log);
  },
  methods: {
    productType: function(index) {
      return this.typesOfProducts[index];
    },
  },
};
</script>
