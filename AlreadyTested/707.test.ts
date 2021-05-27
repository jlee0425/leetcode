import { MyLinkedList } from '../DataStructure/707.Linked_List';
import { describe } from 'mocha';
import { expect } from 'chai';

describe('Design Linked List', () => {
	describe('LL 1', () => {
		const ll = new MyLinkedList();

		it('add head 1', () => {
			expect(ll.addAtHead(1)).to.equal(undefined);
		});

		it('add tail 3', () => {
			expect(ll.addAtTail(3)).to.equal(undefined);
		});

		it('add at index 1', () => {
			expect(ll.addAtIndex(1, 2)).to.equal(undefined);
		});

		it('get 0', () => {
			expect(ll.get(0)).to.equal(1);
		});

		it('get 1', () => {
			expect(ll.get(1)).to.equal(2);
		});

		it('get 2', () => {
			expect(ll.get(2)).to.equal(3);
		});

		it('delete index 1', () => {
			expect(ll.deleteAtIndex(1)).to.equal(undefined);
		});

		it('get 1', () => {
			expect(ll.get(1)).to.equal(3);
		});
	});

	describe('Linked List 2', () => {
		const ll2 = new MyLinkedList();
		it('add at 0', () => {
			expect(ll2.addAtIndex(0, 10)).to.equal(undefined);
		});
		it('add at 0', () => {
			expect(ll2.addAtIndex(0, 20)).to.equal(undefined);
		});
		it('add at 1', () => {
			expect(ll2.addAtIndex(1, 30)).to.equal(undefined);
		});
		it('get 0', () => {
			expect(ll2.get(0)).to.equal(20);
		});
	});

	describe('Linked List 3', () => {
		const ll3 = new MyLinkedList();
		it('add head 2', () => {
			expect(ll3.addAtHead(2)).to.equal(undefined);
		});

		it('delete index 1', () => {
			expect(ll3.deleteAtIndex(1)).to.equal(undefined);
		});

		it('add head 2', () => {
			expect(ll3.addAtHead(2)).to.equal(undefined);
		});

		it('add head 7', () => {
			expect(ll3.addAtHead(7)).to.equal(undefined);
		});

		it('add head 3', () => {
			expect(ll3.addAtHead(3)).to.equal(undefined);
		});

		it('add head 2', () => {
			expect(ll3.addAtHead(2)).to.equal(undefined);
		});

		it('add head 5', () => {
			expect(ll3.addAtHead(5)).to.equal(undefined);
		});

		it('add tail 5', () => {
			expect(ll3.addAtTail(5)).to.equal(undefined);
		});

		it('get index 5', () => {
			expect(ll3.get(5)).to.equal(2);
		});

		it('delete index 6', () => {
			expect(ll3.deleteAtIndex(6)).to.equal(undefined);
		});

		it('delete index 4', () => {
			expect(ll3.deleteAtIndex(4)).to.equal(undefined);
		});

		it('get index 0', () => {
			expect(ll3.get(0)).to.equal(5);
		});

		it('get index 1', () => {
			expect(ll3.get(1)).to.equal(2);
		});

		it('get index 2', () => {
			expect(ll3.get(2)).to.equal(3);
		});

		it('get index 3', () => {
			expect(ll3.get(3)).to.equal(7);
		});

		it('get index 4', () => {
			expect(ll3.get(4)).to.equal(2);
		});
	});
});
