/**
 * Given a triangle array, return the minimum path sum from top to bottom.
 *
 * For each step, you may move to an adjacent number of the row below.
 * More formally, if you are on index i on the current row,
 * you may move to either index i or index i + 1 on the next row.
 *
 * @param triangle 2d array of number
 * @returns number
 */
export const minimumTotal = (triangle: number[][]): number => {
	if (triangle.length < 2) return triangle[0][0];

	const length = triangle.length;
	let dp: number[] = new Array(length);

	for (let i = 0; i < length; i++) {
		dp[i] = triangle[length - 1][i];
	}

	for (let i = length - 2; i >= 0; i--) {
		const tempDP = new Array(i + 1);
		for (let j = i; j >= 0; j--) {
			tempDP[j] = Math.min(dp[j], dp[j + 1]) + triangle[i][j];
		}
		dp = tempDP;
	}

	return dp[0];
};
