const eatBanana = () => {
    return new Promise((resolve,reject) => {
        let eatB = false;

        if(eatB){
            resolve(`i ate it and its delicious`);
        }else{
            reject(`i have an allergy so couldn't eat it`)
        }
        })
}

eatBanana().then((fromResolve) => {
    console.log(`${fromResolve}`);
}).catch((fromReject) => {
    console.log(`${fromReject}`);
})