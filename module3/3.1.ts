{
    // 
class Animal{
    constructor(public name:string,public species:string,public sound:string){}

    makeSound(){
        console.log(`The ${this.name} says ${this.sound}`);
    }
}
const dog=new Animal("German Shepard", "dog", "barking");
const cat=new Animal("Peresian", "cat", "Mewing");



    // 
}