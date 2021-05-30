/**
 * Given two strings `s` and `t`, return the minimum window in `s`
 * which will contain all the characters in `t`.
 * If there is no such window in `s` that covers all characters in `t`,
 * return the empty string "".
 *
 * Note that if there is such a window, it is guaranteed that
 *  there will always be only one unique minimum window in s.
 *
 * @param s Original String
 * @param t Characters to check
 * @returns Minimum substring of `s` that contains all characters in `t`
 *
 * Constraints:
 *  - 1 <= s.length, t.length <= 10^5
 *  - `s` and `t` consis of English letters.
 */

export const minWindow = (s: string, t: string): string => {
	// sanity check
	if (s.length == 0 || t.length == 0) return '';
	if (s == t) return s;

	let tMap: Map<string, number> = new Map();
	t.split('').map((c) => tMap.set(c, tMap.get(c) + 1 || 1));

	let left = 0,
		right = 0,
		start = -1,
		end = -1,
		count = tMap.size,
		min = Number.MAX_SAFE_INTEGER;

	while (right < s.length) {
		const c = s[right];
		if (tMap.has(c)) {
			tMap.set(c, tMap.get(c) - 1);
			count = tMap.get(c) === 0 ? count - 1 : count;
		}

		if (count > 0) {
			right++;
		} else if (count === 0) {
			while (count === 0) {
				const ch = s[left];
				if (tMap.has(ch)) {
					tMap.set(ch, tMap.get(ch) + 1);
					if (tMap.get(ch) > 0) {
						count++;
					}
				}

				if (min > right - left + 1) {
					min = right - left + 1;
					start = left;
					end = right;
				}
				left++;
			}
			right++;
		}
	}

	return start === -1 || end === -1 ? '' : s.substr(start, end - start + 1);
};
