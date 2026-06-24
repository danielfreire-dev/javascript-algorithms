/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 *
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
 *
 * algorithms
 * Medium (38.51%)
 * Likes:    45060
 * Dislikes: 2219
 * Total Accepted:    9.4M
 * Total Submissions: 24.2M
 * Testcase Example:  '"abcabcbb"'
 *
 * Given a string s, find the length of the longest substring without duplicate
 * characters.
 *
 *
 * Example 1:
 *
 *
 * Input: s = "abcabcbb"
 * Output: 3
 * Explanation: The answer is "abc", with the length of 3. Note that "bca" and
 * "cab" are also correct answers.
 *
 *
 * Example 2:
 *
 *
 * Input: s = "bbbbb"
 * Output: 1
 * Explanation: The answer is "b", with the length of 1.
 *
 *
 * Example 3:
 *
 *
 * Input: s = "pwwkew"
 * Output: 3
 * Explanation: The answer is "wke", with the length of 3.
 * Notice that the answer must be a substring, "pwke" is a subsequence and not
 * a substring.
 *
 *
 *
 * Constraints:
 *
 *
 * 0 <= s.length <= 5 * 10^4
 * s consists of English letters, digits, symbols and spaces.
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */

/* Input: s = "pwwkew" */
const lengthOfLongestSubstring = function (s) {
  const seen = new Set();
  let maxLength = 0;
  let left = 0;

  for (let right = 0; right < s.length; right++) {
    const char = s[right];
    // If the character is already in the Set, move the left pointer
    while (seen.has(char)) {
      seen.delete(s[left]);
      left++;
    }
    seen.add(char);
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
};
// @lc code=end
