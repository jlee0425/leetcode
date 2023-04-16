/**
 * Given an array of integers `arr`,
 * write a function that returns `true`
 * if and *only if* the number of occurrences of each value in the array is unique.
 *
 * @param arr array of numbers
 * @returns true if the number of occurrences of each value in the array is unique, and false otherwise.
 */

export const uniqueOccurrences = (arr: number[]): boolean => {
	let map = new Map();

	for (let n of arr) {
		map.set(n, map.get(n) + 1 || 1);
	}

	let occMap = new Map();
	for (let n of map.values()) {
		let occurred = occMap.get(n);
		if (occurred) {
			return false;
		}
		occMap.set(n, true);
	}

	return true;
};
