/**
 *
 * @param ransomNote string
 * @param magazine string
 * @returns true if `ransomNote` can be constructed from `magazine`, false otherwise.
 */

export const canConstruct = (ransomNote: string, magazine: string): boolean => {
	let map = new Map();

	for (let c of magazine) {
		map.set(c, map.get(c) + 1 || 1);
	}

	for (let c of ransomNote) {
		let numChars = map.get(c);
		if (numChars) {
			map.set(c, numChars - 1);
		} else {
			return false;
		}
	}

	return true;
};
