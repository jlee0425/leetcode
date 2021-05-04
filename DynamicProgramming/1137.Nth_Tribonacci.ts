/**
 * The Tribonacci sequence Tn is defined as follows:
 * T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0.
 * Given n, return the value of Tn.
 *
 * @param n number
 * @returns number; value of Tn
 */

export const tribonacci = (n: number): number => {
	let dp: number[] = new Array(n + 1);
	[dp[0], dp[1], dp[2]] = [0, 1, 1];

	if (n < 3) return dp[n];

	for (let i = 3; i < n + 1; i++) {
		dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
	}

	return dp[dp.length - 1];
};
