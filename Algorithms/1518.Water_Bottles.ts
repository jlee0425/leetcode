/**
 * Given numBottles full water bottles,
 * you can exchange numExchange empty water bottles for one full water bottle.
 * The operation of drinking a full water bottle turns it into an empty bottle.
 * Return the maximum number of water bottles you can drink.
 *
 *
 * Example 1:
 * Input: numBottles = 9, numExchange = 3
 * Output: 13
 * Explanation: you can exchange 3 empty bottles to get 1 full water bottle.
 * Number of water bottles you can drink: 9 + 3 + 1 = 13.
 *
 * Exmaple 2:
 * Input: numBottles = 15, numExchange = 4
 * Output: 19
 * Explanation: you can exchange 4 empty bottles to get 1 full water bottle.
 * Number of water bottles you can drink: 15 + 3 + 1 = 19.
 */

export const numWaterBottles = (
	numBottles: number,
	numExchange: number,
): number => {
	let drank = numBottles;
	if (numBottles < numExchange) return drank;

	let emptyBottles = numBottles;

	while (emptyBottles >= numExchange) {
		let remainder = exchangeBottle(emptyBottles, numExchange);
		drank += remainder.waterBottle;
		emptyBottles = remainder.emptyBottle + remainder.waterBottle;
	}

	return drank;
};

const exchangeBottle = (
	currBottles: number,
	exchange: number,
): { waterBottle: number; emptyBottle: number } => {
	return {
		waterBottle: Math.floor(currBottles / exchange),
		emptyBottle: currBottles % exchange,
	};
};
