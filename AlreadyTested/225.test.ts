import { MyStack } from '../DataStructure/225.Stack_Using_Queue';
import { describe } from 'mocha';
import { expect } from 'chai';

describe('Implement Stack using Queues', () => {
	const stack = new MyStack();
	it('pushing 1', () => {
		expect(stack.push(1)).to.equal(undefined);
	});
	it('pushing 2', () => {
		expect(stack.push(2)).to.equal(undefined);
	});
	it('top', () => {
		expect(stack.top()).to.equal(2);
	});
	it('pop', () => {
		expect(stack.pop()).to.equal(2);
	});
	it('empty', () => {
		expect(stack.empty()).to.equal(false);
	});
});
