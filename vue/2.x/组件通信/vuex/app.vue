<template>
  <div id="app">
    {{ name }}
    <button @click="modifyName('小红小明')"></button>
  </div>
</template> 

<script>
import { mapState, mapActions } from "vuex";

export default {
  computed: {
    ...mapState({
      name: "name",
    }),
  },
  ...mapActions(["modifyName"]),
};
</script>

<style>
</style>