<template>
  <div>子组件：{{ parentData }}</div>
</template>

<script>
export default {
  props: ["parentData"],
};
</script>

<style>
</style>