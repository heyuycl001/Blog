
// 提交 mutations是更改Vuex状态的唯一合法方法
export const modifyName = (state, newData) => { // 组件点击更改餐馆名称为 小红小明
    state.name = newData // 把方法传递过来的参数，赋值给state中的name
}