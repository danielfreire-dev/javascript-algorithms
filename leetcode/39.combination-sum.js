/*
 * @lc app=leetcode id=39 lang=javascript
 *
 * [39] Combination Sum
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum = function (candidates, target) {
  const res = [];

  function makeCombination(start, currentCombination, currentSum) {
    if (currentSum === target) {
      res.push([...currentCombination]);
      return;
    }

    if (currentSum > target || start >= candidates.length) {
      return;
    }

    currentCombination.push(candidates[start]);
    makeCombination(start, currentCombination, currentSum + candidates[start]);
    currentCombination.pop();
    makeCombination(start + 1, currentCombination, currentSum);
  }

  makeCombination(0, [], 0);
  return res;
};
// @lc code=end
