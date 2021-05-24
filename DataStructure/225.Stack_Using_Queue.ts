/**
 * Implement a last in first out (LIFO) stack using only two queues.
 * The implemented stack should support all the functions of a normal queue (push, top, pop, and empty).
 *
 * Implement the MyStack class:
 * void push(int x) Pushes element x to the top of the stack.
 * Int pop() Removes the element on the top of the stack and returns it.
 * int top() Returns the element on the top of the stack.
 * boolean empty() Returns true if the stack is empty, false otherwise.
 *
 * Notes:
 * You must use only standard operations of a queue, which means only push to back,
 * peek/pop from front, size, and is empty operations are valid.
 * Depending on your language, the queue may not be supported natively.
 * You may simulate a queue using a list or deque (double-ended queue), as long as you use only a queue's standard operations.
 */
export class MyStack {
	stack: number[];

	constructor() {
		this.stack = [];
	}

	push(x: number): void {
		this.stack.push(x);
	}

	pop(): number {
		return this.stack.pop();
	}

	top(): number {
		return this.stack[this.stack.length - 1];
	}

	empty(): boolean {
		return this.stack.length === 0;
	}
}
