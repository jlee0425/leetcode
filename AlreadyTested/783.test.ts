import { minDiffInBST } from '../Algorithms/783.Min_Distance_Nodes';
import { TreeNode } from '../DataStructure/1008.BST_Traversal';
import { expect } from 'chai';
import { describe } from 'mocha';

describe('Minimum Distance Between BST Nodes', () => {
	it('root = [4,2,6,1,3]', () => {
		const root = new TreeNode(4);
		root.left = new TreeNode(2);
		root.right = new TreeNode(6);
		root.left.left = new TreeNode(1);
		root.left.right = new TreeNode(3);

		expect(minDiffInBST(root)).to.equal(1);
	});

	it('root = [1,0,48,null,null,12,49]', () => {
		const root = new TreeNode(1);
		root.left = new TreeNode(0);
		root.right = new TreeNode(48);
		root.right.left = new TreeNode(12);
		root.right.right = new TreeNode(49);

		expect(minDiffInBST(root)).to.equal(1);
	});

	it('root = [27,null,34,null,58,50,null,44]', () => {
		const root = new TreeNode(27);
		root.right = new TreeNode(34);
		root.right.right = new TreeNode(58);
		root.right.right.left = new TreeNode(50);
		root.right.right.left.left = new TreeNode(44);

		expect(minDiffInBST(root)).to.equal(6);
	});
});
