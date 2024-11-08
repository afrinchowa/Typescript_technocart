{
  // conditional type
  type a1 = number;
  type b1 = string;

  type x = a1 extends null ? true : false; //conditional type
  type y = a1 extends null ? true : b1 extends undefined ? undefined : any;

  type Seikh = {
    bike: string;
    car: string;
    ship: string;
  };
  // car ase kina / bike ase kina / ship ase kina
  type CheckVehicle<T> = T extends keyof Seikh ? true : false;
  type HasTractror = CheckVehicle<"tractor">;
  type HasPlane = CheckVehicle<"plane">;

  //
}
