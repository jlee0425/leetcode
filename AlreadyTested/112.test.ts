import { hasPathSum } from '../Algorithms/112.Path_Sum';
import { TreeNode } from '../DataStructure/1008.BST_Traversal';
import { describe } from 'mocha';
import { expect } from 'chai';

describe('Path Sum', () => {
	it('root = [], targetSum = 1', () => {
		const root = null;

		expect(hasPathSum(root, 1)).to.equal(false);
	});

	it('root = [1,2], targetSum = 0', () => {
		const root = new TreeNode(1);
		root.left = new TreeNode(2);

		expect(hasPathSum(root, 0)).to.equal(false);
	});

	it('root = [1,2], targetSum = 1', () => {
		const root = new TreeNode(1);
		root.left = new TreeNode(2);

		expect(hasPathSum(root, 1)).to.equal(false);
	});

	it('root = [1,2,3], targetSum = 5', () => {
		const root = new TreeNode(1);
		root.left = new TreeNode(2);
		root.right = new TreeNode(3);

		expect(hasPathSum(root, 5)).to.equal(false);
	});

	it('root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22', () => {
		const root = new TreeNode(5);
		root.left = new TreeNode(4);
		root.right = new TreeNode(8);
		root.left.left = new TreeNode(11);
		root.left.left.left = new TreeNode(7);
		root.left.left.right = new TreeNode(2);
		root.right.left = new TreeNode(13);
		root.right.right = new TreeNode(4);
		root.right.right.right = new TreeNode(1);

		expect(hasPathSum(root, 22)).to.equal(true);
	});
});
