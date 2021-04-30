import {
	singleNumber,
	singleNumber_Bit,
} from '../Algorithms/260.Single_Number';
import { expect } from 'chai';
import { describe } from 'mocha';

describe('Single Number III', () => {
	it('nums = [1,2,1,3,2,5]', () => {
		expect(singleNumber([1, 2, 1, 3, 2, 5])).to.eql([3, 5]);
	});

	it('nums = [-1, 0]', () => {
		expect(singleNumber([-1, 0])).to.eql([-1, 0]);
	});

	it('nums = [0, 1]', () => {
		expect(singleNumber([0, 1])).to.eql([0, 1]);
	});

	it('nums = [1,2,2,7,3,3]', () => {
		expect(singleNumber([1, 2, 2, 3, 7, 3])).to.eql([1, 7]);
	});
});

describe('Single Number III using Bit Manipulation', () => {
	it('nums = [-1, 0]', () => {
		expect(singleNumber_Bit([-1, 0])).to.eql([-1, 0]);
	});

	it('nums = [0, 1]', () => {
		expect(singleNumber_Bit([0, 1])).to.eql([1, 0]);
	});

	it('nums = [1,2,1,3,2,5]', () => {
		expect(singleNumber_Bit([1, 2, 1, 3, 2, 5])).to.eql([3, 5]);
	});

	it('nums = [4,1,1,3,7,3]', () => {
		expect(singleNumber_Bit([4, 1, 1, 3, 7, 3])).to.eql([7, 4]);
	});

	it('nums = [1,2,2,0,0,7,3,3]', () => {
		expect(singleNumber_Bit([4, 1, 1, 0, 0, 3, 7, 3])).to.eql([7, 4]);
	});
});
