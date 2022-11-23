const MyContract = artifacts.require('./contracts/MyContract.sol');

contract('MyContract',(accounts) =>{
   it('gets a value',async () => {
       const myContract = await MyContract.deployed();
       const value = await myContract.get();
       assert.equals(value,'MyValue');
   })

   it('sets a new value', async () => {
      const myContract = await MyContract.deployed();
      myContract.set('NewValue');
      const value = await myContract.get();
      assert .equals(value,'NewValue');
   })
})