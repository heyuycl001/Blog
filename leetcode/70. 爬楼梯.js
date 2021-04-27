// 70. 爬楼梯

/**
 * @param {number} n
 * @return {number}
 */
// ! 动态规划
/* var climbStairs = function (n) {
  const dp = [1, 1];
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
}; */

// ! 优化动态规划 其实我们需要的只是 -1 跟 -2 两个常量就好，所以没必要使用o(n)的空间度
var climbStairs = function (n) {
  let n1 = 1,
    n2 = 1,
    sum = 0;
  for (let i = 2; i <= n; i++) {
    sum = n1 + n2;
    n1 = n2;
    n2 = sum;
  }
  return n2;
};
console.log(climbStairs(45));
// ! 上面的优化用解构赋值来处理
// var climbStairs = function (n) {
//   let n1 = 1,
//     n2 = 1;
//   for (let i = 2; i <= n; i++) {
//     [n1, n2] = [n2, n1 + n2];
//   }
//   return n2;
// };

// ! 跟 斐波那契数列的规则一样，所以可以用斐波那契数列的递归解法，但是用时较长
/* var climbStairs = function (n) {
  if (n < 3) {
    return n;
  }
  return climbStairs(n - 1) + climbStairs(n - 2);
};
 */

// ! 优化递归 斐波那契数列，利用数组避免重复计算
/* var climbStairs = function (n) {
  const dp = [1, 1];
  let fib = function (n) {
    if (dp[n] === undefined) {
      dp[n] = fib(n - 1) + fib(n - 2);
    }
    return dp[n];
  };
  return fib(n);
}; */
