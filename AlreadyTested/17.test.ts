import { letterCombinations } from '../Algorithms/17.Letter_Comb';
import { expect } from 'chai';
import { describe } from 'mocha';

describe('Letter Combinations of a Phone Number', () => {
	it('digits = ""', () => {
		expect(letterCombinations('')).to.eql([]);
	});

	it('digits = "2"', () => {
		expect(letterCombinations('2')).to.include.members(['a', 'b', 'c']);
	});

	it('digits = "23"', () => {
		expect(letterCombinations('23')).to.include.members([
			'ad',
			'ae',
			'af',
			'bd',
			'be',
			'bf',
			'cd',
			'ce',
			'cf',
		]);
	});

	it('digits = "234"', () => {
		expect(letterCombinations('234')).to.include.members([
			'adg',
			'adh',
			'adi',
			'aeg',
			'aeh',
			'aei',
			'afg',
			'afh',
			'afi',
			'bdg',
			'bdh',
			'bdi',
			'beg',
			'beh',
			'bei',
			'bfg',
			'bfh',
			'bfi',
			'cdg',
			'cdh',
			'cdi',
			'ceg',
			'ceh',
			'cei',
			'cfg',
			'cfh',
			'cfi',
		]);
	});
});
