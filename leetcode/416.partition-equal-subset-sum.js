/*
 * @lc app=leetcode id=416 lang=javascript
 *
 * [416] Partition Equal Subset Sum
 *
 * https://leetcode.com/problems/partition-equal-subset-sum/description/
 *
 * algorithms
 * Medium (49.44%)
 * Likes:    13910
 * Dislikes: 300
 * Total Accepted:    1.5M
 * Total Submissions: 3.1M
 * Testcase Example:  '[1,5,11,5]'
 *
 * Given an integer array nums, return true if you can partition the array into
 * two subsets such that the sum of the elements in both subsets is equal or
 * false otherwise.
 *
 *
 * Example 1:
 *
 *
 * Input: nums = [1,5,11,5]
 * Output: true
 * Explanation: The array can be partitioned as [1, 5, 5] and [11].
 *
 *
 * Example 2:
 *
 *
 * Input: nums = [1,2,3,5]
 * Output: false
 * Explanation: The array cannot be partitioned into equal sum subsets.
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= nums.length <= 200
 * 1 <= nums[i] <= 100
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */

/*  nums = [1, 5, 11, 5]  */
const canPartition = function (nums) {
  const sum = nums.reduce((a, b) => a + b, 0);
  if (sum % 2 !== 0) return false; // Odd sum cannot be split equally
  const target = sum / 2;

  // dp[i] = true if a subset with sum 'i' can be formed
  const dp = new Array(target + 1).fill(false);
  dp[0] = true; // Base case: sum 0 is always achievable

  for (const num of nums) {
    // Iterate backwards to avoid reusing the same element multiple times
    for (let i = target; i >= num; i--) {
      dp[i] = dp[i] || dp[i - num];
    }
  }

  return dp[target];
};
// @lc code=end
