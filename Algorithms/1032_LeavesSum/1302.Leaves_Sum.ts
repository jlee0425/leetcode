import { TreeNode } from '../../DataStructure/1008_BSTTraversal/1008.BST_Traversal';

/**
 * Given the root of a binary tree, return the sum of values of its deepest leaves.
 *
 * @param root TreeNode
 * @returns number
 */
export const deepestLeavesSum = (root: TreeNode | null): number => {
	if (!root) return 0;
	let sum = 0;
	let maxHeight = 0;

	const dfs = (node: TreeNode, height: number = 0) => {
		if (!node) return;

		dfs(node.left, height + 1);
		if (!node.left && !node.right) {
			if (height > maxHeight) sum = 0;
			maxHeight = Math.max(maxHeight, height);
			if (height === maxHeight) {
				sum += node.val;
			}
		}
		dfs(node.right, height + 1);
	};

	dfs(root);

	return sum;
};
