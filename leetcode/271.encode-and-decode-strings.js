class Solution {
  /**
   * @param {string[]} strs
   * @returns {string}
   */
  encode(strs) {
    let res = '';
    for (const s of strs) res += `${s.length}#${s}`;

    return res;
  }

  /**
   * @param {string} str
   * @returns {string[]}
   */
  decode(str) {
    let res = [],
      i = 0;

    while (i < str.length) {
      let j = i;
      while (str[j] !== '#') {
        j++;
      }
      const length = parseInt(str.slice(i, j), 10);
      const word = str.slice(j + 1, j + 1 + length);
      res.push(word);
      i = j + 1 + length;
    }
    return res;
  }
}
