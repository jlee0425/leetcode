import { canConstruct } from './../DataStructure/383.Ransom_Note';
import { expect } from 'chai';
import { describe } from 'mocha';

describe('Ransom Note', () => {
	it('ransomNote = "a", magazine = "b"', () => {
		expect(canConstruct('a', 'b')).to.equal(false);
	});

	it('ransomNote = "aa", magazine = "ab"', () => {
		expect(canConstruct('aa', 'ab')).to.equal(false);
	});

	it('ransomNote = "aa", magazine = "aab"', () => {
		expect(canConstruct('aa', 'aab')).to.equal(true);
	});
});
