/**
 * A binary watch has 4 LEDs on the top which represent the hours (0-11),
 * and the 6 LEDs on the bottom represent the minutes (0-59).
 * Each LED represents a zero or one, with the least significant bit on the right.
 *
 * Given an integer turnedOn which represents the number of LEDs that are currently on,
 * return all possible times the watch could represent. You may return the answer in any order.
 * The hour must not contain a leading zero.
 *
 * For example, "01:00" is not valid. It should be "1:00".
 * The minute must be consist of two digits and may contain a leading zero.
 *
 * For example, "10:2" is not valid. It should be "10:02".
 *
 * @param turnedOn number
 * @returns array of strings
 */

export const readBinaryWatch = (turnedOn: number): string[] => {
	let ans: string[] = [];

	const toTime = (n: number): string => {
		let h = n >> 6;
		let m = n & 0b0000111111;
		if (h > 11 || m > 59) return null;
		return `${h}:${String(m).padStart(2, '0')}`;
	};

	const countBits = (n: number): number => {
		let count = 0;
		while (n) {
			n & 1 && count++;
			n >>= 1;
		}
		return count;
	};

	for (let i = 0; i < 0b1111111111; i++) {
		if (countBits(i) === turnedOn) {
			const time = toTime(i);
			time && ans.push(time);
		}
	}

	return ans;
};
