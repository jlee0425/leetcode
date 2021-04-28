/**
 * Given a string s which consists of lowercase or uppercase letters,
 * return the length of the longest palindrome that can be built with those letters.
 * Letters are case sensitive, for example, "Aa" is not considered a palindrome here
 *
 * @param s string
 * @returns the length of the longest palindrome that can be built with those letters
 */

export const longestPalindrome = (s: string): number => {
	let list: { [key: string]: number } = {};

	for (let c of s) {
		list[c] = list[c] ? list[c] + 1 : 1;
	}

	if (Object.keys(list).length == 1) return s.length;

	let maxLen = 0;
	let containsOddStr = false;

	Object.values(list).forEach((n) => {
		if (n % 2 == 0) {
			maxLen += n;
		} else {
			if (containsOddStr) {
				maxLen += n - 1;
			} else {
				maxLen += n;
				containsOddStr = true;
			}
		}
	});

	return maxLen;
};
