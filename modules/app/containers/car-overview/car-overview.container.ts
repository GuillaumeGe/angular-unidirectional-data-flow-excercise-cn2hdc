import { Component } from '@angular/core';
import { Car } from '../../types/car.type';

@Component({
  selector: 'app-ctn-car-overview',
  template: `
    <h1>Car overview</h1>
    <app-car-list [cars]="cars" (increaseNumberOfDoors)="onIncreaseNumberOfDoors($event)"></app-car-list>
  `,
})
export class CarOverviewContainer {
  cars: Car[] = [
    {
      id: '1',
      make: 'BMW',
      model: '3 series GT',
      color: 'blue',
      numberOfDoors: 3,
    },
    { id: '2', make: 'Audi', model: 'RS3', color: 'red', numberOfDoors: 0 },
    { id: '3', make: 'Ford', model: 'GT', color: 'yellow', numberOfDoors: 2 },
    {
      id: '4',
      make: 'Bentley',
      model: 'Continental',
      color: 'black',
      numberOfDoors: 0,
    },
  ];

  constructor() {}

  private onIncreaseNumberOfDoors(carId: string): void {
    // When the number of doors increased we make sure a new reference
    // is created for both the list and for the car.
    this.cars = this.cars.map((car: Car) => {
      return car.id === carId
        ? { ...car, numberOfDoors: car.numberOfDoors + 1 }
        : car;
    });
  }
}
