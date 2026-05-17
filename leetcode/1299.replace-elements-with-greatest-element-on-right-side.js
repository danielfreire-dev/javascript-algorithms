/*
 * @lc app=leetcode id=1299 lang=javascript
 *
 * [1299] Replace Elements with Greatest Element on Right Side
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number[]}
 */
const replaceElements = function (arr) {
  if (arr.length === 0) {
    return [];
  }

  // Start from the end and work backwards
  let maxFromRight = -1;

  // Traverse from right to left
  for (let i = arr.length - 1; i >= 0; i--) {
    const current = arr[i];
    arr[i] = maxFromRight;
    maxFromRight = Math.max(maxFromRight, current);
  }

  return arr;
};
// @lc code=end
