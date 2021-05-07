/**
 * Write a function that takes an unsigned integer and
 * returns the number of '1' bits it has (also known as the Hamming weight).
 *
 * Note:
 * Note that in some languages, such as Java, there is no unsigned integer type.
 * In this case, the input will be given as a signed integer type.
 * It should not affect your implementation, as the integer's internal binary representation is the same,
 * whether it is signed or unsigned.
 * In Java, the compiler represents the signed integers using 2's complement notation.
 * Therefore, in Example 3, the input represents the signed integer. -3.
 *
 * @param n number
 * @returns number
 */

export const hammingWeight = (n: number): number => {
	// using bit manipulation
	let int = BigInt(n);
	let count = 0;
	while (int) {
		int & 1n && count++;
		int >>= 1n;
	}
	return count;
};

export const hammingWeight2 = (n: number): number => {
	const decToBin = (num: number): string => {
		return (num >>> 0).toString(2);
	};

	return decToBin(n)
		.split('')
		.filter((bit) => bit == '1').length;
};
