import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';
import { Car } from '../../types/car.type';

// add the necessary event to the button
// emit a value to the parent, when button event triggers

@Component({
  selector: 'app-car-list-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div>
      <div><strong>{{car.make}} {{car.model}}</strong></div>
      <div>Color: {{car.color}}</div>
      <div>Number of doors: {{car.numberOfDoors}}</div>
      <div><button (click)="this.increaseNumberOfDoors.emit(car.id)">Increase number of doors</button></div>
      <hr>
    </div>
  `,
})
export class CarListItemComponent {
  @Input() car: Car;
  @Output() increaseNumberOfDoors = new EventEmitter<string>();

  //Raise the event to send the data back to parent
}
