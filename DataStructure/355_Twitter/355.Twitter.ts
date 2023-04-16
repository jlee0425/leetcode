/**
 * Design a simplified version of Twitter where users can post tweets,
 * follow/unfollow another user, and is able to see the 10 most recent tweets in the user's news feed.
 *
 * Implement the Twitter class:
 *
 * Twitter()
 * Initializes your twitter object.
 *
 * void postTweet(int userId, int tweetId)
 *  Composes a new tweet with ID tweetId by the user userId.
 *  Each call to this function will be made with a unique tweetId.
 *
 * List<Integer> getNewsFeed(int userId)
 *  Retrieves the 10 most recent tweet IDs in the user's news feed.
 *  Each item in the news feed must be posted by users who the user followed or by the user themself.
 *  Tweets must be ordered from most recent to least recent.
 *
 * void follow(int followerId, int followeeId)
 *  The user with ID followerId started following the user with ID followeeId.
 *
 * void unfollow(int followerId, int followeeId)
 *  The user with ID followerId started unfollowing the user with ID followeeId.
 */

interface Twit {
	userId: number;
	tweetId: number;
}
export class Twitter {
	db: Twit[];
	followers: Map<number, number[]>;

	constructor() {
		this.db = [];
		this.followers = new Map();
	}

	postTweet(userId: number, tweetId: number): void {
		this.db.unshift({ userId, tweetId });
	}

	getNewsFeed(userId: number): number[] {
		const followers = this.followers.get(userId) || [];

		return this.db
			.filter(
				(tweet) => tweet.userId === userId || followers.includes(tweet.userId),
			)
			.slice(0, 10)
			.map((t) => t.tweetId);
	}

	follow(followerId: number, followeeId: number): void {
		this.followers.set(followerId, [
			...(this.followers.get(followerId) || []),
			followeeId,
		]);
	}

	unfollow(followerId: number, followeeId: number): void {
		this.followers.set(
			followerId,
			(this.followers.get(followerId) || []).filter((id) => id != followeeId),
		);
	}
}
