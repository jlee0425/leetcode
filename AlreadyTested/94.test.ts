import { TreeNode } from '../DataStructure/1008.BST_Traversal';
import { inorderTraversal } from '../Algorithms/94.Bin_Tree_Traversal';
import { expect } from 'chai';
import { describe } from 'mocha';

describe('Binary Tree Inorder Traversal', () => {
	it('root = []', () => {
		const root = null;

		expect(inorderTraversal(root)).to.eql([]);
	});

	it('root = [1]', () => {
		const root = new TreeNode(1);

		expect(inorderTraversal(root)).to.eql([1]);
	});

	it('root = [1, null, 2, 3]', () => {
		const root = new TreeNode(1);
		root.right = new TreeNode(2);
		root.right.left = new TreeNode(3);

		expect(inorderTraversal(root)).to.eql([1, 3, 2]);
	});

	it('root = [1]', () => {
		const root = new TreeNode(1);
		root.left = new TreeNode(2);

		expect(inorderTraversal(root)).to.eql([2, 1]);
	});

	it('root = [1,null,2]', () => {
		const root = new TreeNode(1);
		root.right = new TreeNode(2);

		expect(inorderTraversal(root)).to.eql([1, 2]);
	});
});
