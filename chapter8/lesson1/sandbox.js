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

let promiseToStudy = new Promise((resolve,reject) => {
    let didStudy = false;

    if(didStudy){
        resolve(`i studied coding for 2 hours`);
    } else{
        reject(`i was occupied so didn't find time to study`)
    }
});
promiseToStudy.then((resolve) => {
    console.log(resolve);
}).catch((reject) => {
    console.log(reject);
})