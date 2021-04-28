import { powerfulIntegers } from '../DataStructure/970.Powerful_Integers';
import { expect } from 'chai';
import { describe } from 'mocha';

describe('Powerful Integers', () => {
	it('x= 2, y = 3, bound = 10\n result = [2, 3, 4, 5, 7, 9, 10]', () => {
		expect(powerfulIntegers(2, 3, 10)).to.eql([2, 3, 4, 5, 7, 9, 10]);
	});
	it('x= 3, y = 5, bound = 15\n result = [2, 4, 6, 8, 10, 14]', () => {
		expect(powerfulIntegers(3, 5, 15)).to.eql([2, 4, 6, 8, 10, 14]);
	});
	it('x= 2, y = 1, bound = 10\n result = [2, 4, 6, 8, 10, 14]', () => {
		expect(powerfulIntegers(2, 1, 10)).to.eql([2, 3, 5, 9]);
	});
});
