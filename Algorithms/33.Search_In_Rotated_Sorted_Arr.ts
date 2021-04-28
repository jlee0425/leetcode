/**
 * There is an integer array nums sorted in ascending order (with distinct values).
 * Prior to being passed to your function,
 * nums is rotated at an unknown pivot index k (0 <= k < nums.length)
 * such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed).
 *
 * For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].
 *
 * Given the array nums after the rotation and an integer target,
 * return the index of target if it is in nums, or -1 if it is not in nums.
 *
 * @param nums array of numbers
 * @param target number to locate
 * @returns index of target in `nums`
 */

export const search = (nums: number[], target: number): number => {
	const BST = (lo: number, hi: number): number => {
		if (lo > hi) return -1; // sanity check

		const mid = Math.floor((lo + hi) / 2);

		if (nums[mid] == target) {
			return mid;
		} else if (
			(nums[lo] <= target && target < nums[mid]) || // left half sorted with target in it
			(nums[mid] < nums[hi] && !(nums[mid] < target && target <= nums[hi])) // right sorted but target not in it
		) {
			return BST(lo, mid - 1);
		}
		return BST(mid + 1, hi);
	};

	return BST(0, nums.length - 1);
};
