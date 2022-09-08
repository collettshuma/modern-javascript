//IF STATEMENTS

const age = 20;

if(age <= 20){
    console.log("you are still young");
}

const names = ['josh','mario', 'luigi'];

if (names.length > 1){
    console.log("yes that is true");
}

//else if

const password = "p@ss";

if(password.length > 6){
    console.log('password is long enough');
}else{
    console.log('password is to short');
}

//to check multiple conditions
const passWord = "dsahha";

if(passWord.length >= 12){
    console.log('this password is might strong');
}else if(passWord.length >= 8){
    console.log('this password is fairly strong');
}else {
    console.log('this is weak password');
}

// LOGICAL OPERETORS
//Checking 2 conditions in the same line. && used to check if both conditions are true, they have to be true to execute the first statement.Other than that the else statement executes
/*
const psswrd = 'p@ssword1234';

if(psswrd.length >= 12 && psswrd.includes('@')){
    console.log('that password is mighty strong');
}else if(psswrd.length >= 8){
    console.log('that password is long enough');
}else {
    console.log('password is not long enough');
}
*/

const psswrd = 'p@ss';

if(psswrd.length >= 8 || psswrd.includes('@')){
    console.log('that password is long enough');
}else {
    console.log('password is not long enough');
} 