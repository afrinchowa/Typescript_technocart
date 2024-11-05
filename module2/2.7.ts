{
    // generic constrait with keyof operator
type Vehicle ={
    bike:string;
    car:string;
    ship:string;
}

type Owner = "bike" |  "car"  | "ship";//manually
type Owner2 = keyof Vehicle;

    // 
const getPropertyValue = <X,Y extends  keyof X> (obj:X,key:Y)=> {
    return obj[key];
}
const user ={
    name: "mr x",
    age:25,
    address: "ctg"
};
const car  = {
    model:"Toyota 100",
    year: 200
}
const  result = getPropertyValue(car,"model");

}