import { findTheWinner } from './1823.Circular_Game';
import { expect } from 'chai';
import { describe } from 'mocha';

describe('Find the Winner of the Circular Game', () => {
	it('n = 5, k = 2', () => {
		expect(findTheWinner(5, 2)).to.equal(3);
	});

	it('n = 6, k = 5', () => {
		expect(findTheWinner(6, 5)).to.equal(1);
	});
});
