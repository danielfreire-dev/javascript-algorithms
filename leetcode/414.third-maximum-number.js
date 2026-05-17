/*
 * @lc app=leetcode id=414 lang=javascript
 *
 * [414] Third Maximum Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
const thirdMax = function (nums) {
  let first = -Infinity;
  let second = -Infinity;
  let third = -Infinity;

  for (const num of nums) {
    // Skip duplicates
    if (num === first || num === second || num === third) continue;

    if (num > first) {
      third = second;
      second = first;
      first = num;
    } else if (num > second) {
      third = second;
      second = num;
    } else if (num > third) {
      third = num;
    }
  }

  // If third is still -Infinity, we don't have 3 distinct values
  return third === -Infinity ? first : third;
};
// @lc code=end
