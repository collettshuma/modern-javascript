//Async Await
/* what we need to do is to set up all our code to a async function
then chain all our promises uses the await keyword.Thus for its a smarter way of 
dealing with promise chaining */

/*
const getTodos = async () => {
   return new Promise((resolve,reject) =>{
    let isClean = true;
    if(isClean){
      resolve('I cleaned my room thoroughly');
    };
    });
    const aaa = await getTodos();
};
getTodos().then((fromResolve) => {
  console.log(fromResolve);
});

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

async function doWork(){
  const response = await makeRequest('Google');
  console.log('Response Received');
  const processedResponse = await processRequest(response);
  console.log(processedResponse);
}

doWork();*/

/*async function doWork(){
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

  const response = await makeRequest('Google');
  console.log('Response Received');
  const processedResponse = await processRequest(response);
  console.log(processedResponse);
}

doWork();*/

console.log('one');
console.log('two');
console.log('three');

const myTasks = async () => {
  let promiseToClean =new Promise((resolve,reject) =>{
    let isClean = true;
  
    if (isClean){
     resolve('clean');
    } else{
     reject('not clean');
    }
  });
  
  let promiseToStudy = new Promise((resolve,reject) => {
    let didStudy = true;
  
    if(didStudy){
        resolve(`i studied coding for 2 hours`);
    } else{
        reject(`i was occupied so didn't find time to study`)
    }
  });
  
  const winIcecream = new Promise((resolve,reject) => {
    const completedTasks = true;
    if(completedTasks){
      resolve('i like my icecrean reward')
    }else {
      reject('did not complete my tasks so no icecream reward')
    }
  })
  
  const response = await promiseToClean;
  console.log(response);
  const response2 = await promiseToStudy;
  console.log(response2);
  const response3 = await winIcecream;
  console.log(response3);
}

myTasks();
console.log('four');
console.log('five');

