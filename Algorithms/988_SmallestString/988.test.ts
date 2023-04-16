import { smallestFromLeaf } from './988.Smallest_Str';
import { TreeNode } from '../../DataStructure/1008_BSTTraversal/1008.BST_Traversal';
import { describe } from 'mocha';
import { expect } from 'chai';

describe('Smallest String Starting From Leaf', () => {
	it('[0,1,2,3,4,3,4]', () => {
		const root = new TreeNode(0);
		root.left = new TreeNode(1);
		root.right = new TreeNode(2);
		root.left.left = new TreeNode(3);
		root.left.right = new TreeNode(4);
		root.right.left = new TreeNode(3);
		root.right.right = new TreeNode(4);

		expect(smallestFromLeaf(root)).to.eql('dba');
	});

	it('[25,1,3,1,3,0,2]', () => {
		const root = new TreeNode(25);
		root.left = new TreeNode(1);
		root.right = new TreeNode(3);
		root.left.left = new TreeNode(1);
		root.left.right = new TreeNode(3);
		root.right.left = new TreeNode(0);
		root.right.right = new TreeNode(2);

		expect(smallestFromLeaf(root)).to.eql('adz');
	});

	it('[2,2,1,null,1,0,null,0]', () => {
		const root = new TreeNode(2);
		root.left = new TreeNode(2);
		root.right = new TreeNode(1);
		root.left.right = new TreeNode(1);
		root.right.right = new TreeNode(0);

		expect(smallestFromLeaf(root)).to.eql('abc');
	});
});
