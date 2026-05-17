/*
 * @lc app=leetcode id=448 lang=javascript
 *
 * [448] Find All Numbers Disappeared in an Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findDisappearedNumbers = function (nums) {
  const set = new Set(nums);
  const fullNums = Array.from({ length: nums.length }, (_, i) => i + 1);

  /*   for (let i = 0; i < fullNums.length; i++) {
    if (set.has(fullNums[i])) {
      fullNums.splice(i, 1);
      i--;
    }
  }
  return fullNums; */

  return fullNums.filter((num) => !set.has(num));
};
// @lc code=end
