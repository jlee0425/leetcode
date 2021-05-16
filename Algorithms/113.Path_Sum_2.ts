import { TreeNode } from '../DataStructure/1008.BST_Traversal';

/**
 * Given the root of a binary tree and an integer targetSum,
 * return all root-to-leaf paths where each path's sum equals targetSum.
 * A leaf is a node with no children.
 *
 * @param root TreeNode
 * @param targetSum array of paths that consist of numbers
 */
export const pathSum = (
	root: TreeNode | null,
	targetSum: number,
): number[][] => {
	let ans: number[][] = [];

	const dfs = (node: TreeNode, curPath: number[] = [], curSum: number = 0) => {
		if (!node) {
			return;
		}

		curPath = [...curPath, node.val];
		curSum += node.val;

		if (!node.left && !node.right && curSum === targetSum) {
			ans.push(curPath);
		}

		dfs(node.left, curPath, curSum);
		dfs(node.right, curPath, curSum);
	};

	dfs(root);

	return ans;
};
