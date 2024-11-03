{

// type Alias
type Student ={
    name: string;
    age: number;
    gender:string ;
    contact?:string ;
    address: string;
}
const student1: Student ={
    name: 'Chowa',
    age: 23,
    gender:'Female' ,
    contact: '435345345',
    address: 'rtertw',
}
const student2:Student={
    name: 'Arif',
    age: 24,
    gender:'male',
    address: 'qewrqwer',
}

type UserName = string;
type IsAdmin = boolean;
const userName : UserName = "Chowa";
const isAdmin : IsAdmin =true;
type Add = (num1:number , num2: number)=>number;
const add:Add =(num1, num2)=>num1 +num2;






















}