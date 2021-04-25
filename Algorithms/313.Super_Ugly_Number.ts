/**
 * A super ugly number is a positive integer whose prime factors are in the array `primes`.
 * Given an integer `n` and an array of integers `primes`,
 *  return the `n`th super ugly number.
 * The `n`th super ugly number is guaranteed to fit in a 32-bit signed integer.
 *
 * @param n position of super ugly number
 * @param primes array of prime numbers
 * @returns nth super ugly number
 */

export const nthSuperUglyNumber = (n: number, primes: number[]): number => {
	let suglyNums = [1];
	let dpArr = new Array(primes.length).fill(0); // DP Array to avoid duplicate computation

	while (suglyNums.length < n) {
		let currUglyNum = Number.MAX_VALUE,
			minIndices = []; // DP Array for tracking dpArr

		// find next possible sugly number
		for (let i = 0, length = primes.length; i < length; i++) {
			let num = suglyNums[dpArr[i]] * primes[i];
			if (currUglyNum > num) {
				currUglyNum = num;
				minIndices = [i];
			} else if (currUglyNum == num) {
				minIndices.push(i);
			}
		}

		suglyNums.push(currUglyNum);
		minIndices.forEach((index) => dpArr[index]++);
	}

	return suglyNums[n - 1];
};
