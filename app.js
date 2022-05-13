function Roll(diceType){
    let result = document.getElementsByClassName("Result");
    let roll = Math.floor(Math.random() * diceType) + 1;
    for(i = 0; i < 6; i++){
        result[i].innerHTML = roll;
    }
}