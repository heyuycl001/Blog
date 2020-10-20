<template>
  <div>
    <Child :parentData="value" @childevent="childEvent"></Child>
    <div>子组件传来的：{{ childData }}</div>
  </div>
</template>

<script>
import Child from "./components/child";
export default {
  data() {
    return {
      value: "parent-data",
      childData: null,
    };
  },
  methods: {
    childEvent(e) {
      this.childData = e;
    },
  },
};
</script>

<style>
</style>