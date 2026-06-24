/*
 * @lc app=leetcode id=347 lang=javascript
 *
 * [347] Top K Frequent Elements
 *
 * https://leetcode.com/problems/top-k-frequent-elements/description/
 *
 * algorithms
 * Medium (66.34%)
 * Likes:    19656
 * Dislikes: 858
 * Total Accepted:    3.7M
 * Total Submissions: 5.5M
 * Testcase Example:  '[1,1,1,2,2,3]\n2'
 *
 * Given an integer array nums and an integer k, return the k most frequent
 * elements. You may return the answer in any order.
 *
 *
 * Example 1:
 *
 *
 * Input: nums = [1,1,1,2,2,3], k = 2
 *
 * Output: [1,2]
 *
 *
 * Example 2:
 *
 *
 * Input: nums = [1], k = 1
 *
 * Output: [1]
 *
 *
 * Example 3:
 *
 *
 * Input: nums = [1,2,1,2,1,2,3,1,3,2], k = 2
 *
 * Output: [1,2]
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= nums.length <= 10^5
 * -10^4 <= nums[i] <= 10^4
 * k is in the range [1, the number of unique elements in the array].
 * It is guaranteed that the answer is unique.
 *
 *
 *
 * Follow up: Your algorithm's time complexity must be better than O(n log n),
 * where n is the array's size.
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  let hashmap = new Map();

  for (num of nums) {
    hashmap.set(num, (hashmap.get(num) || 0) + 1);
  }

  const buckets = [];
  for (const [num, freq] of hashmap) {
    if (!buckets[freq]) buckets[freq] = [];
    buckets[freq].push(num);
  }

  let result = [];
  for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {
    if (buckets[i]) {
      result.push(...buckets[i]);
    }
  }

  return result;
};
// @lc code=end
