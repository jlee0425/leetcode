import { TreeNode } from '../1008_BSTTraversal/1008.BST_Traversal';

/**
 * Given the root of a binary search tree,
 * rearrange the tree in in-order so that the leftmost node in the tree is now the root of the tree,
 * and every node has no left child and only one right child.
 *
 * @param root TreeNode
 * @returns TreeNode
 */

export const increasingBST = (root: TreeNode | null): TreeNode | null => {
	if (!root) return null;

	let dummyHead: TreeNode = new TreeNode(0);
	let ptr = dummyHead;

	const inOrderTraverse = (node: TreeNode) => {
		if (!node) return;
		inOrderTraverse(node.left);
		ptr.right = node;
		ptr = ptr.right;
		inOrderTraverse(node.right);
	};

	inOrderTraverse(root);

	return dummyHead.right;
};
