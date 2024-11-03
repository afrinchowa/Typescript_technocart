{

// union types

// type FrontendDeveloper = 'fakibazDeveloper' | 'juniorDeveloper'

// type FullStackDeveloper = 'frontendDeveloper' | 'expertDeveloper'

// type Developer = 'frontendDeveloper' | 'FullStackDeveloper'
// const newDeveloper : FrontendDeveloper = 'juniorDeveloper'

// type User ={
//     name:string;
//     email? :string;
//     gender: "male" |"female";
//     bloodGroup: "O+" | "A+" |"AB+"
// }
// const user1 : User ={
//     name:'Chowa',
//     gender: 'male',
//     bloodGroup: "O+"
// }




type FrontendDeveloper ={
    skills:string[];
    designation: 'Frontend Developer'
}
type BackendDeveloper ={
    skills:string[];
    designation: 'Backend Developer'
}
type FullStackDeveloper = FrontendDeveloper & BackendDeveloper

const fullstackDeveloper : FullStackDeveloper ={
    skills:['HTML, CSS, Express']
    designation1:'Frontend Developer',
    designation2:'Backend Developer'
}
}