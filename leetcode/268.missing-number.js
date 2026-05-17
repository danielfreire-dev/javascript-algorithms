/*
 * @lc app=leetcode id=268 lang=javascript
 *
 * [268] Missing Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = function (nums) {
  const numsSorted = nums.sort((a, b) => a - b);

  for (let i = 0; i < numsSorted.length + 1; i++) {
    if (numsSorted.indexOf(i) === -1) {
      return i;
    }
  }
};
// @lc code=end
