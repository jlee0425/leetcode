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
