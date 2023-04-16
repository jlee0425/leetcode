import { validSquare } from './593.Valid_Square';
import { expect } from 'chai';
import { describe } from 'mocha';

describe('Valid Square', () => {
	it('p1 = [0,0], p2 = [1,1], p3 = [1,0], p4 = [0,1]', () => {
		expect(validSquare([0, 0], [1, 1], [1, 0], [0, 1])).to.equal(true);
	});

	it('p1 = [0,0], p2 = [1,1], p3 = [1,0], p4 = [0,12]', () => {
		expect(validSquare([0, 0], [1, 1], [1, 0], [0, 12])).to.equal(false);
	});

	it('p1 = [1,0], p2 = [-1,0], p3 = [0,1], p4 = [0,-1]', () => {
		expect(validSquare([1, 0], [-1, 0], [0, 1], [0, -1])).to.equal(true);
	});

	it('p1 = [0,0], p2 = [1,1], p3 = [1,0], p4 = [1,1]', () => {
		expect(validSquare([0, 0], [1, 1], [1, 0], [1, 1])).to.equal(false);
	});

	it('p1 = [1,1], p2 = [5,3], p3 = [3,5], p4 = [7,7]', () => {
		expect(validSquare([1, 1], [5, 3], [3, 5], [7, 7])).to.equal(false);
	});
});
