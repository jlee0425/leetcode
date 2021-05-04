export const tribonacci = (n: number): number => {
	let dp: number[] = new Array(n + 1);
	[dp[0], dp[1], dp[2]] = [0, 1, 1];
	if (n < 3) return dp[n];

	for (let i = 3; i < n + 1; i++) {
		dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
	}

	return dp[dp.length - 1];
};
