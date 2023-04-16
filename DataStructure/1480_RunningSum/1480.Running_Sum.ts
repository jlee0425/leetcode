/**
 * Given an array nums.
 * We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
 * Return the running sum of nums.
 *
 * @param nums array of numbers
 * @returns array of numbers
 */

export const runningSum = (nums: number[]): number[] => {
	for (let i = 1; i < nums.length; i++) {
		nums[i] += nums[i - 1];
	}

	return nums;
};
