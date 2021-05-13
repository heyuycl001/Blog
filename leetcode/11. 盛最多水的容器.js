// 11. 盛最多水的容器

/**
 * @param {number[]} height
 * @return {number}
 */

// 此道题的容器装水的体积是  min(x,y) * (x到y的长度)
var maxArea = function (height) {
  let x = 0,
    y = height.length - 1,
    sum = 0;
  while (x < y) {
    sum = Math.max(sum, Math.min(height[x], height[y]) * (y - x));
    console.log(sum);
    if (height[x] < height[y]) {
      x++;
    } else {
      y--;
    }
  }
  console.log(sum);
  return sum;
};

maxArea([2, 3, 4, 5, 18, 17, 6]);
