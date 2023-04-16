import { maxAreaOfIsland } from './MaxIsland';
import { expect } from 'chai';
import { describe } from 'mocha';

describe('Max Area of Island', () => {
	it('grid = [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]', () => {
		expect(
			maxAreaOfIsland([
				[0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
				[0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
				[0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
			]),
		).to.equal(6);
	});
});