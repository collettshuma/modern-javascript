//arguements and parameters
/*
const speak = function(name,time){
    console.log(`good ${time} ${name}`);
}

speak('mario','morning');


const calArea = function(radius){
   let area = 3.14 * radius **2;
   return area;
}
const a = calArea(5);
console.log(a);
*/
const calArea = function(radius){
    return 3.14 * radius **2;
}

//inorder to use the return value elsewhere in the code,it must be stored in a variable(memory)
const area = calArea(5);
console.log(area);

//re using a value that a function return
const calVol = function(area){

}
calVol(area);