export const uniqueOccurrences = (arr: number[]): boolean => {
	let map = new Map();

	for (let n of arr) {
		map.set(n, map.get(n) + 1 || 1);
	}

	let occMap = new Map();
	for (let n of map.values()) {
		let occurred = occMap.get(n);
		if (occurred) {
			return false;
		}
		occMap.set(n, true);
	}

	return true;
};
