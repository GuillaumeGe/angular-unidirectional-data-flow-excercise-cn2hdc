import {
  Component,
  Input,
  Output,
  ChangeDetectionStrategy,
  EventEmitter,
} from '@angular/core';
import { Car } from '../../types/car.type';

// add necessary inputs and outputs for list item
// emit value to parent

@Component({
  selector: 'app-car-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-car-list-item *ngFor="let car of cars" [car]="car" (increaseNumberOfDoors)="this.increaseNumberOfDoors.emit($event)"></app-car-list-item>
  `,
})
export class CarListComponent {
  @Input() cars: Car[];
  @Output() increaseNumberOfDoors = new EventEmitter<string>();
}
