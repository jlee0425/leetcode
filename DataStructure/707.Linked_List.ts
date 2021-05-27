/**
 * Design your implementation of the linked list. You can choose to use a singly or doubly linked list.
 * A node in a singly linked list should have two attributes: val and next.
 * val is the value of the current node, and next is a pointer/reference to the next node.
 * If you want to use the doubly linked list,
 * you will need one more attribute prev to indicate the previous node in the linked list.
 * Assume all nodes in the linked list are 0-indexed.
 *
 * Implement the MyLinkedList class:
 *
 * MyLinkedList() Initializes the MyLinkedList object.
 *
 * int get(int index) Get the value of the indexth node in the linked list.
 * If the index is invalid, return -1.
 *
 * void addAtHead(int val) Add a node of value val before the first element of the linked list.
 * After the insertion, the new node will be the first node of the linked list.
 *
 * void addAtTail(int val) Append a node of value val as the last element of the linked list.
 *
 * void addAtIndex(int index, int val) Add a node of value val before the indexth node in the linked list.
 * If index equals the length of the linked list, the node will be appended to the end of the linked list.
 * If index is greater than the length, the node will not be inserted.
 *
 * void deleteAtIndex(int index) Delete the indexth node in the linked list, if the index is valid.
 */

class Node {
	val: number;
	next: Node;

	constructor(val: number, next: Node = null) {
		this.val = val;
		this.next = next;
	}
}

export class MyLinkedList {
	head: Node;
	length: number;

	constructor() {
		this.head = null;
		this.length = 0;
	}

	getNode(index: number): Node {
		if (index < 0 || index >= this.length || this.length === 0) return null;

		let i = 0;
		let node = this.head;
		while (i < index) {
			node = node.next;
			i++;
		}
		return node;
	}

	get(index: number): number {
		let node = this.getNode(index);
		return node ? node.val : -1;
	}

	addAtHead(val: number): void {
		const node = this.head;
		this.head = new Node(val, node);
		this.length++;
	}

	addAtTail(val: number): void {
		if (this.length === 0) {
			this.head = new Node(val);
			this.length++;
			return;
		}
		let tailNode = this.getNode(this.length - 1);
		tailNode.next = new Node(val);
		this.length++;
	}

	addAtIndex(index: number, val: number): void {
		if (index < 0 || index > this.length) {
			return;
		}

		if (index === 0) {
			this.addAtHead(val);
			return;
		}

		if (index === this.length) {
			this.addAtTail(val);
			return;
		}

		let prevNode = this.getNode(index - 1);
		let target = prevNode.next;

		const newNode = new Node(val, target);
		prevNode.next = newNode;

		this.length++;
	}

	deleteAtIndex(index: number): void {
		if (index < 0 || index >= this.length || this.length === 0) return;
		if (index === 0) {
			this.head = this.head.next;
			return;
		}

		const node = this.getNode(index - 1);
		node.next = node.next?.next || null;
		this.length--;
	}
}
