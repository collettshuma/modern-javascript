//variables and block scope

let age = 30;

if(true){
    let age = 40;
    let name = 'shaun';
    console.log('inside 1st code block', age,name)
}
console.log('outside code block', age,name);