import { MyQueue } from '../DataStructure/232.Queue_using_Stack';
import { describe } from 'mocha';
import { expect } from 'chai';

describe('Implement Stack using Queues', () => {
	const queue = new MyQueue();
	it('pushing 1', () => {
		expect(queue.push(1)).to.equal(undefined);
	});
	it('pushing 2', () => {
		expect(queue.push(2)).to.equal(undefined);
	});
	it('top', () => {
		expect(queue.peek()).to.equal(1);
	});
	it('pop', () => {
		expect(queue.pop()).to.equal(1);
	});
	it('empty', () => {
		expect(queue.empty()).to.equal(false);
	});
});
