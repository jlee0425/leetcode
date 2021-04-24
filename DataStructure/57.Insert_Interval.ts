/**
 * Given a set of non-overlapping intervals,
 * insert a new interval into the intervals (merge if necessary).
 * You may assume that the intervals were initially sorted according to their start times.
 *
 * Example 1:
 * Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
 * Output: [[1,5],[6,9]]
 *
 * Example 2:
 * Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
 * Output: [[1,2],[3,10],[12,16]]
 * Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].
 *
 * Constraints:
 * 0 <= intervals.length <= 104
 * Intervals[i].length == 2
 * 0 <= intervals[i][0] <= intervals[i][1] <= 105
 * intervals is sorted by intervals[i][0] in ascending order.
 * newInterval.length == 2
 * 0 <= newInterval[0] <= newInterval[1] <= 105
 *
 */

export const insert = (
	intervals: number[][],
	newInterval: number[],
): number[][] => {
	/**
	 * 1. Add `newInterval` to `intervals`
	 * 2. Sort the list according to interval[i][0]
	 * 3. find mergeable cases i.e. where interval[i][1] >= interval[i + 1][0]
	 *     merge interval[i] and interval[i + 1]
	 * 4. repeat `3` until i < intervals.length - 1
	 */
	intervals.push(newInterval);
	intervals.sort((a, b) => a[0] - b[0]);
	for (let i = 0, length = intervals.length; i < length - 1; ) {
		if (intervals[i + 1] && intervals[i][1] >= intervals[i + 1][0]) {
			if (intervals[i][1] <= intervals[i + 1][1]) {
				intervals[i] = [intervals[i][0], intervals[i + 1][1]];
			}
			intervals.splice(i + 1, 1);
		} else {
			i++;
		}
	}

	return intervals;
};
