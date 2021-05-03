import { largestSumPartition } from '../DynamicProgramming/813.Largest_Sum_Partition';
import { expect } from 'chai';
import { describe } from 'mocha';

describe('Largest Sum of Averages', () => {
	it('A = [9,1,2,3,9],  K = 3', () => {
		expect(largestSumPartition([9, 1, 2, 3, 9], 3)).to.equal(20);
	});

	it('A = [4,1,7,5,6,2,3], K = 4', () => {
		expect(largestSumPartition([4, 1, 7, 5, 6, 2, 3], 4)).to.equal(18.16667);
	});
});
