<template>
  <Child ref="myChild"></Child>
</template>

<script>
import Child from "./child";
export default {
  components: {
    Child,
  },
  mounted() {
    console.log(this.$refs.myChild.childValue);
  },
};
</script>

<style>
</style>