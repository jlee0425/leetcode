import { findingUsersActiveMinutes } from './1817.UAM';
import { expect } from 'chai';
import { describe } from 'mocha';

describe('Finding the Users Active Minutes', () => {
	it('logs = [[0,5],[1,2],[0,2],[0,5],[1,3]], k = 5', () => {
		expect(
			findingUsersActiveMinutes(
				[
					[0, 5],
					[1, 2],
					[0, 2],
					[0, 5],
					[1, 3],
				],
				5,
			),
		).to.eql([0, 2, 0, 0, 0]);
	});

	it('logs = [[1,1],[2,2],[2,3]], k = 4', () => {
		expect(
			findingUsersActiveMinutes(
				[
					[1, 1],
					[2, 2],
					[2, 3],
				],
				4,
			),
		).to.eql([1, 1, 0, 0]);
	});
});
