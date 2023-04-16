import { deepestLeavesSum } from '../../Algorithms/1032_LeavesSum/1302.Leaves_Sum';
import { TreeNode } from '../1008_BSTTraversal/1008.BST_Traversal';
import { describe } from 'mocha';
import { expect } from 'chai';

describe('Deepest Leaves Sum', () => {
	it('root = [1,2,3,4,5,null,6,7,null,null,null,null,8]', () => {
		const root = new TreeNode(1);
		root.left = new TreeNode(2);
		root.left.left = new TreeNode(4);
		root.left.right = new TreeNode(5);
		root.left.left.left = new TreeNode(7);
		root.right = new TreeNode(3);
		root.right.right = new TreeNode(6);
		root.right.right.right = new TreeNode(8);

		expect(deepestLeavesSum(root)).to.equal(15);
	});

	it('root = [6,7,8,2,7,1,3,9,null,1,4,null,null,null,5]', () => {
		const root = new TreeNode(6);
		root.left = new TreeNode(7);
		root.left.left = new TreeNode(2);
		root.left.right = new TreeNode(7);
		root.left.left.left = new TreeNode(9);
		root.left.right.left = new TreeNode(1);
		root.left.right.right = new TreeNode(4);

		root.right = new TreeNode(8);
		root.right.left = new TreeNode(1);
		root.right.right = new TreeNode(3);
		root.right.right.right = new TreeNode(5);

		expect(deepestLeavesSum(root)).to.equal(19);
	});
});
