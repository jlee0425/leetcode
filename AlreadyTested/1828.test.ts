import { countPoints } from '../Algorithms/1828.Num_Pts_Circle';
import { expect } from 'chai';
import { describe } from 'mocha';

describe('Queries on Number of Points Inside a Circle', () => {
	it('points = [[1,3],[3,3],[5,3],[2,2]], queries = [[2,3,1],[4,3,1],[1,1,2]]', () => {
		expect(
			countPoints(
				[
					[1, 3],
					[3, 3],
					[5, 3],
					[2, 2],
				],
				[
					[2, 3, 1],
					[4, 3, 1],
					[1, 1, 2],
				],
			),
		).to.eql([3, 2, 2]);
	});

	it('points = [[1,1],[2,2],[3,3],[4,4],[5,5]], queries = [[1,2,2],[2,2,2],[4,3,2],[4,3,3]]', () => {
		expect(
			countPoints(
				[
					[1, 1],
					[2, 2],
					[3, 3],
					[4, 4],
					[5, 5],
				],
				[
					[1, 2, 2],
					[2, 2, 2],
					[4, 3, 2],
					[4, 3, 3],
				],
			),
		).to.eql([2, 3, 2, 4]);
	});
});
