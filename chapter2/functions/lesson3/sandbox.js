const calcArea = function(radius){
return 3.14 * radius **2;
}
const area = calcArea(5);
console.log(area);

//Arrow function- short way of creating functions
//if there is one parameter we lose the braces()
//if there is one return statement we lose the return keyword and the brackets{}

const area1 = (radius) => {
    return 3.14 * radius **2;
};

const a = calcArea(5);
console.log(a);

//futher break it down
const calArea2 = radius => 3.14 * radius **2;

const a2 = calcArea(5);
console.log(a2);