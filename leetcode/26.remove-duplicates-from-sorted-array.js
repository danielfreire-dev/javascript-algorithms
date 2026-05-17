/*
 * @lc app=leetcode id=26 lang=javascript
 *
 * [26] Remove Duplicates from Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    const firstIndex = nums.indexOf(nums[i]);
    const lastIndex = nums.lastIndexOf(nums[i]);

    if (firstIndex !== lastIndex) {
      nums.splice(lastIndex, 1);
      i--;
    }
  }

  return nums.length;
};
// @lc code=end
