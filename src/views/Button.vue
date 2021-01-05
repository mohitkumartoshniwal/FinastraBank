<template>
  <div class="button">
    <h1>This is apply button page</h1>
    <a @click.stop="goBack">Go back</a>
  </div>
</template>
<script>
export default {
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>
