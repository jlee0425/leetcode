import { TreeNode } from '../../DataStructure/1008_BSTTraversal/1008.BST_Traversal';

/**
 * Given the root of a binary tree,
 * return the inorder traversal of its nodes' values.
 *
 * @param root TreeNode
 * @returns array of Number
 */

export const inorderTraversal = (root: TreeNode | null): number[] => {
	const inOrder: number[] = [];

	const traverse = (node: TreeNode | null) => {
		if (!node) return;
		traverse(node.left);
		inOrder.push(node.val);
		traverse(node.right);
	};

	traverse(root);

	return inOrder;
};
