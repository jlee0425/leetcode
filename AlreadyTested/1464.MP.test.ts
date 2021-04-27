import { maxProduct } from './../Algorithms/1464.MaxProduct';
import { expect } from 'chai';
import { describe } from 'mocha';

describe('Maximum Product of Two Elements in an Array', () => {
	it('input: [3, 4, 5, 2]; output: 12', () => {
		expect(maxProduct([3, 4, 5, 2])).to.equal(12);
	});
	it('input: [3, 7]; output: 12', () => {
		expect(maxProduct([3, 7])).to.equal(12);
	});
	it('input: [1, 5, 4, 5]; output: 16', () => {
		expect(maxProduct([1, 5, 4, 5])).to.equal(16);
	});
});
