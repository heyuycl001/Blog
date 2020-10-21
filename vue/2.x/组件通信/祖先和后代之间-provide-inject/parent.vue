<template>
  <div id="app">
    <Child></Child>
  </div>
</template>

<script>
import Child from "./components/child";

export default {
  name: "App",
  provide() {
    return {
      provideData: this.value,
    };
  },
  data() {
    return {
      value: "app",
    };
  },
  components: {
    Child,
  },
};
</script>

<style>
</style>