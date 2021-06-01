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
interface User {
	id: number;
	twits: Twit[];
	followers: number[];
}

interface Twit {
	id: number;
	twitted: number;
}

export class Twitter {
	db: User[];

	constructor() {
		this.db = [];
	}

	postTweet(userId: number, tweetId: number): void {
		if (!this.db[userId])
			this.db[userId] = { id: userId, twits: [], followers: [] } as User;
		this.db[userId].twits.push({ id: tweetId, twitted: Date.now() });
	}

	getNewsFeed(userId: number): number[] {
		const twits = [...this.db[userId].twits] || [];
		for (let follower of this.db[userId].followers) {
			twits.push(...this.db[follower].twits);
		}
		twits.sort((a, b) => b.twitted - a.twitted);

		console.log(`twits`, twits);
		return twits.slice(0, 10).map((t) => t.id);
	}

	follow(followerId: number, followeeId: number): void {
		this.db[followerId].followers.push(followeeId);
	}

	unfollow(followerId: number, followeeId: number): void {
		this.db[followerId].followers = this.db[followerId].followers.filter(
			(id) => id != followeeId,
		);
	}
}
