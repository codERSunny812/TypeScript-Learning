const arr : number[] = [2,4,5,6,9,10,1,-1];

//function to traver the array 
function traverseArr(arr:number[]){
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}
}

traverseArr(arr)

// storing values of mixed type in array 
const arr2 : (string | number) [] =[1,2,4,"sunny",5,"sushil"]


//function to traver the array 
function traverseArr2(arr:(number | string)[]){
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}
}

traverseArr2(arr2)