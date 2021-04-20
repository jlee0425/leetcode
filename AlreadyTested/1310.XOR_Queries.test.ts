import { xorQueries } from '../Algorithms/1310.Xor_Queries';
import { expect } from 'chai';
import { describe } from 'mocha';

describe('XOR Queries of a subarray', () => {
	it('input: arr = [1, 3, 4, 8], queries = [[0, 1], [1, 2], [0, 3], [3, 3]]', () => {
		expect(
			xorQueries(
				[1, 3, 4, 8],
				[
					[0, 1],
					[1, 2],
					[0, 3],
					[3, 3],
				],
			),
		).to.eql([2, 7, 14, 8]);
	});

	it('Input: arr = [4, 8, 2, 10], queries = [[2, 3],[1, 3],[0, 0],[0, 3]]', () => {
		expect(
			xorQueries(
				[4, 8, 2, 10],
				[
					[2, 3],
					[1, 3],
					[0, 0],
					[0, 3],
				],
			),
		).to.eql([8, 0, 4, 4]);
	});
});
