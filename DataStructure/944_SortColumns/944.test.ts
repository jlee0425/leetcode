import { minDeletionSize } from './944.Sort_Columns';
import { expect } from 'chai';
import { describe } from 'mocha';

describe('Delete Columns to Make Sorted', () => {
	it('strs = ["cba","daf","ghi"]', () => {
		expect(minDeletionSize(['cba', 'daf', 'ghi'])).to.equal(1);
	});

	it('strs = ["a","b"]', () => {
		expect(minDeletionSize(['a', 'b'])).to.equal(0);
	});

	it('strs = ["zyx","wvu","tsr"]', () => {
		expect(minDeletionSize(['zyx', 'wvu', 'tsr'])).to.equal(3);
	});

	it('strs = ["rrjk","furt","guzm"]', () => {
		expect(minDeletionSize(['rrjk', 'furt', 'guzm'])).to.equal(2);
	});
});
