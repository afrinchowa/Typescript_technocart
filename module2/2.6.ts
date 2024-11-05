{
  //constraints
  const addCourseToStudent = <T extends {id:number; name:string; email:string}>(student: T) => {
    const course = "Next Level Web development";

    return {
      ...student,
      course,
    };
  };

  const student1 = addCourseToStudent({
    id:222,
    name: "haiku",
    email: "x@dfd.com",
    devType: "NLWD",
  });
  const student3 = addCourseToStudent({
    id:456,
    name: "X4",
    email: "x4@dfd.com",
    emni: "emi",
  });
  const student2 = addCourseToStudent({
    id:333,
    name: "haiku 2",
    email: "y@dfd.com",
    hasWatch: "apple watch",
  });
  //
}
