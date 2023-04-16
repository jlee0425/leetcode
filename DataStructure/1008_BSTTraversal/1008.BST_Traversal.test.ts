import { describe } from 'mocha';
import { expect } from 'chai';
import { TreeNode, bstFromPreorder } from './1008.BST_Traversal';

describe('BST Traversal', () => {
	it('inserting 3 positive integers', () => {
		let customTree = new TreeNode(3);
		customTree.left = new TreeNode(0);

		expect(bstFromPreorder([3, 0])).to.eqls(customTree);

		customTree.right = new TreeNode(5);
		expect(bstFromPreorder([3, 0, 5])).to.eqls(customTree);
	});

	it('inserting 7 integers', () => {
		let customTree = new TreeNode(0);
		customTree.left = new TreeNode(-2);
		customTree.right = new TreeNode(5);
		customTree.left.left = new TreeNode(-3);
		customTree.left.right = new TreeNode(-1);
		customTree.right.left = new TreeNode(2);
		customTree.right.right = new TreeNode(10);

		expect(bstFromPreorder([0, -2, 5, -3, -1, 2, 10])).to.eqls(customTree);
	});
});
