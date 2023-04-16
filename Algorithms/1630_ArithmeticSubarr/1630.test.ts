import { checkArithmeticSubarrays } from './1630.Arithmetic_Subarr';
import { expect } from 'chai';
import { describe } from 'mocha';

describe('Arithmetic Subarrays', () => {
	it('nums = [4,6,5,9,3,7], l = [0,0,2], r = [2,3,5]', () => {
		expect(
			checkArithmeticSubarrays([4, 6, 5, 9, 3, 7], [0, 0, 2], [2, 3, 5]),
		).to.eql([true, false, true]);
	});

	it('nums = [-12,-9,-3,-12,-6,15,20,-25,-20,-15,-10], l = [0,1,6,4,8,7], r = [4,4,9,7,9,10]', () => {
		expect(
			checkArithmeticSubarrays(
				[-12, -9, -3, -12, -6, 15, 20, -25, -20, -15, -10],
				[0, 1, 6, 4, 8, 7],
				[4, 4, 9, 7, 9, 10],
			),
		).to.eql([false, true, false, false, true, true]);
	});
});
