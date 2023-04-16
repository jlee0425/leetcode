import {
	hammingWeight,
	hammingWeight2,
} from './191.Number_of_1_Bits';
import { expect } from 'chai';
import { describe } from 'mocha';

describe('Number of 1 Bits', () => {
	it('n = 00000000000000000000000000001011', () => {
		expect(hammingWeight(0b00000000000000000000000000001011)).to.equal(3);
	});

	it('n = 00000000000000000000000010000000', () => {
		expect(hammingWeight(0b00000000000000000000000010000000)).to.equal(1);
	});

	it('n = 11111111111111111111111111111101', () => {
		expect(hammingWeight(0b11111111111111111111111111111101)).to.equal(31);
	});
});

describe('Number of 1 Bits stringify', () => {
	it('n = 00000000000000000000000000001011', () => {
		expect(hammingWeight2(0b00000000000000000000000000001011)).to.equal(3);
	});

	it('n = 00000000000000000000000010000000', () => {
		expect(hammingWeight2(0b00000000000000000000000010000000)).to.equal(1);
	});

	it('n = 11111111111111111111111111111101', () => {
		expect(hammingWeight2(0b11111111111111111111111111111101)).to.equal(31);
	});
});
