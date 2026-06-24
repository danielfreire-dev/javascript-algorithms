/*
 * @lc app=leetcode id=1929 lang=javascript
 *
 * [1929] Concatenation of Array
 *
 * https://leetcode.com/problems/concatenation-of-array/description/
 *
 * algorithms
 * Easy (90.37%)
 * Likes:    4257
 * Dislikes: 466
 * Total Accepted:    1.5M
 * Total Submissions: 1.7M
 * Testcase Example:  '[1,2,1]'
 *
 * Given an integer array nums of length n, you want to create an array ans of
 * length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n
 * (0-indexed).
 *
 * Specifically, ans is the concatenation of two nums arrays.
 *
 * Return the array ans.
 *
 *
 * Example 1:
 *
 *
 * Input: nums = [1,2,1]
 * Output: [1,2,1,1,2,1]
 * Explanation: The array ans is formed as follows:
 * - ans = [nums[0],nums[1],nums[2],nums[0],nums[1],nums[2]]
 * - ans = [1,2,1,1,2,1]
 *
 * Example 2:
 *
 *
 * Input: nums = [1,3,2,1]
 * Output: [1,3,2,1,1,3,2,1]
 * Explanation: The array ans is formed as follows:
 * - ans = [nums[0],nums[1],nums[2],nums[3],nums[0],nums[1],nums[2],nums[3]]
 * - ans = [1,3,2,1,1,3,2,1]
 *
 *
 *
 * Constraints:
 *
 *
 * n == nums.length
 * 1 <= n <= 1000
 * 1 <= nums[i] <= 1000
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function (nums) {
  let ans = [...nums];
  ans.push(...ans);
  return ans;
};

/*
  const getConcatenation(nums) {
    let n = nums.length;
    let ans = new Array(2 * n);
    for (let i = 0; i < n; i++) {
        ans[i] = ans[i + n] = nums[i];
    }
    return ans;
  }
*/
// @lc code=end
