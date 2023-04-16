import { insert } from './57.Insert_Interval';
import { describe } from 'mocha';
import { expect } from 'chai';
describe('Insert Interval', () => {
	it('input: [[1, 3], [6, 9]], [2, 5]; output: [[1, 5], [6, 9]]', () => {
		expect(
			insert(
				[
					[1, 3],
					[6, 9],
				],
				[2, 5],
			),
		).to.eql([
			[1, 5],
			[6, 9],
		]);
	});
	it('input: [[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], [4, 8]; output: [[1, 2], [3, 10], [12, 16]]', () => {
		expect(
			insert(
				[
					[1, 2],
					[3, 5],
					[6, 7],
					[8, 10],
					[12, 16],
				],
				[4, 8],
			),
		).to.eql([
			[1, 2],
			[3, 10],
			[12, 16],
		]);
	});
	it('input: [], [5, 7]; output: [[5, 7]]', () => {
		expect(insert([], [5, 7])).to.eql([[5, 7]]);
	});
	it('input: [[1, 5]], [2, 3]; output: [[1, 5]]', () => {
		expect(insert([[1, 5]], [2, 3])).to.eql([[1, 5]]);
	});
	it('input: [[1, 5]], [2, 7]; output: [[1, 7]]', () => {
		expect(insert([[1, 5]], [2, 7])).to.eql([[1, 7]]);
	});
});
