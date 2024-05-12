
for (let i=0; i<100; i++ ){

    let myNumero= i + 1;
     
    
    if (myNumero %3===0 && myNumero %5===0){
        console.log("FizzBuzz")
    }else if (myNumero %5===0){
        console.log("Buzz")
    }else if (myNumero %3===0){
        console.log("Fizz")
    }else{
        console.log(myNumero)
    }
}