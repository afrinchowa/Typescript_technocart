// reference Type --> Object

const user: {
//   company: "Programming Hero"; 
//type --> literal type
  readonly company:string ; 

  firstName: string;
  middleName?: string; //optional type
  lastName: string;
  isMarried: boolean;
} = {
  company: "Programming Hero",
  firstName: "Moriom",
  middleName: "Afrin",
  lastName: "Chowa",
  isMarried: true,
};
// user.company='ph'