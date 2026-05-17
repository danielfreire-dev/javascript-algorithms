/*
 * @lc app=leetcode id=128 lang=javascript
 *
 * [128] Longest Consecutive Sequence
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
const longestConsecutive = function (nums) {
  if (nums.length === 0) return 0;

  let consecutiveStreak = 1;
  const sortedArray = nums.sort((a, b) => a - b);
  let maxStreak = 0;

  console.log('sortedArray', sortedArray);

  for (let i = 1; i < sortedArray.length; i++) {
    if (sortedArray[i] === sortedArray[i - 1] + 1) {
      consecutiveStreak++;
    } else if (sortedArray[i] !== sortedArray[i - 1]) {
      maxStreak = Math.max(consecutiveStreak, maxStreak);
      consecutiveStreak = 1;
    }
  }

  maxStreak = Math.max(consecutiveStreak, maxStreak);

  return maxStreak;
};
// @lc code=end
