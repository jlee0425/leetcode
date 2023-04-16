import { minimumTotal } from './120.Triangle';
import { expect } from 'chai';
import { describe } from 'mocha';

describe('Triangle', () => {
	it('triangle = [[2],[3,4],[6,5,7],[4,1,8,3]]', () => {
		expect(minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]])).to.equal(11);
	});

	it('triangle =   [[-1],[2,3],[1,-1,-3]]', () => {
		expect(minimumTotal([[-1], [2, 3], [1, -1, -3]])).to.equal(-1);
	});
});
