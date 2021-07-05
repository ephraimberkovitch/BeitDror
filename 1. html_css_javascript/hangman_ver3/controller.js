/*
    hangman project-
    This is the controller js file of the web application
*/


/* set the word for the hangman game*/
const word = "computer";

/* setting game list */
const triesList = [firstTry, secondTry, ThirdTry, fourthTry, FifthTry];

function algorithm(userVarForGame, tryNumber){
    for(let i in word){
        if(userVarForGame === i) {
            return tryNumber = true
        }
        else{
            continue
        }
        return tryNumber = false
    }
}

function main() {

    var userVarForGame = document.getElementById("generalInputForUser");

    for (let j = 0; j < word.length; j++){

        for(tryNumber in triesList){
            function manager(){
                if (userVarForGame.length === 1 && userVarForGame.match(/[a-z]/i)){
                    algorithm(userVarForGame, tryNumber);
                    triesList[tryNumber] = tryNumber === true;
                }
                else{
                    alert("Try again!!");
                }
            }
        }
        if (j === 7){
            alert("Win!")
        }
    }
}




