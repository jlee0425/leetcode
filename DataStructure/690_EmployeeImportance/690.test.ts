import {
	Employee,
	getImportance,
} from './690.Employee_Importance';
import { describe } from 'mocha';
import { expect } from 'chai';

describe('Employee Importance', () => {
	it('[[1, 5, [2, 3]], [2, 3, []], [3, 3, []]], 1', () => {
		const employees: Employee[] = [];
		employees.push(new Employee(1, 5, [2, 3]));
		employees.push(new Employee(2, 3, []));
		employees.push(new Employee(3, 3, []));

		expect(getImportance(employees, 1)).to.equal(11);
	});

	it('[[2,5,[]]],  2', () => {
		const employees: Employee[] = [];
		employees.push(new Employee(2, 5, []));

		expect(getImportance(employees, 2)).to.equal(5);
	});
});
