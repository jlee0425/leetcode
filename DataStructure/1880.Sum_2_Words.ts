/**
 *
 * @param firstWord string
 * @param secondWord string
 * @param targetWord string
 */
export const isSumEqual = (
	firstWord: string,
	secondWord: string,
	targetWord: string,
): boolean => {
	const map = {
		a: 0,
		b: 1,
		c: 2,
		d: 3,
		e: 4,
		f: 5,
		g: 6,
		h: 7,
		i: 8,
		j: 9,
	};

	const getNumOfWord = (str: string): number => {
		let num = 0;
		for (let c of str) {
			num = num * 10 + map[c];
		}
		return num;
	};

	return (
		getNumOfWord(firstWord) + getNumOfWord(secondWord) ===
		getNumOfWord(targetWord)
	);
};
