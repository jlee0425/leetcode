import { isValidBST } from '../DataStructure/98.Validate_BST';
import { TreeNode } from '../DataStructure/1008.BST_Traversal';
import { expect } from 'chai';
import { describe } from 'mocha';

describe('Validate Binary Search Tree', () => {
	it('[2, 1, 3]', () => {
		let root = new TreeNode(2);
		root.left = new TreeNode(1);
		root.right = new TreeNode(3);

		expect(isValidBST(root)).to.equal(true);
	});

	it('[5,1,4,null,null,3,6]', () => {
		let root = new TreeNode(5);
		root.left = new TreeNode(1);
		root.right = new TreeNode(4);
		root.right.left = new TreeNode(3);
		root.right.right = new TreeNode(6);

		expect(isValidBST(root)).to.equal(false);
	});

	it('[5,4,6,null,null,3,7]', () => {
		let root = new TreeNode(5);
		root.left = new TreeNode(4);
		root.right = new TreeNode(6);
		root.right.left = new TreeNode(3);
		root.right.right = new TreeNode(7);

		expect(isValidBST(root)).to.equal(false);
	});
});
