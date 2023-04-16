import { checkPowersOfThree } from './1780.Powers_of_Three';
import { expect } from 'chai';
import { describe } from 'mocha';

describe('Check if Number is a Sum of Powers of Three', () => {
	it('n = 12', () => {
		expect(checkPowersOfThree(12)).to.equal(true);
	});

	it('n = 91', () => {
		expect(checkPowersOfThree(91)).to.equal(true);
	});

	it('n = 21', () => {
		expect(checkPowersOfThree(21)).to.equal(false);
	});
});
