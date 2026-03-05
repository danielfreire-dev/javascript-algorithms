/*
 * @lc app=leetcode id=485 lang=javascript
 *
 * [485] Max Consecutive Ones
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
const findMaxConsecutiveOnes = function (nums) {
  let count = 0;
  let maxcount = 0;

  if (nums.length === 1) {
    return nums[0] === 1 ? 1 : 0;
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      count++;
    } else if (nums[i] === 0) {
      maxcount = Math.max(count, maxcount);
      count = 0;
    }
  }

  maxcount = Math.max(count, maxcount);

  return maxcount || count;
};
// @lc code=end
