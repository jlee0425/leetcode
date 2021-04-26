/**
 * A subsequence is a sequence that can be derived from an array
 *  by deleting some or no element swithout changing the order of the remaining elements.
 *
 * ex) [3, 6, 2, 7] is a subsequence of the array [0, 3, 1, 6, 2, 2, 7].
 *
 * @param nums integer array
 * @returns length of the longest strictly increasing subsequence
 */

export const lengthOfLIS = (nums: number[]): number => {
	let sequence = new Array(nums.length).fill(1);

	for (let i = 1; i < nums.length; i++) {
		let subproblems: number[] = [];

		for (let k = 0; k < i; k++) {
			if (nums[k] < nums[i]) {
				subproblems.push(sequence[k]);
			}
		}

		sequence[i] = 1 + Math.max(...subproblems, 0);
	}

	return Math.max(...sequence);
};
