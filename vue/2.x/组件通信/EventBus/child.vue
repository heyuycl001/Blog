<template>
  <div>child</div>
</template>

<script>
export default {
  mounted() {
    this.$EventBus.$on("foo", (val) => {
      console.log(val);
    });
  },
};
</script>

<style>
</style>