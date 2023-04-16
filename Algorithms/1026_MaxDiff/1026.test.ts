import { maxAncestorDiff } from './1026.Max_Diff';
import { TreeNode } from '../../DataStructure/1008_BSTTraversal/1008.BST_Traversal';
import { describe } from 'mocha';
import { expect } from 'chai';

describe('Maximum Difference Between Node and Ancestor', () => {
	it('root = [1, null,2,null,0,3]', () => {
		const root = new TreeNode(1);
		root.right = new TreeNode(2);
		root.right.right = new TreeNode(0);
		root.right.right.left = new TreeNode(3);

		expect(maxAncestorDiff(root)).to.equal(3);
	});

	it('root = [8,3,10,1,6,null,14,null,null,4,7,13]', () => {
		const root = new TreeNode(8);
		root.left = new TreeNode(3);
		root.right = new TreeNode(10);
		root.left.left = new TreeNode(1);
		root.left.right = new TreeNode(6);
		root.left.right.left = new TreeNode(4);
		root.left.right.right = new TreeNode(7);
		root.right.right = new TreeNode(14);
		root.right.right.left = new TreeNode(13);

		expect(maxAncestorDiff(root)).to.equal(7);
	});
});
