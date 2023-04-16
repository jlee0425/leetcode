export class Employee {
	id: number;
	importance: number;
	subordinates: number[];
	constructor(
		id: number = 0,
		importance: number = 0,
		subordinates: number[] = [],
	) {
		this.id = id;
		this.importance = importance;
		this.subordinates = subordinates;
	}
}

/**
 * You are given a data structure of employee information,
 * which includes the employee's unique id, their importance value and their direct subordinates' id.
 * For example, employee 1 is the leader of employee 2, and employee 2 is the leader of employee 3.
 * They have importance value 15, 10 and 5, respectively.
 * Then employee 1 has a data structure like [1, 15, [2]],
 * and employee 2 has [2, 10, [3]], and employee 3 has [3, 5, []].
 * Note that although employee 3 is also a subordinate of employee 1, the relationship is not direct.
 *
 * Now given the employee information of a company, and an employee id,
 * you need to return the total importance value of this employee and all their subordinates.
 *
 * @param employees Employee[]
 * @param id number
 * @returns number
 */
export const getImportance = (employees: Employee[], id: number): number => {
	let sum = 0;
	let queue: Employee[] = [];
	let visited = new Set();
	const firstEmployee = employees.findIndex((e) => e.id === id);

	queue.push(employees[firstEmployee]);

	while (queue.length > 0) {
		const currEmp = queue.shift();
		visited.add(currEmp.id);

		sum += currEmp.importance;
		if (currEmp.subordinates) {
			currEmp.subordinates.forEach((id) => {
				if (!visited.has(id)) {
					const subId = employees.findIndex((e) => e.id === id);
					queue.push(employees[subId]);
				}
			});
		}
	}

	return sum;
};
