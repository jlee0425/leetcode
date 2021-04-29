import { TreeNode } from './1008.BST_Traversal';

/**
 *
 * @param root root of a binary tree
 * @returns true if the tree is symmetric around its center, false otherwise.
 */
export const isSymmetric = (root: TreeNode | null): boolean => {
	return isMirror(root, root);
};

const isMirror = (t1: TreeNode, t2: TreeNode): boolean => {
	if (t1 == null && t2 == null) return true;
	if (!t1 || !t2) return false;
	return (
		t1.val == t2.val &&
		isMirror(t1.left, t2.right) &&
		isMirror(t1.right, t2.left)
	);
};

export const isSym_Iter = (root: TreeNode | null): boolean => {
	let queue = [],
		lPtr: TreeNode = null,
		rPtr: TreeNode = null;

	queue.push(root.left);
	queue.push(root.right);

	while (queue.length > 0) {
		lPtr = queue.shift();
		rPtr = queue.shift();

		if (lPtr == null && rPtr == null) continue;
		if (!lPtr || !rPtr) return false;
		if (lPtr.val != rPtr.val) return false;
		queue.push(lPtr.left);
		queue.push(rPtr.right);
		queue.push(lPtr.right);
		queue.push(rPtr.left);
	}

	return true;
};
