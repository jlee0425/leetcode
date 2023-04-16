import { minSwap } from './801.Min_Swap';
import { describe } from 'mocha';
import { expect } from 'chai';

describe("Minimum Swap for creating strictly increasing Num Arr's", () => {
	it('input: [1,3,5,4], [1,2,3,7]; output: 1', () => {
		expect(minSwap([1, 3, 5, 4], [1, 2, 3, 7])).to.eqls(1);
	});
	it('input: [0,3,5,8,9], [2,1,4,6,9]; output: 1', () => {
		expect(minSwap([0, 3, 5, 8, 9], [2, 1, 4, 6, 9])).to.eqls(1);
	});
	it('input: [0,4,4,5,9],  [0,1,6,8,10]; output: 1', () => {
		expect(minSwap([0, 4, 4, 5, 9], [0, 1, 6, 8, 10])).to.eqls(1);
	});
	it('input: [3,3,8,9,10],  [1,7,4,6,8]; output: 1', () => {
		expect(minSwap([3, 3, 8, 9, 10], [1, 7, 4, 6, 8])).to.eqls(1);
	});
	it('input: [0,7,8,10,10,11,12,13,19,18], [4,4,5,7,11,14,15,16,17,20]; output: 4', () => {
		expect(
			minSwap(
				[0, 7, 8, 10, 10, 11, 12, 13, 19, 18],
				[4, 4, 5, 7, 11, 14, 15, 16, 17, 20],
			),
		).to.eqls(4);
	});
});
