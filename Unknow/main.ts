// in ts the unknown is used when we dont know the type  but still wants the type checking `

let resultFinal: unknown;

resultFinal = 1;
resultFinal = 'hello';
resultFinal = false;
resultFinal = Symbol();
resultFinal = { name: 'John' };
resultFinal = [1, 2, 3];


let result3: any;
result3 = [1,2,3];

const total = result3.reduce((a: number, b:number ) => a + b, 0);
console.log(total);