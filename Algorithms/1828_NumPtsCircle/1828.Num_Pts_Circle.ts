/**
 * You are given an array points where points[i] = [xi, yi] is the coordinates of the ith point on a 2D plane.
 * Multiple points can have the same coordinates.
 *
 * You are also given an array queries
 * where queries[j] = [xj, yj, rj] describes a circle centered at (xj, yj) with a radius of rj.
 *
 * For each query queries[j], compute the number of points inside the jth circle.
 * Points on the border of the circle are considered inside.
 *
 * Return an array answer, where answer[j] is the answer to the jth query.
 *
 * @param points 2d arr of numbers
 * @param queries 2d arr of numbers
 */

export const countPoints = (
	points: number[][],
	queries: number[][],
): number[] => {
	const counts = new Array(queries.length).fill(0);

	for (let i = 0; i < queries.length; i++) {
		for (let j = 0; j < points.length; j++) {
			if (isInCircle(queries[i], points[j])) counts[i]++;
		}
	}

	return counts;
};

const isInCircle = (circle: number[], point: number[]): boolean => {
	const [cx, cy, r] = circle;
	const [x, y] = point;
	const dist = Math.sqrt(Math.pow(cx - x, 2) + Math.pow(cy - y, 2));

	return dist <= r;
};
