export const largestSumPartition = (A: number[], K: number): number => {
	if (A.length <= K) return A.reduce((acc, cur) => acc + cur);
	if (K === 1) return A.reduce((acc, cur) => acc + cur) / A.length;

	let length = A.length;
	let prefix = new Array(length + 1).fill(0);
	for (let i = 0; i < length; i++) {
		prefix[i + 1] = prefix[i] + A[i];
	}
	let dp: number[] = new Array(length).fill(0);
	for (let i = 0; i < length; i++) {
		dp[i] = (prefix[length] - prefix[i]) / (length - i);
	}
	for (let k = 0; k < K - 1; k++) {
		for (let i = 0; i < length; i++) {
			for (let j = i + 1; j < length; j++) {
				dp[i] = Math.max(dp[i], (prefix[j] - prefix[i]) / (j - i) + dp[j]);
			}
		}
	}

	return parseFloat(dp[0].toFixed(5));
};
