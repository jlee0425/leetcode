import { TreeNode } from '../DataStructure/1008.BST_Traversal';

const charCodeOfa = 97;

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
