import { readBinaryWatch } from '../Algorithms/401.Binary_Watch';
import { describe } from 'mocha';
import { expect } from 'chai';

describe('Binary Watch', () => {
	it('9', () => {
		expect(readBinaryWatch(9)).to.include.members([]);
	});

	it('1', () => {
		expect(readBinaryWatch(1)).to.include.members([
			'0:01',
			'0:02',
			'0:04',
			'0:08',
			'0:16',
			'0:32',
			'1:00',
			'2:00',
			'4:00',
			'8:00',
		]);
	});
});
