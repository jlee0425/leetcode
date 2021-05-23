import { subsetXORSum } from '../DataStructure/1863.Subset_Xor';
import { describe } from 'mocha';
import { expect } from 'chai';

describe('Sum of All Subset XOR Totals', () => {
	it('nums=[1,3]', () => {
		expect(subsetXORSum([1, 3])).to.equal(6);
	});

	it('nums=[5,1,6]', () => {
		expect(subsetXORSum([5, 1, 6])).to.equal(28);
	});

	it('nums=[3,4,5,6,7,8]', () => {
		expect(subsetXORSum([3, 4, 5, 6, 7, 8])).to.equal(480);
	});
});
