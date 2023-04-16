import { uniqueOccurrences } from './1207.Uniq_Num';
import { expect } from 'chai';
import { describe } from 'mocha';

describe('Unique Number of Occurrences', () => {
	it('arr = [1,2,2,1,1,3]', () => {
		expect(uniqueOccurrences([1, 2, 2, 1, 1, 3])).to.equal(true);
	});

	it('arr = [1,2]', () => {
		expect(uniqueOccurrences([1, 2])).to.equal(false);
	});

	it('arr = [-3,0,1,-3,1,1,1,-3,10,0]', () => {
		expect(uniqueOccurrences([-3, 0, 1, -3, 1, 1, 1, -3, 10, 0])).to.equal(
			true,
		);
	});
});
