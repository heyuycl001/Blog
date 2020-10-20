<template>
  <div @click="$emit('childevent', childValue)">
    父组件传来的：{{ parentData }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      childValue: "child-data",
    };
  },
  props: ["parentData"],
  methods: {},
};
</script>

<style>
</style>