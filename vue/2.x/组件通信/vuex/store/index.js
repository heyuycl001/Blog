import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import * as getters from './getters' // 导入响应的模块，*相当于引入了这个组件下所有导出的事例
import * as actions from './actions'
import * as mutations from './mutations'

Vue.use(Vuex)


const store = new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})

export default store