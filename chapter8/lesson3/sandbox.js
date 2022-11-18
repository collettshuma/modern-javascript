/*const eatBanana = () => {
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
})*/

function makeRequest(location){
    return new Promise((resolve,reject) => {
        console.log(`Making Request to ${location}`)
        if(location === 'Google'){
            resolve('Google says hi')
        } else {
            reject('We can only talk to Google')
        }
    })
}

function processRequest(response){
    return new Promise((resolve,reject) =>{
        console.log('processing response')
        resolve(`Extra Information + ${response}`)
    })
}

makeRequest('Google').then((response) => {
    console.log('Response Received');
    return processRequest(response)
}).then((processedResponse) => {
    console.log(processedResponse)
}).catch((err) => console.log(err))