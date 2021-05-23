import { checkIfPangram } from '../DataStructure/1832.Pangram';
import { expect } from 'chai';
import { describe } from 'mocha';

describe('Check if the Sentence Is Pangram', () => {
	it('sentence = "thequickbrownfoxjumpsoverthelazydog"', () => {
		expect(checkIfPangram('thequickbrownfoxjumpsoverthelazydog')).to.equal(
			true,
		);
	});

	it('sentence = "hfkvmkeyduluvqggqmbheotikcjpajmdlzfipbqgvkexcdnoxpotimoxakoidzqsscvlcmmfvlgdqttbbrhisgunvlugggfpmubitaorhmllpqcvqxgjsabygebakcpzibhhnpfxnhcxzjtjghettfkhgthopjjuteysqhteudugfqjcobkyanthvrqxyyikvepcelszfsxdlrmctaekdxegjjlioyuqkgdecazplikvimihclammemhbdnxlptzndctemyotcsnysumadhuagxlbeodkqypehsfjxqjreekkdjafemzkifymyityifmvyqojy"', () => {
		expect(
			checkIfPangram(
				'hfkvmkeyduluvqggqmbheotikcjpajmdlzfipbqgvkexcdnoxpotimoxakoidzqsscvlcmmfvlgdqttbbrhisgunvlugggfpmubitaorhmllpqcvqxgjsabygebakcpzibhhnpfxnhcxzjtjghettfkhgthopjjuteysqhteudugfqjcobkyanthvrqxyyikvepcelszfsxdlrmctaekdxegjjlioyuqkgdecazplikvimihclammemhbdnxlptzndctemyotcsnysumadhuagxlbeodkqypehsfjxqjreekkdjafemzkifymyityifmvyqojy',
			),
		).to.equal(false);
	});

	it('sentence = "leetcode"', () => {
		expect(checkIfPangram('leetcode')).to.equal(false);
	});
});
