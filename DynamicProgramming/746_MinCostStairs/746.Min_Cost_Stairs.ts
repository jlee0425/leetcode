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

	let dp: number[] = new Array(cost.length + 1).fill(0);

	for (let i = 2; i < dp.length; i++) {
		let oneStep = cost[i - 1] + dp[i - 1];
		let twoStep = cost[i - 2] + dp[i - 2];
		dp[i] = Math.min(oneStep, twoStep);
	}

	return dp[dp.length - 1];
};
