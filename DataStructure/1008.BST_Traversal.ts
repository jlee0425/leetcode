/**
 * Given an array of integers preorder, which represents the preorder traversal of a BST (i.e., binary search tree),
 * construct the tree and return its root.

  It is guaranteed that there is always possible to find a binary search tree
  with the given requirements for the given test cases.

  A binary search tree is a binary tree where for every node,
  any descendant of Node.left has a value strictly less than Node.val,
  and any descendant of Node.right has a value strictly greater than Node.val.

  A preorder traversal of a binary tree displays the value of the node first,
  then traverses Node.left, then traverses Node.right.

  Example 1: 
    Input: preorder = [8,5,1,7,10,12]
    Output: [8,5,10,1,7,null,12]
  
  Example 2:
    Input: preorder = [1,3]
    Output: [1,null,3] 

  Constraints: 
    - 1 <= preorder.length <= 100
    - 1 <= preorder[i] <= 108
    - All the values of preorder are unique.
 */

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
const insert = (node: TreeNode, val: number): TreeNode => {
	if (node.val > val) {
		node.left = node.left ? insert(node.left, val) : new TreeNode(val);
	} else {
		node.right = node.right
			? insert(node.right, val)
			: (node.right = new TreeNode(val));
	}
	return node;
};
