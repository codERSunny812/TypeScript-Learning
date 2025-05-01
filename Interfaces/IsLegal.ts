// to avoid the code repetation we can use the  interface 

interface User{
    fullName:string,
    age:number,
    gender:string,
    nickName?:string //optional props
}

// function isLegal(user:{
//     fullName:string,
//     age:number,
//     gender:string
// }){
// console.log(`hey guyss my name is ${user.fullName} and my im ${user.age} year old and im a ${user.gender}`);
// }


// using the interface 
function isLegal(user:User){
   console.log(`hey guyss my name is ${user.fullName} and my im ${user.age} year old and im a ${user.gender}`); 
}



isLegal({
    fullName:"sunny pandey",
    age:23,
    gender:"male"
})


isLegal({
    fullName:"sushil  pandey",
    age:23,
    gender:"male",
    nickName:"sunny"
})



