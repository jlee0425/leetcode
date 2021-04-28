/**
 * Given a string s which consists of lowercase or uppercase letters,
 * return the length of the longest palindrome that can be built with those letters.
 * Letters are case sensitive, for example, "Aa" is not considered a palindrome here
 *
 * @param s string
 * @returns the length of the longest palindrome that can be built with those letters
 */

export const longestPalindrome = (s: string): number => {
	let map = new Map();

	for (let c of s) {
		map.set(c, map.get(c) + 1 || 1);
	}

	let maxLen = 0;

	for (let count of map.values()) {
		if (count % 2 == 0) {
			maxLen += count;
		} else if (count != 1) {
			maxLen += count - 1;
		}
	}

	// add 1 for the character that's in the `s` once.
	return maxLen === s.length ? maxLen : maxLen + 1;
};
