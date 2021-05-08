import { TreeNode } from './1008.BST_Traversal';

/**
 * Given the root of a binary tree, imagine yourself standing on the right side of it,
 * return the values of the nodes you can see ordered from top to bottom.
 *
 * @param root TreeNode | null
 * @returns array of numbers
 */
export const rightSideView = (root: TreeNode | null): number[] => {
	if (!root) return [];

	let ans: number[] = [];
	let queue: TreeNode[] = [root];

	// BFS
	while (queue.length > 0) {
		let length = queue.length;
		let cur: TreeNode;

		for (let i = 0; i < length; i++) {
			cur = queue.shift();

			if (cur.left) queue.push(cur.left);
			if (cur.right) queue.push(cur.right);
		}

		ans.push(cur.val);
	}

	return ans;
};

export const rightSideView_DFS = (root: TreeNode | null): number[] => {
	const ans: number[] = [];

	const dfs = (node: TreeNode, level: number = 0) => {
		if (!node) return;

		ans[level] = node.val;
		dfs(node.left, level + 1);
		dfs(node.right, level + 1);
	};

	dfs(root);

	return ans;
};
