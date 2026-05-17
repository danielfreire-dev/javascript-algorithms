/*
 * @lc app=leetcode id=941 lang=javascript
 *
 * [941] Valid Mountain Array
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {boolean}
 */
const validMountainArray = function (arr) {
  if (arr.length < 3) {
    return false;
  }
  let isIncreasing = true;
  let hasIncreased = false;
  let hasDecreased = false;

  for (let i = 1; i < arr.length; i++) {
    // Equal elements not allowed
    if (arr[i] === arr[i - 1]) {
      return false;
    }

    if (arr[i] > arr[i - 1]) {
      if (!isIncreasing) {
        return false; // Can't go up after going down
      }
      hasIncreased = true;
    } else {
      if (isIncreasing) {
        isIncreasing = false;
      }
      hasDecreased = true;
    }
  }
  return hasIncreased && hasDecreased;
};
// @lc code=end
