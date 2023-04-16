import { TreeNode } from '../1008_BSTTraversal/1008.BST_Traversal';
import { increasingBST } from './897.Increasing_ST';
import { describe } from 'mocha';
import { expect } from 'chai';

describe('Increasing Order Search Tree', () => {
	it('root = [5,3,6,2,4,null,8,1,null,null,null,7,9]', () => {
		const root = new TreeNode(5);
		root.left = new TreeNode(3);
		root.right = new TreeNode(6);
		root.left.left = new TreeNode(2);
		root.left.right = new TreeNode(4);
		root.left.left = new TreeNode(1);
		root.right.right = new TreeNode(8);
		root.right.right.left = new TreeNode(7);
		root.right.right.right = new TreeNode(9);

		const comp = new TreeNode(1);
		comp.right = new TreeNode(2);
		comp.right = new TreeNode(3);
		comp.right.right = new TreeNode(4);
		comp.right.right.right = new TreeNode(5);
		comp.right.right.right.right = new TreeNode(6);
		comp.right.right.right.right.right = new TreeNode(7);
		comp.right.right.right.right.right.right = new TreeNode(8);
		comp.right.right.right.right.right.right.right = new TreeNode(9);

		expect(increasingBST(root)).to.eql(comp);
	});

	it('root = [2,1,4,null,null,3]', () => {
		const root = new TreeNode(2);
		root.left = new TreeNode(1);
		root.right = new TreeNode(4);
		root.right.left = new TreeNode(3);

		const comp = new TreeNode(1);
		comp.right = new TreeNode(2);
		comp.right.right = new TreeNode(3);
		comp.right.right.right = new TreeNode(4);

		expect(increasingBST(root)).to.eql(comp);
	});
});
