/**
 * Given an integer n,
 * return true if it is possible to represent n as the sum of distinct powers of three.
 * Otherwise, return false.
 *
 * An integer y is a power of three if there exists an integer x such that y == 3x.
 *
 * @param n number
 * @returns boolean
 */

export const checkPowersOfThree = (n: number): boolean => {
	let max = Math.floor(Math.log10(n) / Math.log10(3));

	for (let i = max; i >= 0 && n > 0; i--) {
		if (n >= Math.pow(3, i)) {
			n -= Math.pow(3, i);
		}
	}

	return n === 0;
};
