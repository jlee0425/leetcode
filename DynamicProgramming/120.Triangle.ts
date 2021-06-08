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
	let dp: number[] = [triangle[0][0]];

	for (let i = 1; i < triangle.length; i++) {
		let curStep = triangle[i];
		const prefix = [...dp];
		for (let j = 0; j < curStep.length; j++) {
			if (j === 0) {
				dp[j] = prefix[j] + curStep[j];
			} else if (j < curStep.length - 1) {
				dp[j] = Math.min(prefix[j], prefix[j - 1]) + curStep[j];
			} else {
				dp.push(curStep[j] + prefix[j - 1]);
			}
		}
	}

	return Math.min(...dp);
};
