<template>
  <div class='PageTItle'>
    <div class="vertical"></div>
    {{title}}
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';

export default {
  name: 'PageTItle',
  data () {
    // 这里存放数据
    return {
      title: null
    }
  },
  // 监控data中的数据变化
  watch: {
    $route: {
      handler (to) {
        this.title = this.$route.meta.title
      },
      immediate: true
    }
  }
}
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
.PageTItle {
  width: 100%;
  height: 50px;
  display: flex;
  background-color: #fff;
  line-height: 50px;
  margin-top: 5px;
  padding: 0 20px;
  box-sizing: border-box;
  .vertical {
    width: 5px;
    height: 20px;
    background-color: rgba(40, 151, 255, 1);
    margin: 15px 15px 0 0;
  }
}
</style>
