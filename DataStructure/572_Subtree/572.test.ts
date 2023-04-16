import { isSubtree } from './572.Subtree';
import { TreeNode } from '../1008_BSTTraversal/1008.BST_Traversal';
import { describe } from 'mocha';
import { expect } from 'chai';

describe('Subtree of Another Tree', () => {
	it('root = [1,1], subRoot = [1]', () => {
		const root = new TreeNode(1);
		root.left = new TreeNode(1);

		const subRoot = new TreeNode(1);

		expect(isSubtree(root, subRoot)).to.equal(true);
	});

	it('root = [1,2,3], subRoot = [1,2]', () => {
		const root = new TreeNode(1);
		root.left = new TreeNode(2);
		root.right = new TreeNode(3);

		const subRoot = new TreeNode(1);
		subRoot.left = new TreeNode(2);

		expect(isSubtree(root, subRoot)).to.equal(false);
	});

	it('root = [3,4,5,1,2], subRoot = [4,1,2]', () => {
		const root = new TreeNode(3);
		root.left = new TreeNode(4);
		root.right = new TreeNode(5);
		root.left.left = new TreeNode(1);
		root.left.right = new TreeNode(2);

		const subRoot = new TreeNode(4);
		subRoot.left = new TreeNode(1);
		subRoot.right = new TreeNode(2);

		expect(isSubtree(root, subRoot)).to.equal(true);
	});

	it('root = [3,4,5,1,2,null,null,null,null,0], subRoot = [4,1,2]', () => {
		const root = new TreeNode(3);
		root.left = new TreeNode(4);
		root.right = new TreeNode(5);
		root.left.left = new TreeNode(1);
		root.left.right = new TreeNode(2);
		root.left.right.left = new TreeNode(0);

		const subRoot = new TreeNode(4);
		subRoot.left = new TreeNode(1);
		subRoot.right = new TreeNode(2);

		expect(isSubtree(root, subRoot)).to.equal(false);
	});

	it('root = [1,null,1,null,1,null,1,null,1,null,1,null,1,null,1,null,1,null,1,null,1,2], subRoot = [1,null,1,null,1,null,1,null,1,null,1,2]', () => {
		const root = new TreeNode(1);
		root.right = new TreeNode(1);
		root.right.right = new TreeNode(1);
		root.right.right.right = new TreeNode(1);
		root.right.right.right.right = new TreeNode(1);
		root.right.right.right.right.right = new TreeNode(1);
		root.right.right.right.right.right.right = new TreeNode(1);
		root.right.right.right.right.right.right.right = new TreeNode(1);
		root.right.right.right.right.right.right.right.right = new TreeNode(1);
		root.right.right.right.right.right.right.right.right.right = new TreeNode(
			1,
		);
		root.right.right.right.right.right.right.right.right.right.left =
			new TreeNode(1);
		root.right.right.right.right.right.right.right.right.right.right =
			new TreeNode(2);

		const subRoot = new TreeNode(1);
		subRoot.right = new TreeNode(1);
		subRoot.right.right = new TreeNode(1);
		subRoot.right.right.right = new TreeNode(1);
		subRoot.right.right.right.right = new TreeNode(1);
		subRoot.right.right.right.right.left = new TreeNode(1);
		subRoot.right.right.right.right.right = new TreeNode(2);

		expect(isSubtree(root, subRoot)).to.equal(true);
	});
});
