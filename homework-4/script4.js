let numberPolz = Number(prompt("Введите число от 1 до 10"));
let howManyNumbers = 0;

for (i = 1; i < 75; i++) {
    if (i % numberPolz == 0) {
        console.log(i);
        howManyNumbers++;
    }
}
console.log("Всего выведенных чисел кратных числу " + numberPolz + " : "  + howManyNumbers);
/*let i = 0;
while (i < 75) {
    i++;
    if (i % numberPolz == 0){
        console.log(i);
        howManyNumbers++;
    }
}
console.log("Всего выведенных чисел кратных числу " + numberPolz + " : "  + howManyNumbers);*/

/*
let i = 0;
do {
    i++;
    if (i % numberPolz == 0){
        console.log(i);
        howManyNumbers++;
    }
} while (i < 75);
console.log("Всего выведенных чисел кратных числу " + numberPolz + " : "  + howManyNumbers);*/




let yourNumb;
let rand = Math.floor(Math.random() * (10 - 1) + 1);

while (!(Number(yourNumb) === rand || Number(yourNumb) === null)) {
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
}
/*do {
    yourNumb = prompt("Попробуйте угадать число (от 0 до 10)");
    console.log("Ваше число: " + yourNumb);
    if (yourNumb === null){
        break;
    }
} while (!(Number(yourNumb) === rand || Number(yourNumb) === null));*/


/*for (i = 0; i < 100; i++) {
    yourNumb = prompt("Попробуйте угадать число (от 0 до 10)");
    console.log("Ваше число: " + yourNumb);
    if (Number(yourNumb) === rand) {
        console.log("Вы угадали!");
        break;
    } else if (yourNumb === null){
        console.log("Вы вышли из игры");
        break;
    }
}*/

