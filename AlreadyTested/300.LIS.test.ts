import { lengthOfLIS, LISWithBS } from '../DynamicProgramming/300.LIS';
import { describe } from 'mocha';
import { expect } from 'chai';

describe('Longest Increasing Subsequence', () => {
	it('input: [10, 9, 2, 5, 3, 7, 101, 18]; output: 4', () => {
		expect(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18])).to.equals(4);
	});

	it('input: [0, 1, 0, 3, 2, 3]; output: 4', () => {
		expect(lengthOfLIS([0, 1, 0, 3, 2, 3])).to.equals(4);
	});

	it('input: [7, 7, 7, 7, 7, 7, 7]; output: 1', () => {
		expect(lengthOfLIS([7, 7, 7, 7, 7, 7, 7])).to.equals(1);
	});
	it('input: [5, 2, 8, 6, 3, 6, 9, 5]; output: 4', () => {
		expect(lengthOfLIS([5, 2, 8, 6, 3, 6, 9, 5])).to.equals(4);
	});
});

describe('Longest Increasing Subsequence with Binary Search', () => {
	it('input: [10, 9, 2, 5, 3, 7, 101, 18]; output: 4', () => {
		expect(LISWithBS([10, 9, 2, 5, 3, 7, 101, 18])).to.equals(4);
	});

	it('input: [0, 1, 0, 3, 2, 3]; output: 4', () => {
		expect(LISWithBS([0, 1, 0, 3, 2, 3])).to.equals(4);
	});

	it('input: [7, 7, 7, 7, 7, 7, 7]; output: 1', () => {
		expect(LISWithBS([7, 7, 7, 7, 7, 7, 7])).to.equals(1);
	});
	it('input: [5, 2, 8, 6, 3, 6, 9, 5]; output: 4', () => {
		expect(LISWithBS([5, 2, 8, 6, 3, 6, 9, 5])).to.equals(4);
	});
});
