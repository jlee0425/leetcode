import { minPartitions } from '../Algorithms/1689.Deci_Bin';
import { expect } from 'chai';
import { describe } from 'mocha';

describe('Partitioning Into Minimum Number Of Deci-Binary Numbers', () => {
	it('n = "32"', () => {
		expect(minPartitions('32')).to.equal(3);
	});

	it('n = "82734"', () => {
		expect(minPartitions('82734')).to.equal(8);
	});

	it('n = "27346209830709182346"', () => {
		expect(minPartitions('27346209830709182346')).to.equal(9);
	});
});
