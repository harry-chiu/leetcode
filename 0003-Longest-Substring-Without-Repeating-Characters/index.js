/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let map = new Map();
    let start = 0;
    let maxLength = 0;

    for (let i = 0; i < s.length; i++) {
        const character = s[i];

        if (map.get(character) >= start) {
            start = map.get(character) + 1;
        }

        map.set(character, i);

        if (i - start + 1 > maxLength) {
            maxLength = i - start + 1;
        }
    }

    return maxLength;
};