import { nthSuperUglyNumber } from '../DynamicProgramming/313.Super_Ugly_Number';
import { expect } from 'chai';
import { describe } from 'mocha';

describe('Super Ugly Number', () => {
	it('input: 12, [2, 7, 13, 19]; output: 32', () => {
		expect(nthSuperUglyNumber(12, [2, 7, 13, 19])).to.eqls(32);
	});

	it('input: 1, [2, 3, 5]; output: 1', () => {
		expect(nthSuperUglyNumber(1, [2, 3, 5])).to.eqls(1);
	});
});
