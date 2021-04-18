class TreeNode {
	val: number;
	left: TreeNode | null;
	right: TreeNode | null;
	constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
		this.val = val === undefined ? 0 : val;
		this.left = left === undefined ? null : left;
		this.right = right === undefined ? null : right;
	}
}

function bstFromPreorder(preorder: number[]): TreeNode | null {
	if (preorder.length < 1) return null; // sanity check

	const head = new TreeNode(preorder[0]);

	for (let i = 1; i < preorder.length; i++) {
		// -> O(n)
		insert(head, preorder[i]);
	}

	return head;
}

// find the right pos and insert using recursion
const insert = (node, val): TreeNode => {
	if (node.val > val) {
		node.left = node.left ? insert(node.left, val) : new TreeNode(val);
	} else {
		node.right = node.right
			? insert(node.right, val)
			: (node.right = new TreeNode(val));
	}
	return node;
};
