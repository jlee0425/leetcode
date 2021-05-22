import { TreeNode } from './1008.BST_Traversal';

/**
 * Given the roots of two binary trees root and subRoot,
 * return true if there is a subtree of root with the same structure
 * and node values of subRoot and false otherwise.
 *
 * A subtree of a binary tree tree is a tree
 * that consists of a node in tree and all of this node's descendants.
 * The tree tree could also be considered as a subtree of itself.
 *
 * @param root TreeNode
 * @param subRoot TreeNode
 * @returns boolean
 */
export const isSubtree = (
	root: TreeNode | null,
	subRoot: TreeNode | null,
): boolean => {
	if (!root) return false;

	if (isEqual(root, subRoot)) {
		return true;
	}

	return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};

const isEqual = (node: TreeNode, target: TreeNode): boolean => {
	if (!node && !target) return true;

	if (node && target) {
		return (
			node.val === target.val &&
			isEqual(node.left, target.left) &&
			isEqual(node.right, target.right)
		);
	}

	return false;
};
