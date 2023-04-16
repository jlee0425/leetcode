/**
 * Return all non-negative integers of length n such that
 * the absolute difference between every two consecutive digits is k.
 *
 * Note that every number in the answer must not have leading zeros.
 * For example, 01 has one leading zero and is invalid.
 *
 * You may return the answer in any order.
 *
 * @param n number
 * @param k number
 * @returns array of numbers
 */
export const numsSameConseDiff = (n: number, k: number): number[] => {
	let ans: number[] = [];

	const dfs = (cur: number, digits: number): void => {
		if (digits === 0) {
			ans.push(cur);
			return;
		}
		let lastDigit = cur % 10;
		let nextDigits = new Set([lastDigit + k, lastDigit - k]);

		for (let digit of nextDigits) {
			if (digit >= 0 && digit < 10) {
				dfs(cur * 10 + digit, digits - 1);
			}
		}
	};

	for (let i = 1; i < 10; i++) {
		dfs(i, n - 1);
	}

	return ans;
};
