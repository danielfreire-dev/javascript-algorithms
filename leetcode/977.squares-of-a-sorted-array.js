/*
 * @lc app=leetcode id=977 lang=javascript
 *
 * [977] Squares of a Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortedSquares = function (nums) {
  return nums.map((num) => num ** 2).sort((a, b) => a - b);
};
// @lc code=end
