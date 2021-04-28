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
	let buckets: number[] = new Array(bound + 1).fill(0);
	let result = [];

	const getMax = (a: number) => {
		if (a < 2) return a;
		return Math.floor(Math.log(bound) / Math.log(a));
	};
	let xMax = getMax(x);
	let yMax = getMax(y);

	for (let i = 0; i <= xMax; i++) {
		for (let j = 0; j <= yMax; j++) {
			let num = Math.pow(x, i) + Math.pow(y, j);
			if (num <= bound) buckets[num]++;
		}
	}

	for (let i = 0; i < bound + 1; i++) {
		if (buckets[i] > 0) result.push(i);
	}

	return result;
};
