let unionNumber : number | string;
unionNumber = 12;
unionNumber = "sunny";

// unionNumber = true // i will get an error 

// function to add two arguments 

function  add(a:number | string,b:number| string) : number| string{
if(typeof a === 'number' && typeof b === 'number'){
    return a+b;
}else if(typeof a === 'string' && typeof b === 'string'){
   return a.concat(b);
}

throw Error("invalid type")
}


const addedValue = add(2,4)
console.log(addedValue)

const addedValue2 = add("hello","sunny")
console.log(addedValue2)


const addedValue3 = add("hello",3)
console.log(addedValue2)
