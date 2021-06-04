import { isSumEqual } from './../DataStructure/1880.Sum_2_Words';
import { expect } from 'chai';
import { describe } from 'mocha';

describe('Check if Word Equals Summation of Two Words', () => {
	it('firstWord = "acb", secondWord = "cba", targetWord = "cdb"', () => {
		expect(isSumEqual('acb', 'cba', 'cdb')).to.equal(true);
	});

	it('firstWord = "aaa", secondWord = "a", targetWord = "aab"', () => {
		expect(isSumEqual('aaa', 'a', 'aab')).to.equal(false);
	});

	it('firstWord = "aaa", secondWord = "a", targetWord = "aaaa"', () => {
		expect(isSumEqual('aaa', 'a', 'aaaa')).to.equal(true);
	});
});
