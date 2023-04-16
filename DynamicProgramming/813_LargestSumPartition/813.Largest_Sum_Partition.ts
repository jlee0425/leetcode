/**
 * We partition a row of numbers nums into at most k adjacent (non-empty) groups,
 * then our score is the sum of the average of each group. What is the largest score we can achieve?
 * Note that our partition must use every number in nums, and that scores are not necessarily integers.
 *
 * @param A number array
 * @param K number
 * @returns number
 */
export const largestSumPartition = (A: number[], K: number): number => {
	if (A.length <= K) return A.reduce((acc, cur) => acc + cur);
	if (K === 1) return A.reduce((acc, cur) => acc + cur) / A.length;

	let length = A.length;
	let prefix = new Array(length + 1).fill(0);

	// cumulative sums
	for (let i = 0; i < length; i++) {
		prefix[i + 1] = prefix[i] + A[i];
	}

	// respective avg from i to length
	let dp: number[] = new Array(length).fill(0);
	for (let i = 0; i < length; i++) {
		dp[i] = avg(prefix, i, length);
	}

	for (let k = 0; k < K - 1; k++) {
		for (let i = 0; i < length; i++) {
			for (let j = i + 1; j < length; j++) {
				dp[i] = Math.max(dp[i], avg(prefix, i, j) + dp[j]);
			}
		}
	}

	return parseFloat(dp[0].toFixed(5));
};

const avg = (arr: number[], start: number, end: number) =>
	(arr[end] - arr[start]) / (end - start);
