// 204. 计数质数

/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
  const isPrime = function (x) {
    for (let i = 2; i * i <= x; i++) {
      if (x % i === 0) return false;
    }
    return true;
  };
  let ans = 0;
  for (let i = 2; i < n; i++) {
    ans += isPrime(i);
  }
  return ans;
};
countPrimes(5);
