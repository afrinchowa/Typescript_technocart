{
  // function with generic

  const createArray = (param: string): string[] => {
    return [param];
  };

  const createArrayWithGeneric = <T>(param: T): T[] => {
    return [param];
  };

  const res1 = createArray("Bangladesh");
  const resGeneric = createArrayWithGeneric<string>("Bangladesh");
  type User = { id: number; name: string };
  const resGenericObj = createArrayWithGeneric<User>({
    id: 222,
    name: "Mr Abid",
  });

  //here is tuple started 

  const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
    return [param1, param2];
  };

  const res10 = createArrayWithTuple<string, number>("Bangladesh", 222);
  const res11 = createArrayWithTuple<string, { name: string }>("Bangladesh", {
    name: "Asia",
  });

  const addCourseToStudent = <T>(student: T) => {
    const course = "Next Level Web development";

    return {
      ...student,
      course,
    };
  };

  const student1 = addCourseToStudent({
    name: "haiku",
    email: "x@dfd.com",
    devType: "NLWD",
  });
  const student2 = addCourseToStudent({
    name: "haiku 2",
    email: "y@dfd.com",
    hasWatch: "apple watch",
  });
}
