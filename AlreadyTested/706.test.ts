import { MyHashMap } from '../DataStructure/706.HashMap';
import { expect } from 'chai';
import { describe } from 'mocha';

describe('Design HashSet', () => {
	const hm = new MyHashMap();

	it('put 1', () => {
		expect(hm.put(1, 1)).to.equal(undefined);
	});

	it('put 2', () => {
		expect(hm.put(2, 2)).to.equal(undefined);
	});

	it('get 1', () => {
		expect(hm.get(1)).to.equal(1);
	});

	it('get 3', () => {
		expect(hm.get(3)).to.equal(-1);
	});

	it('put 2', () => {
		expect(hm.put(2, 1)).to.equal(undefined);
	});

	it('get 2', () => {
		expect(hm.get(2)).to.equal(1);
	});

	it('remove 2', () => {
		expect(hm.remove(2)).to.equal(undefined);
	});

	it('get 2', () => {
		expect(hm.get(2)).to.equal(-1);
	});
});
