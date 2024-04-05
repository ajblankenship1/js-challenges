
function arrayDiff(arrayOne, arrayTwo){
    let arrayofDiff= [];
    for( let i of arrayTwo){
        if (!arrayOne.includes(i)){
            arrayofDiff.push(i);
        }
    }
    console.log(arrayofDiff);
}


arrayDiff([1,2,3], [2,3,4]);//[4]
arrayDiff([2,3,4], [1,2,3]);//[1]
arrayDiff([1,2], [3,4,1,5]);//[3,4,5]
arrayDiff([3,4,1,5],[1,2]); //[2]
arrayDiff([23,55,77,100],[23,44,100,9]);