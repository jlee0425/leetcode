import { minPairSum } from './1877.Min_Max_Sum';
import { expect } from 'chai';
import { describe } from 'mocha';

describe('Minimize Maximum Pair Sum in Array', () => {
	it('nums = [3,5,2,3]', () => {
		expect(minPairSum([3, 5, 2, 3])).to.equal(7);
	});

	it('nums = [3,5,4,2,4,6]', () => {
		expect(minPairSum([3, 5, 4, 2, 4, 6])).to.equal(8);
	});
});
