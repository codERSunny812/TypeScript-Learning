const x = 12; // ts assume its type to be number


const sun =(function sunny (y=12){
    return y+1;
})()

console.log(sun)