/**
 * Given an array of numbers arr.
 * A sequence of numbers is called an arithmetic progression
 * if the difference between any two consecutive elements is the same.
 *
 * @param arr array of numbers
 * @returns true if the array is arithmetic progression, false otherwise.
 */

export const canMakeArithmeticProgression = (arr: number[]): boolean => {
	if (arr.length == 2) return true;

	arr.sort((a, b) => a - b);
	let diff = arr[0] - arr[1];

	for (let i = 1, length = arr.length; i < length - 1; i++) {
		if (arr[i] - arr[i + 1] != diff) return false;
	}

	return true;
};
