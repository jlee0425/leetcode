import { TreeNode } from '../../DataStructure/1008_BSTTraversal/1008.BST_Traversal';

/**
 * Given the root of a binary tree,
 * find the maximum value V for which there exist different nodes A and B
 * where V = |A.val - B.val| and A is an ancestor of B.
 * A node A is an ancestor of B if either: any child of A is equal to B,
 * or any child of A is an ancestor of B.
 *
 * @param root TreeNode
 * @returns number
 */
export const maxAncestorDiff = (root: TreeNode | null): number => {
	const dfs = (node: TreeNode, curMax: number, curMin: number): number => {
		if (!node) {
			return curMax - curMin;
		}

		curMax = Math.max(curMax, node.val);
		curMin = Math.min(curMin, node.val);
		let left = dfs(node.left, curMax, curMin);
		let right = dfs(node.right, curMax, curMin);

		return Math.max(left, right);
	};

	return dfs(root, root.val, root.val);
};
