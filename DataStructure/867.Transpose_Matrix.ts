/**
 * Given a 2D integer array matrix, return the transpose of matrix.
 *
 * The transpose of a matrix is the matrix flipped over its main diagonal,
 * switching the matrix's row and column indices.
 *
 * @param matrix 2d array
 * @returns 2d array
 */
export const transpose = (matrix: number[][]): number[][] => {
	const tp = new Array(matrix[0].length);

	for (let i = 0; i < matrix[0].length; i++) {
		tp[i] = [];
		for (let j = 0; j < matrix.length; j++) {
			tp[i].push(matrix[j][i]);
		}
	}

	return tp;
};
