import { findRelativeRanks } from '../Algorithms/506.Relative_Ranks';
import { expect } from 'chai';
import { describe } from 'mocha';

describe('Relative Ranks', () => {
	it('score = [5,4,3,2,1]', () => {
		expect(findRelativeRanks([5, 4, 3, 2, 1])).to.eql([
			'Gold Medal',
			'Silver Medal',
			'Bronze Medal',
			'4',
			'5',
		]);
	});

	it('score = [10,3,8,9,4]', () => {
		expect(findRelativeRanks([10, 3, 8, 9, 4])).to.eql([
			'Gold Medal',
			'5',
			'Bronze Medal',
			'Silver Medal',
			'4',
		]);
	});
});
