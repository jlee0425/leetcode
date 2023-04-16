import { TreeNode } from '../../DataStructure/1008_BSTTraversal/1008.BST_Traversal';

/**
 * Given the root of a binary tree and an integer targetSum,
 * return true if the tree has a root-to-leaf path such that
 * adding up all the values along the path equals targetSum.
 * A leaf is a node with no children.
 *
 * @param root TreeNode
 * @param targetSum number
 * @returns boolean
 */
export const hasPathSum = (
	root: TreeNode | null,
	targetSum: number,
	sum: number = 0,
): boolean => {
	if (!root) return false;

	sum += root.val;

	if (!root.left && !root.right && sum == targetSum) {
		return true;
	}

	return (
		hasPathSum(root.left, targetSum, sum) ||
		hasPathSum(root.right, targetSum, sum)
	);
};
