import { minCostClimbingStairs } from './746.Min_Cost_Stairs';
import { expect } from 'chai';
import { describe } from 'mocha';

describe('Min Cost Climbing Stairs', () => {
	it('cost = [10,15,20]', () => {
		expect(minCostClimbingStairs([10, 15, 20])).to.equal(15);
	});

	it('cost = [1,100,1,1,1,100,1,1,100,1]', () => {
		expect(
			minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]),
		).to.equal(6);
	});
});
