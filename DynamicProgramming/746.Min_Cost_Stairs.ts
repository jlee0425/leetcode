/**
 * You are given an integer array cost where cost[i] is the cost of ith step on a staircase.
 * Once you pay the cost, you can either climb one or two steps.
 * You can either start from the step with index 0, or the step with index 1.
 * Return the minimum cost to reach the top of the floor.
 *
 * @param cost array of numbers
 * @returns Min cost to reach the top of the floor
 */

export const minCostClimbingStairs = (cost: number[]): number => {
	if (cost.length < 3) return Math.min(...cost);

	const topIdx = cost.length;
	let dp: number[] = [];
	[dp[0], dp[1]] = [cost[0], cost[1]];

	for (let i = 2; i < cost.length; i++) {
		dp[i] = cost[i] + Math.min(dp[i - 1], dp[i - 2]);
	}

	return Math.min(dp[topIdx - 1], dp[topIdx - 2]);
};
