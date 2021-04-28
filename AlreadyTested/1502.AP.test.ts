import { canMakeArithmeticProgression } from '../Algorithms/1502.Arithmetic_Progression';
import { expect } from 'chai';
import { describe } from 'mocha';

describe('Can make Arithmetic Progression From Sequence', () => {
	it('input: [3, 5, 1]; output: true', () => {
		expect(canMakeArithmeticProgression([3, 5, 1])).to.equals(true);
	});
	it('input: [1, 2, 4]; output: true', () => {
		expect(canMakeArithmeticProgression([1, 2, 4])).to.equals(false);
	});
	it('input: [1, 2]; output: true', () => {
		expect(canMakeArithmeticProgression([1, 2])).to.equals(true);
	});
});
