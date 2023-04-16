/**
 * A pangram is a sentence where every letter of the English alphabet appears at least once.
 * Given a string sentence containing only lowercase English letters,
 * return true if sentence is a pangram, or false otherwise.
 *
 * @param sentence string
 * @returns boolean
 */

export const checkIfPangram = (sentence: string): boolean => {
	return 'abcdefghijklmnopqrstuvwxyz'
		.split('')
		.every((c) => sentence.includes(c));
};
