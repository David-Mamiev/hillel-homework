// Zadachka iz klassa 
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
