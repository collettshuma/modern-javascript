let promiseToClean =new Promise((resolve,reject) =>{
   let isClean = true;

   if (isClean){
    resolve('clean');
   } else{
    reject('not clean');
   }
});

promiseToClean.then((resolve) =>{
    console.log(`the room is ${resolve}`)
}). catch ((reject) => {
    console.log(`in the room ${reject}`)
})