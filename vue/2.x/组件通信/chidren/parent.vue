<template>
  <Child></Child>
</template>

<script>
import Child from "./components/child";

export default {
  mounted() {
    console.log(this.$children[0].childValue);
    this.$children[0].childValue = "父亲修改的";
  },
  components: {
    Child,
  },
};
</script>

<style>
</style>