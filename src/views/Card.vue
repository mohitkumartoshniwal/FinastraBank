<template>
  <div class="card">
    <h1>This is card page</h1>
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
