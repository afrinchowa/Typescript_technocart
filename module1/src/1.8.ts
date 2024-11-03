// obj distructuring

const user ={
    id:345,
    name:{
        firstName: "Moriom",
        middleName: "Afrin",
        lastName: "Chowa",
    },
    contactNo:'012132342345',
    address:'Barishal'
};
const {contactNo, name:{middleName}}=user;

// array distructuring

const myFriends = ['chandler', 'joey','ross','fibi','monica']

const [,, bestFriend  , ...rest]=myFriends