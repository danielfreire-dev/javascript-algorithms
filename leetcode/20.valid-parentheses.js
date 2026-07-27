/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 *
 * https://leetcode.com/problems/valid-parentheses/description/
 *
 * algorithms
 * Easy (44.11%)
 * Likes:    28033
 * Dislikes: 2012
 * Total Accepted:    7.6M
 * Total Submissions: 17.2M
 * Testcase Example:  '"()"'
 *
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and
 * ']', determine if the input string is valid.
 *
 * An input string is valid if:
 *
 *
 * Open brackets must be closed by the same type of brackets.
 * Open brackets must be closed in the correct order.
 * Every close bracket has a corresponding open bracket of the same type.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: s = "()"
 *
 * Output: true
 *
 *
 * Example 2:
 *
 *
 * Input: s = "()[]{}"
 *
 * Output: true
 *
 *
 * Example 3:
 *
 *
 * Input: s = "(]"
 *
 * Output: false
 *
 *
 * Example 4:
 *
 *
 * Input: s = "([])"
 *
 * Output: true
 *
 *
 * Example 5:
 *
 *
 * Input: s = "([)]"
 *
 * Output: false
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= s.length <= 10^4
 * s consists of parentheses only '()[]{}'.
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let stack = [];
  let pairsHashMap = { '(': ')', '{': '}', '[': ']' };

  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    console.log('char', char);
    console.log('stack', stack);
    console.log('pairsHashMap[char]', pairsHashMap[char]);
    if (pairsHashMap[char]) {
      stack.push(char);
    } else if (pairsHashMap[stack.pop()] !== char) {
      return false;
    }
  }
  return stack.length === 0;
};
// @lc code=end
