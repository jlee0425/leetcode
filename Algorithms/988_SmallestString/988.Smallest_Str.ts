import { TreeNode } from '../../DataStructure/1008_BSTTraversal/1008.BST_Traversal';

const charCodeOfa = 97;

/**
 * Given the root of a binary tree, each node has a value from 0 to 25
 * representing the letters 'a' to 'z':
 * a value of 0 represents 'a', a value of 1 represents 'b', and so on.
 * Find the lexicographically smallest string that starts at a leaf of this tree and ends at the root.
 *
 * (As a reminder, any shorter prefix of a string is lexicographically smaller:
 * for example, "ab" is lexicographically smaller than "aba".
 * A leaf of a node is a node that has no children.)
 *
 * @param root TreeNode
 * @returns string
 */

export const smallestFromLeaf = (root: TreeNode | null): string => {
	let smallestStr = '';

	const traverseInOrder = (node: TreeNode | null, str: string) => {
		if (!node) return;
		str = numToChar(node.val) + str;

		if (hasNoChild(node)) {
			if (!smallestStr) {
				smallestStr = str;
			} else if (smallestStr > str) {
				smallestStr = str;
			}
		}
		traverseInOrder(node.left, str);
		traverseInOrder(node.right, str);
	};

	traverseInOrder(root, '');

	return smallestStr;
};

const numToChar = (num: number): string =>
	String.fromCharCode(num + charCodeOfa);

const hasNoChild = (node: TreeNode) => !node.left && !node.right;
