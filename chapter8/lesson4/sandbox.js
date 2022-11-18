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
});*/

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

doWork();