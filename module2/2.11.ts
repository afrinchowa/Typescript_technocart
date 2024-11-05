{
  // Utility types
  // Pick

  type Person = {
    name: string;
    age: number;
    email?: string;
    contactNo: number;
  };

  // Pick
  type NameAge = Pick<Person, "name" | "age">;

  // Omit
  type ContactInfo = Omit<Person, "name" | "age">;

  // Required
  type PersonRequired = Required<Person>;

  // Partial
  type PersonPartial = Partial<Person>;

  //Read only
type PersonReadOnly = Readonly<Person>
  const person1 : PersonReadOnly = {
    name:"Mr cx",
    age:200,
    contactNo:345345
  }

  person1.name="mr df"

// Record

// type MyObj ={
//     a:string;
//     b:string
// }

type MyObj =Record<string,string>

const EmptyObj: Record<string,unknown> = {}

const obj1 : MyObj ={
    a: "aa",
    b: "bb",
    c: "cc",
    d: "dd",
}



//   
}
