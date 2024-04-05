//write a function that takes in a string and array and 
//returns a new array if that string is within an item in that array


// function thisChallenge(x,y){
//     let newArray=[];
//   for(let item of y){
//     if(item.includes(x)){
//         newArray.push(item);
//     }
//   }
//   return newArray;
// }
// console.log(thisChallenge("a", ["apple", "banana", "lettuce"]));
// console.log(thisChallenge("shi", ["t-shirt", "vest", "pants", "long sleeve shirt"]));
// console.log(thisChallenge("New", ["new york", "new jersey", "New Hampshire", "ohio"]));



function thatChallenge(a,b){
    
    aDown = a.toLowerCase();
    let newerArray=[];
    for(let it of b){
        if(it.toLowerCase().includes(aDown)){
            newerArray.push(it);
        }
    }
    console.log(newerArray);
   
}

thatChallenge("A", ["Apple", "Banana", "Lettuce"]);
thatChallenge("new", ["new york", "new jersey", "New Hampshire", "ohio"]);
thatChallenge("shi", ["t-shirt", "vest", "pants", "long sleeve shirt"]);


// thisChallenge("a", ["apple", "banana", "lettuce"]); //["apple", "banana"]
// thisChallenge("shi", ["t-shirt", "vest", "pants", "long sleeve shirt"]); //["t-shirt", "long sleeve shirt"]
// thisChallenge("New", ["new york", "new jersey", "New Hampshire", "ohio"]); //["new york", "new jersey", "New Hampshire"]