/*
const calcArea = function(radius){
return 3.14 * radius **2;
}
const area = calcArea(5);
console.log(area);

//Arrow function- short way of creating functions
//if there is one parameter we lose the braces()
//if there is one return statement we lose the return keyword and the brackets{}

const calcArea = (radius) => {
    return 3.14 * radius **2;
};

const area = calcArea(5);
console.log(area);
*/

//futher break it down
const calcArea = radius => 3.14 * radius **2;

const area = calcArea(5);
console.log(area);

//example2
// practise arrow functions

// const greet = function(){
//   return 'hello, world';
// }

const greet = () => 'hello, world';

//example 3
// const bill = function(products, tax){
//   let total = 0;
//   for(let i = 0; i < products.length; i++){
//     total += products[i] + products[i] * tax;
//   }
//   return total;
// }

const bill = (products,tax) => {
    let total = 0;
    for(let i = 0; i < products.length; i++){
             total += products[i] + products[i] * tax;
           }
           return total;
};

console.log(greet());
console.log(bill([10,15,30], 0.2))
