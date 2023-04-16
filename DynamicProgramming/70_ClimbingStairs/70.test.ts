import { climbStairs } from './70.Climbing_Stairs';
import { expect } from 'chai';
import { describe } from 'mocha';

describe('Climbing Stairs', () => {
	it('n = 2', () => {
		expect(climbStairs(2)).to.equal(2);
	});

	it('n = 3', () => {
		expect(climbStairs(3)).to.equal(3);
	});
});
