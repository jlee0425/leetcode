/**
 * You are working in a ball factory where you have `n` balls numbered
 *  from `lowLimit` up to `highLimit` inclusive; i.e., n == highLimit - lowLimit + 1;
 *
 * Your job at this factory is to put each ball in the box with a number equal to the
 *  sum of digits of balls's number.
 *  For example, the ball number `321` will be put in the box number `3 + 2 + 1 = 6`
 *  and the ball number `10` will be put in the box number `1 + 0 = 1`
 *
 * @param lowLimit starting number
 * @param highLimit last number, inclusive
 * @returns the number of balls in the box with the most balls
 */

interface Box {
	[key: string]: number;
}

export const countBalls = (lowLimit: number, highLimit: number): number => {
	// sanity check
	if (highLimit < 10) return 1;

	let boxes: Box = {};

	for (let i = lowLimit; i <= highLimit; i++) {
		let idx = sumOfDigits(i);
		boxes[idx] = boxes[idx] ? boxes[idx] + 1 : 1;
	}

	return Math.max(...Object.keys(boxes).map((k) => boxes[k]));
};

const sumOfDigits = (n: number): string => {
	let sum = 0;

	while (n > 9) {
		sum += n % 10;
		n = Math.floor(n / 10);
	}

	return sum + n + '';
};
