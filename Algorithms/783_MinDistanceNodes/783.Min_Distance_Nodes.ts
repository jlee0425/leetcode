import { TreeNode } from '../../DataStructure/1008_BSTTraversal/1008.BST_Traversal';

/**
 * Given the root of a Binary Search Tree (BST),
 * return the minimum difference between the values of any two different nodes in the tree.
 *
 * @param root TreeNode
 */

export const minDiffInBST = (root: TreeNode | null): number => {
	const inOrder: number[] = [];

	const traverse = (node: TreeNode) => {
		if (!node) return;
		traverse(node.left);
		inOrder.push(node.val);
		traverse(node.right);
	};

	traverse(root);

	let minDiff = Number.MAX_VALUE;

	for (let i = 1; i < inOrder.length; i++) {
		let diff = inOrder[i] - inOrder[i - 1];
		if (minDiff > diff) {
			minDiff = diff;
		}
	}

	return minDiff;
};
