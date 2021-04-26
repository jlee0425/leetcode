/**
 * We have two integer sequences A and B of the same non-zero length.
 * We are allowed to swap elements A[i] and B[i].
 * Note that both elements are in the same index position in their respective sequences.
 * At the end of some number of swaps, A and B are both strictly increasing.
 * (A sequence is strictly increasing if and only if A[0] < A[1] < A[2] < ... < A[A.length - 1].)
 * Given A and B, return the minimum number of swaps to make both sequences strictly increasing.
 * It is guaranteed that the given input always makes it possible.
 *
 * @param A Num Arr
 * @param B Num Arr
 * @returns Minimum number of necessary swaps that makes both A and B strictly increasing.
 */

export const minSwap = (A: number[], B: number[]): number => {
	let n1 = 0,
		s1 = 1;

	for (let i = 1; i < A.length; i++) {
		let n2 = Number.MAX_VALUE,
			s2 = Number.MAX_VALUE;

		if (A[i - 1] < A[i] && B[i - 1] < B[i]) {
			n2 = Math.min(n2, n1);
			s2 = Math.min(s2, s1 + 1);
		}
		if (A[i - 1] < B[i] && B[i - 1] < A[i]) {
			n2 = Math.min(n2, s1);
			s2 = Math.min(s2, n1 + 1);
		}
		n1 = n2;
		s1 = s2;
	}

	return Math.min(n1, s1);
};
