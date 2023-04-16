import { runningSum } from './1480.Running_Sum';
import { expect } from 'chai';
import { describe } from 'mocha';

describe('Running Sum of 1d Array', () => {
	it('nums = [1,1,1,1,1]', () => {
		expect(runningSum([1, 1, 1, 1, 1])).to.eql([1, 2, 3, 4, 5]);
	});

	it('nums = [1,2,3,4]', () => {
		expect(runningSum([1, 2, 3, 4])).to.eql([1, 3, 6, 10]);
	});

	it('nums = [3,1,2,10,1]', () => {
		expect(runningSum([3, 1, 2, 10, 1])).to.eql([3, 4, 6, 16, 17]);
	});
});
