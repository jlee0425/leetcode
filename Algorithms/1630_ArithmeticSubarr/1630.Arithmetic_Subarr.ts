/**
 * A sequence of numbers is called arithmetic if it consists of at least two elements,
 * and the difference between every two consecutive elements is the same.
 * More formally, a sequence s is arithmetic if and only if
 * s[i+1] - s[i] == s[1] - s[0] for all valid i.
 *
 * For example, these are arithmetic sequences:
 * 1, 3, 5, 7, 9
 * 7, 7, 7, 7
 * 3, -1, -5, -9
 *
 * The following sequence is not arithmetic:
 * 1, 1, 2, 5, 7
 * You are given an array of n integers, nums, and two arrays of m integers
 * each, l and r, representing the m range queries,
 * where the ith query is the range [l[i], r[i]].
 * All the arrays are 0-indexed.
 *
 * Return a list of boolean elements answer,
 * where answer[i] is true if the subarray nums[l[i]], nums[l[i]+1], ... ,
 * nums[r[i]] can be rearranged to form an arithmetic sequence, and false otherwise.
 *
 * @param nums number array
 * @param l start indices of subarrays
 * @param r end indices of subarrays
 * @returns boolean array
 */

export const checkArithmeticSubarrays = (
	nums: number[],
	l: number[],
	r: number[],
): boolean[] => {
	let ans: boolean[] = new Array(l.length);

	for (let i = 0; i < l.length; i++) {
		if (r[i] - l[i] < 2) {
			ans[i] = true;
			continue;
		}

		ans[i] = isArithmetic(nums.slice(l[i], r[i] + 1));
	}

	return ans;
};

const isArithmetic = (nums: number[]): boolean => {
	nums.sort((a, b) => a - b);
	const diff = nums[0] - nums[1];
	for (let i = 1; i < nums.length - 1; i++) {
		if (diff != nums[i] - nums[i + 1]) return false;
	}

	return true;
};
