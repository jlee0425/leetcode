import { computeArea } from '../Algorithms/223.Rect_Area';
import { expect } from 'chai';
import { describe } from 'mocha';

describe('Rectangle Area', () => {
	it('A = -3, B = 0, C = 3, D = 4, E = 0, F = -1, G = 9, H = 2', () => {
		expect(computeArea(-3, 0, 3, 4, 0, -1, 9, 2)).to.equal(45);
	});

	it('A = -2, B = -2, C = 2, D = 2, E = -2, F = -2, G = 2, H = 2', () => {
		expect(computeArea(-2, -2, 2, 2, -2, -2, 2, 2)).to.equal(16);
	});

	it('A = -2, B = -2, C = 2, D = 2, E = 3, F = 3, G = 4, H = 4', () => {
		expect(computeArea(-2, -2, 2, 2, 3, 3, 4, 4)).to.equal(17);
	});

	it('A = -2, B = -2, C = 2, D = 2, E = -4, F = 3, G = -3, H = 4', () => {
		expect(computeArea(-2, -2, 2, 2, -4, 3, -3, 4)).to.equal(17);
	});

	it('A = -2, B = -2, C = 2, D = 2, E = -3, F = -3, G = -2, H = -2', () => {
		expect(computeArea(-2, -2, 2, 2, -3, -3, -2, -2)).to.equal(17);
	});

	it('A = -2, B = -2, C = 2, D = 2, E = -2, F = 2, G = 2, H = 4', () => {
		expect(computeArea(-2, -2, 2, 2, -2, 2, 2, 4)).to.equal(24);
	});

	it('A = -2286, B = -1386, C = -2279, D = -1380, E = -2284, F = -1384, G = -2273, H = -1375', () => {
		expect(
			computeArea(-2286, -1386, -2279, -1380, -2284, -1384, -2273, -1375),
		).to.equal(121);
	});
});
