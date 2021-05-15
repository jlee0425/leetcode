import { TreeNode } from './../DataStructure/1008.BST_Traversal';

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
): boolean => {
	if (!root) return false;

	const dfs = (node: TreeNode, sum: number): boolean => {
		if (!node.left && !node.right) {
			sum += node.val;
			if (sum === targetSum) return true;
			return false;
		}

		sum += node.val;
		let left = false,
			right = false;
		if (node.left) {
			left = dfs(node.left, sum);
		}
		if (node.right) {
			right = dfs(node.right, sum);
		}

		return left || right;
	};

	return dfs(root, 0);
};
