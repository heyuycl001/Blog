<template>
  <div class='LeftCollapseMenu'>
    <el-menu class="el-menu-vertical-demo"
             :collapse="true"
             :router="true">
      <el-menu-item v-for="(icon,index) in LeftCollapseMenu.icon"
                    :key="index"
                    :index="`${index+1}`"
                    :route="LeftCollapseMenu.route[index]">
        <i :class="icon"></i>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';

export default {
  // import引入的组件需要注入到对象中才能使用
  name: 'LeftCollapseMenu',
  props: {
    LeftCollapseMenu: { // menu需要的数据
      type: Object,
      default: () => {
        return {
          icon: [], // 图标
          route: [] // 路由路径
        }
      }
    }
  }
}
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
.el-menu {
  border-right: none;
  background-color: #22252f;
}
.el-menu-item:focus,
.el-menu-item:hover {
  outline: 0;
  background-color: #22252f;
}
</style>
