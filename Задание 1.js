function whatANumber (){
    let input = prompt("Enter a number");
    input = +input
    if (isNaN(input)) {console.log("Упс, кажется, вы ошиблись")}
    else if (input%2 == 0) {console.log("Это четное число")}
    else if (input%2 != 0) {console.log("Это нечетное число")}
   }
whatANumber(4)