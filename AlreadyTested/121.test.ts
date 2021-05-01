import { maxProfit } from '../DynamicProgramming/121.Stock';
import { expect } from 'chai';
import { describe } from 'mocha';

describe('Best Time to Buy and Sell Stock', () => {
	it('prices = [7,1,5,3,6,4]', () => {
		expect(maxProfit([7, 1, 5, 3, 6, 4])).to.equal(5);
	});

	it('prices = [7,6,4,3,1]', () => {
		expect(maxProfit([7, 6, 4, 3, 1])).to.equal(0);
	});
});
