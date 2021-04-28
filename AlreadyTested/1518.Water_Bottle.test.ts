import { numWaterBottles } from '../Algorithms/1518.Water_Bottles';
import { expect } from 'chai';
import { describe } from 'mocha';

describe('Water Bottles', () => {
	it('input: 9, 3; output: 13', () => {
		expect(numWaterBottles(9, 3)).to.equals(13);
	});
	it('input: 15, 4; output: 19', () => {
		expect(numWaterBottles(15, 4)).to.equals(19);
	});
	it('input: 5, 5; output: 6', () => {
		expect(numWaterBottles(5, 5)).to.equals(6);
	});
	it('input: 2, 3; output: 2', () => {
		expect(numWaterBottles(2, 3)).to.equals(2);
	});
});
