import { expect } from 'chai';
import { MyHashSet } from './705.HashSet';
import { describe } from 'mocha';

describe('Design HashSet', () => {
	const hs = new MyHashSet();

	it('add 1', () => {
		expect(hs.add(1)).to.equal(undefined);
	});

	it('add 2', () => {
		expect(hs.add(2)).to.equal(undefined);
	});

	it('contains 1', () => {
		expect(hs.contains(1)).to.equal(true);
	});

	it('contains 3', () => {
		expect(hs.contains(3)).to.equal(false);
	});

	it('add 2', () => {
		expect(hs.add(2)).to.equal(undefined);
	});

	it('contains 2', () => {
		expect(hs.contains(2)).to.equal(true);
	});

	it('remove 2', () => {
		expect(hs.remove(2)).to.equal(undefined);
	});

	it('contains 2', () => {
		expect(hs.contains(2)).to.equal(false);
	});
});
