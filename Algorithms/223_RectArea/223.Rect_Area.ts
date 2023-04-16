/**
 * Given the coordinates of two rectilinear rectangles in a 2D plane,
 * return the total area covered by the two rectangles.
 * The first rectangle is defined by its bottom-left corner (A, B) and its top-right corner (C, D).
 * The second rectangle is defined by its bottom-left corner (E, F) and its top-right corner (G, H).
 *
 * @param A number
 * @param B number
 * @param C number
 * @param D number
 * @param E number
 * @param F number
 * @param G number
 * @param H number
 * @returns number; total area of rectangles
 */

export const computeArea = (
	A: number,
	B: number,
	C: number,
	D: number,
	E: number,
	F: number,
	G: number,
	H: number,
): number => {
	let rectA = getArea(A, B, C, D),
		rectB = getArea(E, F, G, H);

	let x1 = Math.max(A, E),
		y1 = Math.max(B, F),
		x2 = Math.min(C, G),
		y2 = Math.min(D, H);

	if (x1 < x2 && y1 < y2) {
		return rectA + rectB - getArea(x1, y1, x2, y2);
	}
	return rectA + rectB;
};

const getArea = (x1: number, y1: number, x2: number, y2: number): number => {
	return (x2 - x1) * (y2 - y1);
};
