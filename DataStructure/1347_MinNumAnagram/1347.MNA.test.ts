import { minSteps } from './1347.Min_Num_Anagram';
import { expect } from 'chai';
import { describe } from 'mocha';

describe('Minimum Number of Steps to Make Two Strings Anagram', () => {
	it('s = "bab", t = "aba"', () => {
		expect(minSteps('bab', 'aba')).to.equal(1);
	});

	it('s = "anagram", t = "mangaar"', () => {
		expect(minSteps('anagram', 'mangaar')).to.equal(0);
	});

	it('s = "leetcode", t = "practice"', () => {
		expect(minSteps('leetcode', 'practice')).to.equal(5);
	});

	it('s = "xxyyzz", t = "xxyyzz"', () => {
		expect(minSteps('xxyyzz', 'xxyyzz')).to.equal(0);
	});

	it('s = "friend", t = "family"', () => {
		expect(minSteps('friend', 'family')).to.equal(4);
	});

	it('s = "friend", t = "family"', () => {
		expect(minSteps('friend', 'family')).to.equal(4);
	});
});
