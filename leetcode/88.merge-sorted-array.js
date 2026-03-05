/*
 * @lc app=leetcode id=88 lang=javascript
 *
 * [88] Merge Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge = function (nums1, m, nums2, n) {
  let i = m - 1;
  let ii = n - 1;
  let iii = m + n - 1;

  while (ii >= 0) {
    if (i >= 0 && nums1[i] > nums2[ii]) {
      nums1[iii] = nums1[i];
      i--;
    } else {
      nums1[iii] = nums2[ii];
      ii--;
    }
    iii--;
  }
  return nums1;
};
// @lc code=end
