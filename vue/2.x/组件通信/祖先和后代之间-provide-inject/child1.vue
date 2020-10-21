<template>
  <div>child1</div>
</template>

<script>
export default {
  inject: ["provideData"],

  mounted() {
    console.log("child1", this.provideData);
  },
};
</script>

<style>
</style>