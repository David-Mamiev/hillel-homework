console.log("Zadachka iz klassa"); 
let dataBorn = prompt("Введите ваш год рождения");
let age = 2020 - dataBorn;
/*if (!Number(dataBorn)){
    console.log("Вы ввели не числовое значение");
} else if (age > 18) {
    console.log("Вы допущены к сервису! =)");
} else if (age < 12) {
    console.log("Мы советуем вам посетить другой сервис! )");
} else if (age > 12 && age < 18) {
    console.log("Вам запрещенно посещать данный сайт =(");
}*/
let resultOfTernary1 = !Number(dataBorn) ? console.log("Вы ввели не числовое значение") : age > 18 ? console.log("Вы допущены к сервису! =)") : age < 12 ? console.log("Мы советуем вам посетить другой сервис! )") : age > 12 && age < 18 ? console.log("Вам запрещенно посещать данный сайт =(") : console.log("Вам запрещенно посещать данный сайт");

console.log("Oprosnik na rabotu"); 
let age2 = Number(prompt("Напишите ваш возраст"));
let scill = confirm("Имеете ли вы опыт работы в данной отрасли?");
let scillHowMuch;
if (scill) {
    scillHowMuch = Number(prompt("Введите число, сколько лет вы проработали в данной отрасли"));
}
let prospects = confirm("Хотели ли бы вы работать у нас через 5 лет?");
let end = confirm("Вы имеете высшее обращование?");
/*if (age2 >= 30 && scillHowMuch >= 3 && prospects && end) {
    console.log("Вы нам подходите! ;)")
} else {
    console.log("К сожалению, вы нам не подходите :(")
}*/
let resultOfTernary2 = age2 < 30 ? console.log("К сожалению, вы нам не подходите :(") : !scill ? console.log("К сожалению, вы нам не подходите :(") : scillHowMuch < 3 ? console.log("К сожалению, вы нам не подходите :(") : !prospects ? console.log("К сожалению, вы нам не подходите :(") : !end ? console.log("К сожалению, вы нам не подходите :(") : console.log("Вы нам подходите! ;)");