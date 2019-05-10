function guessNum(){
var inputNum=document.getElementById("input").value;
    if (inputNum=="15"){
        alert("Congrats! You guessed it!");
    }

    else if (11 < inputNum && inputNum < 19){
        alert("Close one! Let's try again!");
    }

    else alert("Too bad! Try again...");
}