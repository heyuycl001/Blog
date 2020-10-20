<template>
  <Child :parentData="value"></Child>
</template>

<script>
import Child from "./child";
export default {
  data() {
    return {
      value: "parent-data",
    };
  },
  components: {
    Child,
  },
};
</script>

<style>
</style>