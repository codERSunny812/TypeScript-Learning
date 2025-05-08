type naam = string;


// type alias for the primitive data 
let nameOfThePerson : naam = "sunny"; 

// type alias for the non primitive data 
type PersonInfo = {
    firstName:string,
    lastName:string,
    age:number

}

let userDataInfo : PersonInfo={
    firstName:"sunny",
    lastName:"pandey",
    age:23
}



// for union  type
type alphaNumeric = number | string;

let input : alphaNumeric;
input=12;
input="hiii";
// input=true // not valid 