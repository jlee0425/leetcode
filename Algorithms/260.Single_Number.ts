/**
 * Given an integer array nums, in which exactly two elements appear only once
 * and all the other elements appear exactly twice.
 * Find the two elements that appear only once.
 * You can return the answer in any order.
 *
 * Follow up: Your algorithm should run in linear runtime complexity.
 * Could you implement it using only constant space complexity?
 *
 * @param nums array of numbers
 * @returns array of two numbers that appear only once in `nums`
 */

export const singleNumber = (nums: number[]): number[] => {
	nums.sort((a, b) => a - b);
	for (let i = 0; nums.length > 2; ) {
		if (nums[i] == nums[i + 1]) {
			nums.splice(i, 2);
		} else {
			i++;
		}
	}
	return nums;
};
