/**
 * Given the coordinates of four points in 2D space p1, p2, p3 and p4,
 * return true if the four points construct a square.
 * The coordinate of a point pi is represented as [xi, yi]. The input is not given in any order.
 *
 * A valid square has four equal sides with positive length and four equal angles (90-degree angles).
 *
 * @param p1 point
 * @param p2 point
 * @param p3 point
 * @param p4 point
 * @returns boolean
 */

export const validSquare = (
	p1: number[],
	p2: number[],
	p3: number[],
	p4: number[],
): boolean => {
	if (
		isSame(p1, p2) ||
		isSame(p1, p3) ||
		isSame(p1, p4) ||
		isSame(p2, p3) ||
		isSame(p2, p4) ||
		isSame(p3, p4)
	) {
		return false;
	}

	let set = new Set();

	set.add(getDistance(p1, p2));
	set.add(getDistance(p1, p3));
	set.add(getDistance(p1, p4));
	set.add(getDistance(p2, p3));
	set.add(getDistance(p2, p4));
	set.add(getDistance(p3, p4));

	return set.size === 2;
};

const isSame = (p1: number[], p2: number[]): boolean => {
	return p1[0] === p2[0] && p1[1] === p2[1];
};

const getDistance = (p1: number[], p2: number[]): number => {
	return Math.pow(p1[0] - p2[0], 2) + Math.pow(p1[1] - p2[1], 2);
};
