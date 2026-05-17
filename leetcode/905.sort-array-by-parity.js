/*
 * @lc app=leetcode id=905 lang=javascript
 *
 * [905] Sort Array By Parity
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortArrayByParity = function (nums) {
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    if (nums[left] % 2 !== 0 && nums[right] % 2 === 0) {
      const temp = nums[left];

      nums[left] = nums[right];
      nums[right] = temp;

      right--;
      left++;
    }

    if (nums[left] % 2 === 0) {
      left++;
    }

    if (nums[right] % 2 !== 0) {
      right--;
    }
  }

  return nums;
};
// @lc code=end
