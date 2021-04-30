/**
 * Given two equal-size strings s and t.
 * In one step you can choose any character of t and replace it with another character.
 * Return the minimum number of steps to make t an anagram of s.
 * An Anagram of a string is a string that contains the same characters with a different (or the same) ordering.
 *
 * @param s string
 * @param t string
 * @returns number of steps to make t an anagram of s
 */

export const minSteps = (s: string, t: string): number => {
	let map = new Map<string, number>();

	for (let c of t) {
		map.set(c, map.get(c) + 1 || 1);
	}

	for (let c of s) {
		if (map.get(c)) {
			map.set(c, map.get(c) - 1);
		} else {
			map.delete(c);
		}
	}

	let diff = 0;
	for (let freq of map.values()) {
		if (freq) {
			diff += freq;
		}
	}

	return diff;
};
