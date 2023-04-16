import { isPathCrossing } from './1496.Path_Crossing';
import { expect } from 'chai';
import { describe } from 'mocha';

describe('Path Crossing', () => {
	it('path = "S"', () => {
		expect(isPathCrossing('')).to.equal(false);
	});

	it('path = "NES"', () => {
		expect(isPathCrossing('NES')).to.equal(false);
	});

	it('path = "NESWW"', () => {
		expect(isPathCrossing('NESWW')).to.equal(true);
	});

	it('path = "NNSWWEWSSESSWENNW"', () => {
		expect(isPathCrossing('NNSWWEWSSESSWENNW')).to.equal(true);
	});
});
