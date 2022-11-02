let cleanRoom = () => {
   return new Promise((resolve,reject) => {
    let isClean = true;
    if(isClean){
        resolve(`the room has been cleaned`);
    }else{
        reject(`the room is still dirty`);
    }
   });
};

let removeGarbage = (message) => {
    return new Promise((resolve,reject) => {
        let finishedCleaning = true;

        if(finishedCleaning){
            resolve(`${message} go ahead and remove the garbage`);
        } else{
            reject(`wait for cleaning to be done`);
        }
    });
};

let winIcecream = (message) => {
    return new Promise((resolve,reject) => {
        let removeGarbage = true;

        if(removeGarbage){
            resolve(`${message} you have won icecream`);
        }else{
            reject('you not getting the icecream');
        }
    });
};

/*cleanRoom().then((resolve) => {
    return removeGarbage(resolve);
}). then((resolve) => {
    return winIcecream(resolve);
}). then((resolve) => {
    console.log(`finished ${resolve}`);
})*/

Promise.all([cleanRoom(),removeGarbage(),winIcecream()]).then((resolve) => {
    console.log(`finished ${resolve}`);
})

