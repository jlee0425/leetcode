/**
 * You are given an m x n binary matrix grid.
 * An island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.)
 * You may assume all four edges of the grid are surrounded by water.
 *
 * The area of an island is the number of cells with a value 1 in the island.
 * Return the maximum area of an island in grid. If there is no island, return 0.
 *
 * @param grid : 2D array of number;
 * @returns number
 */

export const maxAreaOfIsland = (grid: number[][]): number => {
	const row = grid.length,
		col = grid[0].length;
	let maxArea = 0;

	const dfs = (r: number, c: number): number => {
		if (r < 0 || c < 0 || r >= row || c >= col || !grid[r][c]) return 0;

		grid[r][c] = 0;
		return 1 + dfs(r + 1, c) + dfs(r, c + 1) + dfs(r - 1, c) + dfs(r, c - 1);
	};

	for (let i = 0; i < row; i++) {
		for (let j = 0; j < col; j++) {
			if (grid[i][j] === 1) {
				maxArea = Math.max(maxArea, dfs(i, j));
			}
		}
	}

	return maxArea;
};
