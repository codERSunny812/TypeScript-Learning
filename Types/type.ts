// some basic type in the ts

let nameOfMe: string="sunny"
let age:number = 23
let isAboveEignteen:boolean=true

// array type 
let number: number[]=[1,2,3,4,5]
let nameOfPerson: string []=["sunny","manas","shivam","shiv","varun"]



// object type 

let person : {name:string,age:number,hobbies:Array<string>} = {
    name:"sunny",
    age:23,
    hobbies:["running","cycling","coding","travelling"]
}

// union type 

let id: number | string;
id=123;
id="134"


// for function

// this is a how we decalre the function in js 

function printName(name,age){
console.log(`hello ${name} and im ${age} year old`)
}


printName(
    "sunny",
    23
)

// function type
let greet : (name:string) => void; 

// function defination 
greet = (name) => console.log(`hello, ${name}`)

// function call
greet("sunny")
