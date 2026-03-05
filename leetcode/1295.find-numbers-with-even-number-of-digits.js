/*
 * @lc app=leetcode id=1295 lang=javascript
 *
 * [1295] Find Numbers with Even Number of Digits
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
const findNumbers = function (nums) {
  return nums.filter((num) => num.toString().length % 2 === 0).length;
};
// @lc code=end
