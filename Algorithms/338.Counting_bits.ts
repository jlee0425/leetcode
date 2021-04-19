/**
 * https://leetcode.com/problems/counting-bits/
  Given an integer num, return an array of the number of 1's 
  in the binary representation of every number in the range [0, num].

	Example 1:
		Input: num = 2
		Output: [0,1,1]
		Explanation:
		0 --> 0
		1 --> 1
		2 --> 10

	Example 2:
		Input: num = 5
		Output: [0,1,1,2,1,2]
		Explanation:
		0 --> 0
		1 --> 1
		2 --> 10
		3 --> 11
		4 --> 100
		5 --> 101

	Constraints:
		0 <= num <= 105
	
	Follow up:
		It is very easy to come up with a solution with run time O(32n). Can you do it in linear time O(n) and possibly in a single pass?
		Could you solve it in O(n) space complexity?
		Can you do it without using any built-in function (i.e., like __builtin_popcount in C++)?
 */

// O(n * log(n))
export const countBits_simple = (num: number): number[] => {
	let res: number[] = [];

	for (let i = 0; i <= num; i++) {
		let count = 0;
		let current = i;
		while (!!current) {
			count += current & 1;
			current >>= 1;
		}
		res[i] = count;
	}

	return res;
};

// O(n * log(n))
export const countBits_recursive = (num: number): number[] => {
	let res: number[] = [];
	for (let i = 0; i <= num; i++) {
		res[i] = recursiveCountBits(i);
	}

	return res;
};

const recursiveCountBits = (num: number): number => {
	if (!num) return 0;
	return (num & 1) + recursiveCountBits(num >> 1);
};

// O(log(n) * k), where k equals the number of set bits of the given number
export const brianKernighan = (num: number): number[] => {
	let res: number[] = [];

	for (let i = 0; i <= num; i++) {
		let count = 0,
			current = i;
		while (current) {
			current &= current - 1;
			count++;
		}
		res[i] = count;
	}

	return res;
};

// O(n)
const setUpLookupTable = (): number[] => {
	const table: number[] = new Array(256);

	table[0] = 0;
	for (let i = 0; i < 256; i++) {
		table[i] = (i & 1) + table[Math.floor(i / 2)];
	}

	return table;
};

export const lookUp_countBits = (num: number): number[] => {
	const lookupTable: number[] = setUpLookupTable();
	let res: number[] = [];

	for (let i = 0; i <= num; i++) {
		res[i] =
			lookupTable[i & 0xff] +
			lookupTable[(i >> 8) & 0xff] +
			lookupTable[(i >> 16) & 0xff] +
			lookupTable[i >> 24];
	}

	return res;
};

// O(n * n)
export const checkBits = (num: number): number[] => {
	let res: number[] = [];

	for (let i = 0; i <= num; i++) {
		let count = 0;
		for (let j = 0; j < 4 * 8; j++) {
			if ((i & (1 << j)) != 0) {
				count++;
			}
		}
		res[i] = count;
	}

	return res;
};

// study: https://www.geeksforgeeks.org/count-set-bits-in-an-integer/
