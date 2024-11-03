{
  // generic type
  type GenericArray<param> = Array<param>;
  // const rollNumbers: number[] = [3,6,8];
  const rollNumbers: GenericArray<number> = [3, 6, 8];

  // const mentrors: string[] = ['Mr. X','Mr. Y','Mr. Z']
  // const mentrors: Array<string> = ['Mr. X','Mr. Y','Mr. Z']
  const mentrors: GenericArray<string> = ["Mr. X", "Mr. Y", "Mr. Z"];

  // const boolArray: boolean[] = [true,false,true]
  // const boolArray: Array<boolean> = [true,false,true]
  const boolArray: GenericArray<boolean> = [true, false, true];

  const user: GenericArray<{ name: string; age: number }> = [
    {
      name: "chowa",
      age: 23,
    },
    {
      name: "afrin",
      age: 26,
    },
  ];

  // generic tuple
  type GenericTuple<X, Y> = [X, Y];
  const manush: GenericTuple<string, string> = ["Mr. X", "Mr. Y"];
  const UserWithID: GenericTuple<number, { name: string; email: string }> = [
    1234,
    { name: "chowa", email: "a@gmail.com" },
  ];

  //
}
