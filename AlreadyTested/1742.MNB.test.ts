import { countBalls } from '../DataStructure/1742.Max_Num_Balls';
import { expect } from 'chai';
import { describe } from 'mocha';

describe('Maximum Number of Balls in a Box', () => {
	it('input: 1, 10; output: 2', () => {
		expect(countBalls(1, 10)).to.equal(2);
	});

	it('input: 5, 15; output: 2', () => {
		expect(countBalls(5, 15)).to.equal(2);
	});

	it('input: 19, 25; output: 2', () => {
		expect(countBalls(19, 28)).to.equal(2);
	});

	it('input: 4, 7; output: 1', () => {
		expect(countBalls(4, 7)).to.equal(1);
	});
});
