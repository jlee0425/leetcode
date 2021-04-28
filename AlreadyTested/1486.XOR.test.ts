import { xorOperation } from '../Algorithms/1486.XOR_Operation';
import { expect } from 'chai';
import { describe } from 'mocha';

describe('XOR Operations in an array', () => {
	it('input: n = 0, start = 100', () => {
		expect(() => xorOperation(0, 100)).to.throw(RangeError);
	});
	it('input: n = 0, start = -1', () => {
		expect(() => xorOperation(0, -1)).to.throw(RangeError);
	});
	it('Input: n = 5, start = 0', () => {
		expect(xorOperation(5, 0)).to.equals(8);
	});
	it('Input: n = 4, start = 3', () => {
		expect(xorOperation(4, 3)).to.equals(8);
	});
	it('Input: n = 1, start = 7', () => {
		expect(xorOperation(1, 7)).to.equals(7);
	});
	it('Input: n = 10, start = 5', () => {
		expect(xorOperation(10, 5)).to.equals(2);
	});
});
