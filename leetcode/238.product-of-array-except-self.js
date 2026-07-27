/*
 * @lc app=leetcode id=238 lang=javascript
 *
 * [238] Product of Array Except Self
 *
 * https://leetcode.com/problems/product-of-array-except-self/description/
 *
 * algorithms
 * Medium (68.85%)
 * Likes:    26163
 * Dislikes: 1709
 * Total Accepted:    4.7M
 * Total Submissions: 6.8M
 * Testcase Example:  '[1,2,3,4]'
 *
 * Given an integer array nums, return an array answer such that answer[i] is
 * equal to the product of all the elements of nums except nums[i].
 *
 * The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit
 * integer.
 *
 * You must write an algorithm that runs in O(n) time and without using the
 * division operation.
 *
 *
 * Example 1:
 * Input: nums = [1,2,3,4]
 * Output: [24,12,8,6]
 * Example 2:
 * Input: nums = [-1,1,0,-3,3]
 * Output: [0,0,9,0,0]
 *
 *
 * Constraints:
 *
 *
 * 2 <= nums.length <= 10^5
 * -30 <= nums[i] <= 30
 * The input is generated such that answer[i] is guaranteed to fit in a 32-bit
 * integer.
 *
 *
 *
 * Follow up: Can you solve the problem in O(1) extra space complexity? (The
 * output array does not count as extra space for space complexity analysis.)
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const n = nums.length;
  let answer = new Array(n);
  let pref = new Array(n);
  let suff = new Array(n);

  pref[0] = 1;
  suff[n - 1] = 1;

  for (let i = 1; i < n; i++) {
    pref[i] = nums[i - 1] * pref[i - 1];
  }

  for (let i = n - 2; i >= 0; i--) {
    suff[i] = nums[i + 1] * suff[i + 1];
  }

  for (let i = 0; i < n; i++) {
    answer[i] = pref[i] * suff[i];
  }

  return answer;
};
// @lc code=end
