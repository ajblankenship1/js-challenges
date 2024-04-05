function isANumber(x){
    let test = Number(x);
    if (isNaN(test)){
         return false;
    }else{
        return true;
    }
}

 console.log(isANumber("3.5"));

isANumber("aj") //false
isANumber("2") //true
isANumber("3.5") //true
isANumber("13s2") //false
isANumber("one") //false