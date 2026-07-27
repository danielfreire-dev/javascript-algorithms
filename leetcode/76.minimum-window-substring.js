/*
 * @lc app=leetcode id=76 lang=javascript
 *
 * [76] Minimum Window Substring
 *
 * https://leetcode.com/problems/minimum-window-substring/description/
 *
 * algorithms
 * Hard (47.44%)
 * Likes:    20415
 * Dislikes: 861
 * Total Accepted:    2.2M
 * Total Submissions: 4.7M
 * Testcase Example:  '"ADOBECODEBANC"\n"ABC"'
 *
 * Given two strings s and t of lengths m and n respectively, return the
 * minimum window substring of s such that every character in t (including
 * duplicates) is included in the window. If there is no such substring, return
 * the empty string "".
 *
 * The testcases will be generated such that the answer is unique.
 *
 *
 * Example 1:
 *
 *
 * Input: s = "ADOBECODEBANC", t = "ABC"
 * Output: "BANC"
 * Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C'
 * from string t.
 *
 *
 * Example 2:
 *
 *
 * Input: s = "a", t = "a"
 * Output: "a"
 * Explanation: The entire string s is the minimum window.
 *
 *
 * Example 3:
 *
 *
 * Input: s = "a", t = "aa"
 * Output: ""
 * Explanation: Both 'a's from t must be included in the window.
 * Since the largest window of s only has one 'a', return empty string.
 *
 *
 *
 * Constraints:
 *
 *
 * m == s.length
 * n == t.length
 * 1 <= m, n <= 10^5
 * s and t consist of uppercase and lowercase English letters.
 *
 *
 *
 * Follow up: Could you find an algorithm that runs in O(m + n) time?
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  if (t === '') return '';

  let countT = {};
  let window = {};
  for (let c of t) {
    countT[c] = (countT[c] || 0) + 1;
  }

  let have = 0,
    need = Object.keys(countT).length;
  let res = [-1, -1];
  let resLen = Infinity;
  let l = 0;

  for (let r = 0; r < s.length; r++) {
    let c = s[r];
    window[c] = (window[c] || 0) + 1;

    if (countT[c] && window[c] === countT[c]) {
      have++;
    }

    while (have === need) {
      if (r - l + 1 < resLen) {
        resLen = r - l + 1;
        res = [l, r];
      }

      window[s[l]]--;
      if (countT[s[l]] && window[s[l]] < countT[s[l]]) {
        have--;
      }
      l++;
    }
  }

  return resLen === Infinity ? '' : s.slice(res[0], res[1] + 1);
};
// @lc code=end
