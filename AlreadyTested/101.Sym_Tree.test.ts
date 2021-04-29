import { TreeNode } from '../DataStructure/1008.BST_Traversal';
import { isSym_Iter } from '../DataStructure/101.Symmetric_Tree';
import { expect } from 'chai';
import { describe } from 'mocha';

describe('Symmetric Tree', () => {
	it('root = [1,2,2,3,4,4,3]', () => {
		const root = new TreeNode(1);
		root.left = new TreeNode(2);
		root.right = new TreeNode(2);
		root.left.right = new TreeNode(4);
		root.right.left = new TreeNode(4);
		root.right.left = new TreeNode(3);
		root.left.right = new TreeNode(3);

		expect(isSym_Iter(root)).to.equal(true);
	});

	it('root = [1,2,3]', () => {
		const root = new TreeNode(1);
		root.left = new TreeNode(2);
		root.right = new TreeNode(3);

		expect(isSym_Iter(root)).to.equal(false);
	});

	it('root = [1,2,2,null,3,null,3]', () => {
		const root = new TreeNode(1);
		root.left = new TreeNode(2);
		root.right = new TreeNode(2);
		root.left.left = new TreeNode(null);
		root.left.right = new TreeNode(3);
		root.right.left = new TreeNode(null);
		root.right.right = new TreeNode(3);

		expect(isSym_Iter(root)).to.equal(false);
	});
});
