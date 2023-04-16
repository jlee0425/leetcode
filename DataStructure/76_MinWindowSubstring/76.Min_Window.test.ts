import { minWindow } from './76.Minimum_Window_Substring';
import { expect } from 'chai';
import { describe } from 'mocha';

describe('Minimum Window Substring', () => {
	it('input: "ADOBECODEBANC", "ABC", output: "BANC"', () => {
		expect(minWindow('ADOBECODEBANC', 'ABC')).to.equal('BANC');
	});
	it('input: "a", "a"', () => {
		expect(minWindow('a', 'a')).to.equal('a');
	});
});
