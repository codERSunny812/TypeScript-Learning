let anyValue: any;

anyValue = 1;
console.log(anyValue);

anyValue = 'Hello';
console.log(anyValue);

anyValue = [1, 2, 3];
const t = anyValue.reduce((a: number, b: number) => a + b, 0);
console.log(t);