import { search } from './33.Search_In_Rotated_Sorted_Arr';
import { expect } from 'chai';
import { describe } from 'mocha';

describe('Search in Rotated Sorted Array', () => {
	it('input: [1], 0; output: -1', () => {
		expect(search([1], 0)).to.equals(-1);
	});
	it('input: [1,3], 3; output: 1', () => {
		expect(search([1, 3], 3)).to.equals(1);
	});
	it('input: [4,5,6,7,0,1,2], 0; output: 4', () => {
		expect(search([4, 5, 6, 7, 0, 1, 2], 0)).to.equals(4);
	});

	it('input: [4,5,6,7,0,1,2], 3; output: -1', () => {
		expect(search([4, 5, 6, 7, 0, 1, 2], 3)).to.equals(-1);
	});

	it('input: [1,2,3,4,-4,-3,-2], 0; output: -3', () => {
		expect(search([1, 2, 3, 4, -4, -3, -2], -3)).to.equals(5);
	});
});
