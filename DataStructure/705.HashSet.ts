/**
 * Design a HashSet without using any built-in hash table libraries.
 *
 * Implement MyHashSet class:
 *
 * void add(key) Inserts the value key into the HashSet.
 * bool contains(key) Returns whether the value key exists in the HashSet or not.
 * void remove(key) Removes the value key in the HashSet. If key does not exist in the HashSet, do nothing.
 */
export class MyHashSet {
	hashSet: Set<Number>;

	constructor() {
		this.hashSet = new Set();
	}

	add(key: number): void {
		this.hashSet.add(key);
	}

	remove(key: number): void {
		this.hashSet.delete(key);
	}

	contains(key: number): boolean {
		return this.hashSet.has(key);
	}
}
