/*let number = Number(prompt("Введите число"));
let degree = Number(prompt("Введите степень, в которую хотите возвести число"));
const exponentiation = function (number, degree) {
    let raisedNumber = 1;
    for (let i = 1; i <= degree; i++) {
        raisedNumber *= number;
    }
    console.log(raisedNumber);
};
exponentiation (number, degree);
exponentiation (2, 3);*/



let yourNumb;
let rand = Math.floor(Math.random() * (10 - 1) + 1);

/*while (!(Number(yourNumb) === rand || Number(yourNumb) === null)) {
    yourNumb = prompt("Попробуйте угадать число (от 0 до 10)");
    console.log("Ваше число: " + yourNumb);
    if (yourNumb === null){
        console.log("Вы вышли из игры");
        break;
    }
    if (Number(yourNumb) === rand) {
        console.log("Вы угадали!");
        break;
    }
}*/
const zapusk = function (yourNumb) {
    yourNumb = prompt("Попробуйте угадать число (от 0 до 10)");
    console.log("Ваше число: " + yourNumb);
    while (!(Number(yourNumb) === rand || Number(yourNumb) === null)) {
        yourNumb = prompt("Попробуйте угадать число (от 0 до 10)");
        console.log("Ваше число: " + yourNumb);
        if (yourNumb === null){
            console.log("Вы вышли из игры");
            break;
        }
        proverka (yourNumb, rand);
    }
};
const proverka = function (yourNumb, rand) {
    if (Number(yourNumb) === rand) {
        console.log("Вы угадали!");
    } 
};
zapusk (yourNumb);