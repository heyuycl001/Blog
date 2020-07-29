<template>
  <div id="app">
    <!-- <router-view /> -->
    <el-button @click="get">get请求</el-button>
    <el-button @click="post">post请求</el-button>
    <el-button @click="myDelete">delete请求</el-button>
    <el-button @click="put">put</el-button>

    <div class="requestMethod">方式：{{method}}</div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      method: ''
    }
  },
  components: {},
  created () { },
  methods: {
    get () {
      this.$http.$get({ name: 1 })
        .then((res) => {
          console.log(res)
          this.method = res.custom
        })
    },
    post () {
      this.$http.$post({ age: 15 })
        .then((res) => {
          this.method = res.custom
        })
    },
    myDelete () {
      this.$http.$delete(20)
        .then((res) => {
          this.method = res.custom
        })
    },
    put () {
      this.$http.$put({ tag: 'name' })
        .then((res) => {
          this.method = res.custom
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.requestMethod {
  margin-top: 30px;
}
</style>
