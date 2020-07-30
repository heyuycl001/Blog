<template>
  <div class='Header'>
    <span>营销管理后台</span>
    <div class="headerRight">
      <img src="@/assets/u110.png"
           class="u100">
      <el-divider direction="vertical"></el-divider>
      <el-dropdown @command="handleCommand"
                   trigger="click">
        <div class="targetHover">
          <img src="@/assets/u106.png"
               class="u106">
          admin
        </div>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="退出">退出</el-dropdown-item>
          <el-dropdown-item command="设置">设置</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>

    </div>
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';

export default {
  name: 'Header',
  // import引入的组件需要注入到对象中才能使用
  components: {},
  data () {
    // 这里存放数据
    return {

    }
  },
  // 监听属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 方法集合
  methods: {
    handleCommand (command) {
      this.$message('click on item ' + command)
    }
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created () {

  },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted () {

  },
  beforeCreate () { }, // 生命周期 - 创建之前
  beforeMount () { }, // 生命周期 - 挂载之前
  beforeUpdate () { }, // 生命周期 - 更新之前
  updated () { }, // 生命周期 - 更新之后
  beforeDestroy () { }, // 生命周期 - 销毁之前
  destroyed () { }, // 生命周期 - 销毁完成
  activated () { } // 如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
.Header {
  display: flex;
  justify-content: space-between;
  height: 60px;
  line-height: 60px;
  box-shadow: 5px 5px 5px rgba(161, 161, 161, 0.35);
  padding: 0 100px 0 20px;
  .headerRight {
    font-size: 14px;
    color: #666;
    .u100 {
      width: 23px;
      height: 20px;
      vertical-align: middle;
    }
    .targetHover {
      cursor: pointer;
      .u106 {
        width: 30px;
        height: 30px;
        vertical-align: middle;
      }
    }
  }
}
.el-popper[data-v-61dd7a3d] {
  margin-top: -10px;
}
</style>
