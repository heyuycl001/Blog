<template>
  <!-- <div @click="$emit('childevent',childValue)">父组件传来的：{{ parentData }}</div>  -->
  <div>
    child
    <Child1></Child1>
  </div>
</template>

<script>
import Child1 from "./child1";
export default {
  inject: ["provideData"],
  data() {
    return {};
  },
  mounted() {
    console.log("child", this.provideData);
  },
  methods: {},
  components: {
    Child1,
  },
};
</script>

<style>
</style>