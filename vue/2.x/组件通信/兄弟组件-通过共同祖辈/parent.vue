<template>
  <div id="app">
    <Child></Child>
    <Child1></Child1>
  </div>
</template>

<script>
import Child from "./components/child";
import Child1 from "./components/child1";

export default {
  name: "App",
  components: {
    Child,
    Child1,
  },
};
</script>

<style>
</style>