import { numsSameConseDiff } from '../Algorithms/967.Num_with_Consec_Diff';
import { expect } from 'chai';
import { describe } from 'mocha';

describe('Numbers With Same Consecutive Differences', () => {
	it('n = 3, k = 7', () => {
		expect(numsSameConseDiff(3, 7)).to.include.members([
			181,
			292,
			707,
			818,
			929,
		]);
	});

	it('n = 2, k = 1', () => {
		expect(numsSameConseDiff(2, 1)).to.include.members([
			10,
			12,
			21,
			23,
			32,
			34,
			43,
			45,
			54,
			56,
			65,
			67,
			76,
			78,
			87,
			89,
			98,
		]);
	});

	it('n = 2, k = 0', () => {
		expect(numsSameConseDiff(2, 0)).to.include.members([
			11,
			22,
			33,
			44,
			55,
			66,
			77,
			88,
			99,
		]);
	});

	it('n = 2, k = 2', () => {
		expect(numsSameConseDiff(2, 2)).to.include.members([
			13,
			20,
			24,
			31,
			35,
			42,
			46,
			53,
			57,
			64,
			68,
			75,
			79,
			86,
			97,
		]);
	});
});
