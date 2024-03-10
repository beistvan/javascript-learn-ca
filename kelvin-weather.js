//Degree in Kelvins
const kelvin = 0; //293 -> 68; 0 -> -460
//console.log(kelvin);
//Ceilsius in Kelvins
const celsius = kelvin - 273;
//console.log(celsius);
//equation to calculate Fahrenheit degrees and rounding it
fahrenheit = Math.floor(celsius * (9.0 / 5.0) + 32.0);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
//equation to calculate Newton degrees and rounding it
const newton = Math.floor(celsius * (33.0 / 100.0 ));
console.log(`The temperature is ${newton} degrees Newton.`);
//some matrix operations in JS
/*
const a = new Array(10);
for(let i = 0; i < 10; i++){
  a[i]=Math.floor(Math.random()*(99-10)+10);
}
console.log(a.toString());
console.log(Math.max(...a));
a.sort((a,b)=>b-a);
console.log(a.toString());
a.sort((a,b)=>a-b);
console.log(a.toString());
const b = new Array(10).fill(0);console.log(b);
b.push(2);console.log(b);
b1=b.pop();console.log(b,b1);
console.log(Math.floor(Math.random()*(99-10)+10));
*/

