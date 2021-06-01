import { Twitter } from '../DataStructure/355.Twitter';
import { describe } from 'mocha';
import { expect } from 'chai';

describe('Design Twitter', () => {
	const twitter = new Twitter();
	it('post tweet', () => {
		expect(twitter.postTweet(1, 5)).to.equal(undefined);
	});

	it('getNewsFeed', () => {
		expect(twitter.getNewsFeed(1)).to.eql([5]);
	});

	it('post tweet', () => {
		expect(twitter.follow(1, 2)).to.equal(undefined);
	});

	it('post tweet', () => {
		expect(twitter.postTweet(2, 6)).to.equal(undefined);
	});

	it('getNewsFeed', () => {
		expect(twitter.getNewsFeed(1)).to.eql([6, 5]);
	});

	it('unfollow', () => {
		expect(twitter.unfollow(1, 2)).to.equal(undefined);
	});

	it('getNewsFeed', () => {
		expect(twitter.getNewsFeed(1)).to.eql([5]);
	});
});
