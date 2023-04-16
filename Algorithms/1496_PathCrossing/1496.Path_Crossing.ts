/**
 * Given a string path, where path[i] = 'N', 'S', 'E' or 'W',
 * each representing moving one unit north, south, east, or west, respectively.
 * You start at the origin (0, 0) on a 2D plane and walk on the path specified by path.
 * Return True if the path crosses itself at any point, that is,
 *  if at any time you are on a location you've previously visited. Return False otherwise.
 *
 * @param path string of moves
 * @returns true if path crosses the itself, false otherwise.
 *
 */

const Paths = {
	N: [0, 1],
	S: [0, -1],
	E: [1, 0],
	W: [-1, 0],
};

export const isPathCrossing = (path: string): boolean => {
	let curPos = [0, 0];
	let visited: number[][] = [curPos];

	for (let route of path) {
		curPos = [curPos[0] + Paths[route][0], curPos[1] + Paths[route][1]];
		for (let v of visited) {
			if (v[0] == curPos[0] && v[1] == curPos[1]) return true;
		}
		visited.push(curPos);
	}

	return false;
};
