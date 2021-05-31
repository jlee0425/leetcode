/**
 * Given a string s which represents an expression, evaluate this expression and return its value.
 * The integer division should truncate toward zero.
 *
 * Note: You are not allowed to use any built-in function
 * which evaluates strings as mathematical expressions, such as eval().
 *
 * @param s string
 * @returns number
 */

export const calculate = (s: string): number => {
	s = s.replace(/ /g, '');
	let stack: number[] = [];
	let curNum = 0;
	let i = 0;
	let op = '+';

	for (let cur of s) {
		if (!isNaN(Number(cur))) {
			curNum = curNum * 10 + Number(cur);
			i++;
			if (i != s.length) {
				continue;
			}
		}

		let nextOp = '';
		if (isNaN(Number(cur))) {
			nextOp = cur;
		}

		if (op == '-') {
			stack.push(-curNum);
		} else if (op == '+') {
			stack.push(curNum);
		} else if (op == '/') {
			const top = stack.pop();
			if (top < 0) stack.push(Math.ceil(top / curNum));
			else stack.push(Math.floor(top / curNum));
		} else if (op == '*') {
			stack.push(stack.pop() * curNum);
		}

		op = nextOp;
		curNum = 0;
		i++;
	}

	return stack.reduce((curr, sum) => curr + sum, 0);
};
