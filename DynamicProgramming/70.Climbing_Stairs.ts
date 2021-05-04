/**
 * You are climbing a staircase.
 * It takes `n` steps to reach the top.
 * Each time you can either climb 1 or 2 steps.
 * In how many distinct ways can you climb to the top?
 *
 * @param n number
 * @returns distinct ways to reach `n`
 */

// Fibonacci
export const climbStairs = (n: number): number => {
	let dp: number[] = new Array(n + 1).fill(1);

	for (let i = 2; i < dp.length; i++) {
		dp[i] = dp[i - 1] + dp[i - 2];
	}
	console.log(`dp`, dp);
	return dp[dp.length - 1];
};
