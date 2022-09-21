/*function greet(name){
    console.log(`hello  ${name}`);
};
greet('mario');


const greet = function(name){
    console.log(`hello ${name}`)
}

greet('mario');

const greet = (name) => {
    console.log(`hello ${name}`)
}
greet('mario');

const greet = name => console.log(`hello ${name}`);

 greet('mario');

 const calciArea = (radius) => {
    return 3.77 * radius**2;
 }
 const area = calciArea(5);
 console.log(area);

 const calciArea = radius => 3.14 * radius**2;
 
 const area = calciArea(5);
 console.log(area);*/


 //asyc progamming
 //callbacks

 function greet(){
    console.log('hello');
 }

 function greett(){
    console.log('hie');
 }

 //greet();
 setTimeout(greet, 1000);
 greett();

