/*
 * @lc app=leetcode id=383 lang=javascript
 *
 * [383] Ransom Note
 */

// @lc code=start
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = function (ransomNote, magazine) {
  const charCount = new Map();

  if (magazine.length < ransomNote.length) {
    return false;
  }

  /* Map of magazine */
  for (const char of magazine) {
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }

  /* Check if ransomNote possible */
  for (const char of ransomNote) {
    /* char doesn't exist */
    if (!charCount.has(char)) {
      return false;
    }

    /* char exists but we've already used all of them */
    if (charCount.get(char) === 0) {
      return false;
    }

    charCount.set(char, (charCount.get(char) || 0) - 1);
  }

  return true;
};
// @lc code=end
