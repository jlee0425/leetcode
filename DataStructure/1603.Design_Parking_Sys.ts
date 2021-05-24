export class ParkingSystem {
	parkingLot: number[];

	constructor(big: number, medium: number, small: number) {
		this.parkingLot = [big, medium, small];
	}

	addCar(carType: number): boolean {
		this.parkingLot[carType - 1]--;
		return this.parkingLot[carType - 1] >= 0;
	}
}
