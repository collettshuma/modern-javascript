//callbacks & foreach
/*
const myFunc = (callbackFunc) => {
    //do something
    let value = 50;
    callbackFunc(value);
};

myFunc(function(value){console.log(value);});
*/

// callbacks & forEach
let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

const logPerson = (person, index) => {
  console.log(`${index} - hello ${person}`);
}

// people.forEach(person => {
//   console.log(`hello ${person}`);
// });

people.forEach(logPerson);
