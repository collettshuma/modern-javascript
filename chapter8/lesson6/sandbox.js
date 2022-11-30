//key-value realtionship
let map = new Map();

map.set("1","Durban");
map.set("2","Joburg");
map.set("3","Cape Town");

console.log(map.values());
console.log(map.keys());

//check whether we has a particular key
console.log(map.has("1"));

console.log(map.get("1"));

//print all the keys and values
for(let [key,value] of map){
    console.log(key, ":", value); 
}