import {
	rightSideView,
	rightSideView_DFS,
} from '../DataStructure/199.BT_Side_View';
import { TreeNode } from '../DataStructure/1008.BST_Traversal';
import { describe } from 'mocha';
import { expect } from 'chai';

describe('Binary Tree Right Side View', () => {
	it('root = [1,2,3,null,5,null,4]', () => {
		let root = new TreeNode(1);
		root.left = new TreeNode(2);
		root.right = new TreeNode(3);
		root.left.right = new TreeNode(5);
		root.right.right = new TreeNode(4);

		expect(rightSideView(root)).to.eql([1, 3, 4]);
	});

	it('root = [1,null,3]', () => {
		let root = new TreeNode(1);
		root.right = new TreeNode(3);

		expect(rightSideView(root)).to.eql([1, 3]);
	});

	it('root = []', () => {
		let root = null;

		expect(rightSideView(root)).to.eql([]);
	});

	it('root = [1, 2]', () => {
		let root = new TreeNode(1);
		root.left = new TreeNode(2);

		expect(rightSideView(root)).to.eql([1, 2]);
	});

	it('root = [1,null,2,null,5,4,6,3]', () => {
		let root = new TreeNode(1);
		root.right = new TreeNode(2);
		root.right.right = new TreeNode(5);
		root.right.right.left = new TreeNode(4);
		root.right.right.right = new TreeNode(6);
		root.right.right.left.left = new TreeNode(3);

		expect(rightSideView(root)).to.eql([1, 2, 5, 6, 3]);
	});

	it('root = [5,3,6,1,4,null,null,null,2]', () => {
		let root = new TreeNode(5);
		root.left = new TreeNode(3);
		root.right = new TreeNode(6);
		root.left.left = new TreeNode(1);
		root.left.right = new TreeNode(4);
		root.left.left.right = new TreeNode(2);

		expect(rightSideView(root)).to.eql([5, 6, 4, 2]);
	});
});

describe('Binary Tree Right Side View DFS', () => {
	it('root = [1,2,3,null,5,null,4]', () => {
		let root = new TreeNode(1);
		root.left = new TreeNode(2);
		root.right = new TreeNode(3);
		root.left.right = new TreeNode(5);
		root.right.right = new TreeNode(4);

		expect(rightSideView_DFS(root)).to.eql([1, 3, 4]);
	});

	it('root = [1,null,3]', () => {
		let root = new TreeNode(1);
		root.right = new TreeNode(3);

		expect(rightSideView_DFS(root)).to.eql([1, 3]);
	});

	it('root = []', () => {
		let root = null;

		expect(rightSideView_DFS(root)).to.eql([]);
	});

	it('root = [1, 2]', () => {
		let root = new TreeNode(1);
		root.left = new TreeNode(2);

		expect(rightSideView_DFS(root)).to.eql([1, 2]);
	});

	it('root = [1,null,2,null,5,4,6,3]', () => {
		let root = new TreeNode(1);
		root.right = new TreeNode(2);
		root.right.right = new TreeNode(5);
		root.right.right.left = new TreeNode(4);
		root.right.right.right = new TreeNode(6);
		root.right.right.left.left = new TreeNode(3);

		expect(rightSideView_DFS(root)).to.eql([1, 2, 5, 6, 3]);
	});

	it('root = [5,3,6,1,4,null,null,null,2]', () => {
		let root = new TreeNode(5);
		root.left = new TreeNode(3);
		root.right = new TreeNode(6);
		root.left.left = new TreeNode(1);
		root.left.right = new TreeNode(4);
		root.left.left.right = new TreeNode(2);

		expect(rightSideView_DFS(root)).to.eql([5, 6, 4, 2]);
	});
});
