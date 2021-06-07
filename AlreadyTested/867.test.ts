import { transpose } from '../DataStructure/867.Transpose_Matrix';
import { expect } from 'chai';
import { describe } from 'mocha';

describe('Transpose Matrix', () => {
	it('matrix = [[1,2,3],[4,5,6],[7,8,9]]', () => {
		expect(
			transpose([
				[1, 2, 3],
				[4, 5, 6],
				[7, 8, 9],
			]),
		).to.eql([
			[1, 4, 7],
			[2, 5, 8],
			[3, 6, 9],
		]);
	});

	it('matrix = [[1,2,3],[4,5,6]]', () => {
		expect(
			transpose([
				[1, 2, 3],
				[4, 5, 6],
			]),
		).to.eql([
			[1, 4],
			[2, 5],
			[3, 6],
		]);
	});
});
