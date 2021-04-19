import { describe } from 'mocha';
import { expect } from 'chai';
import {
	countBits_simple,
	lookUp_countBits,
	countBits_recursive,
	brianKernighan,
	checkBits,
} from './../Algorithms/338.Counting_bits';

describe('Counting Bits', () => {
	it('testing num = 0', () => {
		expect(countBits_simple(0)).to.eql([0]);
	});
	it('testing num = 2', () => {
		expect(countBits_simple(2)).to.eql([0, 1, 1]);
	});

	it('testing num = 5', () => {
		expect(countBits_simple(5)).to.eql([0, 1, 1, 2, 1, 2]);
	});
});

describe('Counting Bits recursive', () => {
	it('testing num = 0', () => {
		expect(countBits_recursive(0)).to.eql([0]);
	});
	it('testing num = 2', () => {
		expect(countBits_recursive(2)).to.eql([0, 1, 1]);
	});

	it('testing num = 5', () => {
		expect(countBits_recursive(5)).to.eql([0, 1, 1, 2, 1, 2]);
	});
});

describe('Counting Bits lookup table', () => {
	it('testing num = 0', () => {
		expect(lookUp_countBits(0)).to.eql([0]);
	});
	it('testing num = 2', () => {
		expect(lookUp_countBits(2)).to.eql([0, 1, 1]);
	});

	it('testing num = 5', () => {
		expect(lookUp_countBits(5)).to.eql([0, 1, 1, 2, 1, 2]);
	});
});

describe('Counting Bits Brian Kernighan', () => {
	it('testing num = 0', () => {
		expect(brianKernighan(0)).to.eql([0]);
	});
	it('testing num = 2', () => {
		expect(brianKernighan(2)).to.eql([0, 1, 1]);
	});

	it('testing num = 5', () => {
		expect(brianKernighan(5)).to.eql([0, 1, 1, 2, 1, 2]);
	});
});

describe('Counting Bits checkBits', () => {
	it('testing num = 0', () => {
		expect(checkBits(0)).to.eql([0]);
	});
	it('testing num = 2', () => {
		expect(checkBits(2)).to.eql([0, 1, 1]);
	});

	it('testing num = 5', () => {
		expect(checkBits(5)).to.eql([0, 1, 1, 2, 1, 2]);
	});
});
