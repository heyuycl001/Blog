// for循环setTimeout打印输出

// 方法一：运用闭包
for (var i = 0; i < 5; i++) {
    (function (i) {
        setTimeout(() => {
            // console.log(i)
        }, 0);
    })(i)
}

// 方法二：运用setTimeout第三个参数
for (var i = 0; i < 5; i++) {
    setTimeout((i) => {
        // console.log(i)
    }, 0, i);
}

// 方法三：运用let块级作用域
for (let i = 0; i < 5; i++) {
    setTimeout(() => {
        console.log(i)
    }, 0);
}