// 给action注册事件处理函数。当这个函数被触发时候，将状态提交到mutations中处理
export function modifyName({ commit }, name) { // commit 提交；name即为点击后传递过来的参数，此时是 '小红小明'
    return commit('modifyName', name)
}

// ES6精简写法
// export const modifyName = ({commit},name) => commit('modifyName', name)