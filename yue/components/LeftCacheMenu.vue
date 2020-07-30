<template>
  <div class="LeftCacheMenu">
    <el-menu :default-openeds="['0']"
             class="el-menu-vertical-demo"
             :router="true"
             :unique-opened="true"
             :default-active="selectedRoute">
      <template v-for="(item,index) in menus">
        <el-submenu :index="`${index}`"
                    :key="index+'_c'">
          <template slot="title">
            <span>{{item.name}}</span>
          </template>
          <el-menu-item-group>
            <template v-for="(ele,key) in item.child">
              <el-menu-item :index="ele.route"
                            :key="key+'v'"
                            :route="ele.route">{{ele.name}}</el-menu-item>

            </template>
          </el-menu-item-group>
        </el-submenu>
      </template>
    </el-menu>
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';

export default {
  name: 'LeftCacheMenu',
  // import引入的组件需要注入到对象中才能使用
  props: {
    LeftCacheMenu: Object
  },
  data () {
    return {
      menus: null,
      selectedRoute: null
    }
  },
  watch: {
    $route: {
      handler (to) {
        const route = this.$route.matched[0].path.replace(/\//g, '')
        this.menus = this.LeftCacheMenu[route] // 初始化第一次
        this.selectedRoute = this.$route.path
      },
      immediate: true
    }
  }
}
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
.LeftCacheMenu {
  width: 170px;
  height: 100%;
  background-color: #ebedf1;
}
.LeftCacheMenu ::v-deep .el-menu {
  background-color: transparent;
  .el-menu-item {
    min-width: auto;
  }
}
</style>
