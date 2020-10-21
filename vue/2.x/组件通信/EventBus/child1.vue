<template>
  <div>child1</div>
</template>

<script>
export default {
  mounted() {
    this.$parent.$emit("foo", "这是我给兄弟传过去的");
  },
};
</script>

<style>
</style>