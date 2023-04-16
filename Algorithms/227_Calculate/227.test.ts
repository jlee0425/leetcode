import { calculate } from './227.Calc';
import { expect } from 'chai';
import { describe } from 'mocha';

describe('Basic Calculator II', () => {
	it('s= "2048"', () => {
		expect(calculate('2048')).to.equal(2048);
	});

	it('s= "3+2*2"', () => {
		expect(calculate('3+2*2')).to.equal(7);
	});

	it('s= " 3/2 "', () => {
		expect(calculate(' 3/2 ')).to.equal(1);
	});

	it('s= " 3+5 / 2 "', () => {
		expect(calculate(' 3+5 / 2 ')).to.equal(5);
	});

	it('s= "14-3/2"', () => {
		expect(calculate('14-3/2')).to.equal(13);
	});

	it('s= "1*2-3/4+5*6-7*8+9/10"', () => {
		expect(calculate('1*2-3/4+5*6-7*8+9/10')).to.equal(-24);
	});
	it('s= "10000-1000/10+100*1"', () => {
		expect(calculate('10000-1000/10+100*1')).to.equal(10000);
	});
});
