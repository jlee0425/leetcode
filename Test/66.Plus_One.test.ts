import { plusOne } from './../DataStructure/66.Plus_One';
import { expect } from 'chai';
import { describe } from 'mocha';

describe('Plus One', () => {
	it('digits = [0]', () => {
		expect(plusOne([0])).to.eqls([1]);
	});

	it('digits = [1,2,3]', () => {
		expect(plusOne([1, 2, 3])).to.eqls([1, 2, 4]);
	});

	it('digits = [4,3,2,1]', () => {
		expect(plusOne([4, 3, 2, 1])).to.eqls([4, 3, 2, 2]);
	});

	it('digits = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]', () => {
		expect(
			plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]),
		).to.eqls([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 4]);
	});
});
