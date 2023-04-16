import { tribonacci } from './1137.Nth_Tribonacci';
import { expect } from 'chai';
import { describe } from 'mocha';

describe('N-th Tribonacci Number', () => {
	it('n = 0', () => {
		expect(tribonacci(0)).to.equal(0);
	});

	it('n = 4', () => {
		expect(tribonacci(4)).to.equal(4);
	});

	it('n = 25', () => {
		expect(tribonacci(25)).to.equal(1389537);
	});
});
