<template>
  <el-form :size="size"
           inline
           :label-width="labelWidth"
           class="elForm">
    <el-col :span="8"
            v-for='item in searchFormClone'
            :key='item.prop'
            class="elFromItem">
      <el-form-item :label="item.label">
        <!-- 输入框 -->
        <el-input clearable
                  v-if="item.type==='Input'"
                  v-model="searchData[item.prop]"
                  :size="size"
                  :placeholder="item.placeholder"></el-input>
        <!-- 下拉框 -->
        <el-select clearable
                   v-if="item.type==='Select'"
                   :placeholder="item.placeholder"
                   v-model="searchData[item.prop]"
                   :size="size"
                   @change="item.change(searchData[item.prop])">
          <el-option v-for="op in item.options"
                     :label="op.label"
                     :value="op.value"
                     :key="op.value"></el-option>
        </el-select>
        <!-- 日期 -->
        <el-date-picker v-if="item.type==='Date'"
                        :placeholder="item.placeholder"
                        value-format="yyyy-MM-dd"
                        v-model="searchData[item.prop]"></el-date-picker>
        <!-- 日期时间 -->
        <el-date-picker v-if="item.type==='DateTime'"
                        type='datetime'
                        :placeholder="item.placeholder"
                        v-model="searchData[item.prop]"
                        value-format="yyyy-MM-dd HH:hh:mm"
                        :disabled="item.disable && item.disable(searchData[item.prop])"></el-date-picker>
      </el-form-item>
    </el-col>
    <el-col :span="8"
            class="searchHandleItem"
            v-if="searchHandle.length != 0 && isOpenHide">
      <div v-if='isHandle'
           class="searchHandle"
           :style="{justifyContent:isOpen ? 'flex-end' : 'flex-start'}">
        <el-form-item v-for='item in searchHandle'
                      :key="item.label">
          <el-button :type="item.type"
                     :size="item.size || size"
                     @click='item.handle()'>{{item.label}}</el-button>
        </el-form-item>
        <div class="isOpen"
             v-if="isOpenHide && isOpen"
             @click="isOpenEvent">展开<i class="el-icon-arrow-down"></i></div>
        <div class="isOpen"
             v-if="isOpenHide && !isOpen"
             @click="isCloseEvent">收起<i class="el-icon-arrow-up"></i></div>
      </div>
    </el-col>
  </el-form>
</template>
<script>
export default {
  props: {
    isHandle: {
      type: Boolean,
      default: true
    },
    labelWidth: {
      type: String,
      default: '180px'
    },
    size: {
      type: String,
      default: 'medium'
    },
    searchForm: {
      type: Array,
      default: () => {
        return []
      }
    },
    searchHandle: {
      type: Array,
      default: () => []
    },
    searchData: {
      type: Object,
      default: () => {
        return []
      }
    }
  },
  data () {
    return {
      isOpen: true,
      isOpenHide: true, // 如果没超过3个，则不显示展开/收起
      searchFormClone: null,
      searchFormRaw: null, // 分割前半部分
      searchFormBack: null // 如果超过3个分割后的。
    }
  },
  watch: {
    searchForm: {
      handler (newValue) {
        if (newValue.length > 3) {
          this.isOpen = true
          this.searchFormRaw = newValue.slice(0, 2)
          this.searchFormBack = newValue.slice(2)
          this.searchFormClone = this.searchFormRaw
        } else {
          this.isOpenHide = false
          this.searchFormClone = newValue
        }
      },
      immediate: true
    }
  },
  methods: {
    isOpenEvent () {
      this.isOpen = false
      this.searchFormClone = this.searchFormClone.concat(this.searchFormBack)
    },
    isCloseEvent () {
      this.isOpen = true
      this.searchFormClone = this.searchFormRaw
    }
  }
}

</script>

<style lang='scss' scoped>
//@import url(); 引入公共css类
.elForm {
  padding: 35px 30px 15px;
  background-color: #fff;
  margin: 20px;
  border-radius: 10px;
  display: flex;
  flex-wrap: wrap;
  .elFromItem {
    display: flex;
    margin-bottom: 30px;
    padding: 0 20px;
    .el-form-item {
      margin-bottom: 0;
      display: flex;
    }
    & ::v-deep .el-form-item {
      flex: 1;
      margin-bottom: 0;
      .el-form-item__content {
        flex: 1;
        max-width: 320px;
        min-width: 180px;
      }
      .el-input,
      .el-select {
        width: 100%;
        max-width: 320px;
        min-width: 180px;
      }
    }
  }
  .searchHandleItem {
    height: 100%;
    margin-bottom: 30px;
  }
  .searchHandle {
    display: flex;
    align-items: center;
    padding: 0 20px;
    max-width: 320px;
    min-width: 180px;
    height: 36px;
    color: #3592ff;
    font-size: 14px;
    line-height: 16px;

    & ::v-deep .el-form-item {
      margin-bottom: 0;
    }
    .isOpen {
      cursor: pointer;
    }
    i {
      font-size: 16px;
      font-weight: 600;
    }
  }
}
</style>
