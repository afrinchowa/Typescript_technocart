{
  // ternary operator || optional chaining || nullish coalescing operatopr

  const age: number = 18;
  if (age >= 18) {
    console.log("adult");
  } else {
    console.log("not adult");
  }
  const isAdult = age >= 18 ? "adult" : "not adult";
  console.log({ isAdult });

  // nullish  coalescing operator
  // jodi null and undefined er opore kono decision making korte hoy
  const isAuthenticated = "";
  const result1 = isAuthenticated ?? "Guest";
  const result2 = isAuthenticated ? isAuthenticated : "Guest";
  console.log({ result1 },{result2});
}
