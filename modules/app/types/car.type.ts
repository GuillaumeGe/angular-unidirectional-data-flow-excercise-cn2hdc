export interface Car
  extends Readonly<{
    id: string;
    make: string;
    model: string;
    color: string;
    numberOfDoors: number;
  }> {}
