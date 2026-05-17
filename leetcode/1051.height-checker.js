/*
 * @lc app=leetcode id=1051 lang=javascript
 *
 * [1051] Height Checker
 */

// @lc code=start
/**
 * @param {number[]} heights
 * @return {number}
 */
const heightChecker = function (heights) {
  const expectedHeights = [...heights];
  let noMatch = 0;

  heights.sort((a, b) => a - b);

  for (let ii = 0; ii < heights.length; ii++) {
    if (heights[ii] !== expectedHeights[ii]) {
      noMatch++;
    }
  }
  return noMatch;
};
// @lc code=end
