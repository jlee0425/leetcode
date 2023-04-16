/**
 * Given three integers x, y, and bound,
 * return a list of all the powerful integers that have a value less than or equal to bound.
 * An integer is powerful if it can be represented as xi + yj for some integers i >= 0 and j >= 0.
 * You may return the answer in any order. In your answer, each value should occur at most once.
 *
 * @param x integer number
 * @param y integer number
 * @param bound maximum number of x^i + y^j
 * @returns an array of numbers of x^i + y^j that are less or equal to bound
 */

export const powerfulIntegers = (
	x: number,
	y: number,
	bound: number,
): number[] => {
	let boundedX: number[] = createBoundedPIs(x, bound);
	let boundedY: number[] = createBoundedPIs(y, bound);

	let result = new Set<number>();
	for (let i of boundedX) {
		for (let y of boundedY) {
			if (i + y <= bound) result.add(i + y);
		}
	}

	return Array.from(result);
};

const createBoundedPIs = (n: number, bound: number): number[] => {
	let result = [1];
	let curr = n;

	if (n < 2) return result;

	while (curr < bound) {
		result.push(curr);
		curr *= n;
	}

	return result;
};
