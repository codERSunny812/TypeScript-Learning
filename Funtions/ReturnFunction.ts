
function sumOfNumber (a:number,b:number):number{
    return a+b
}


sumOfNumber(12,18);

// if the function returm something else  other than the type of the argument then we have to write the return type of the function too


function isLegal(age:number):string{
if(age<18){
    return "you cant drive the car"
}else{
    return "you can drive the car"
}
}


isLegal(12)