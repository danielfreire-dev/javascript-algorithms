/*
 * @lc app=leetcode id=15 lang=javascript
 *
 * [15] 3Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function (nums) {
  const result = [];
  nums.sort((a, b) => a - b); // Sort the array

  for (let i = 0; i < nums.length - 2; i++) {
    // Skip duplicate elements for the first number
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1;
    let right = nums.length - 1;
    const target = 0; // We need nums[left] + nums[right] = -nums[i]

    while (left < right) {
      const sum = nums[left] + nums[right] + nums[i];
      if (sum === target) {
        result.push([nums[i], nums[left], nums[right]]);

        // Skip duplicates for the second number
        while (left < right && nums[left] === nums[left + 1]) left++;
        // Skip duplicates for the third number
        while (left < right && nums[right] === nums[right - 1]) right--;

        left++;
        right--;
      } else if (sum < target) {
        left++; // Need a larger sum
      } else {
        right--; // Need a smaller sum
      }
    }
  }
  return result;
};
// @lc code=end
