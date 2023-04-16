/**
 * Given the array of integers `nums`, choose two different indices `i` and `j` of that array.
 *
 * @param nums array of numbers
 * @returns the maximum value of (nums[i] - 1) * (nums[j] - 1)
 */

export const maxProduct = (nums: number[]): number => {
	let max = Math.max(...nums);
	nums.splice(nums.indexOf(max), 1);
	let secondMax = Math.max(...nums);

	return (max - 1) * (secondMax - 1);
};
