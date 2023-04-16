import { ParkingSystem } from './1603.Design_Parking_Sys';
import { describe } from 'mocha';
import { expect } from 'chai';

describe('Design Parking System', () => {
	const ps = new ParkingSystem(1, 1, 0);
	it('addCar in big spot', () => {
		expect(ps.addCar(1)).to.equal(true);
	});
	it('addCar in medium spot', () => {
		expect(ps.addCar(2)).to.equal(true);
	});
	it('addCar in small spot', () => {
		expect(ps.addCar(3)).to.equal(false);
	});
	it('addCar in big spot', () => {
		expect(ps.addCar(1)).to.equal(false);
	});
});
