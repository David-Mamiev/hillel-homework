function nat(c) {
    if(typeof(c) !== 'NaN' && c !== null && typeof(c) !== 'string' && typeof(c) !== 'undefined'){
        for (let i = 1; i <= c; i++) {
            console.log(i);
        }
    } else {
        console.log('Вы ввели не натуральное число');
    }
};
nat(4);


function natTwo(a) {
    for (let i = 0; i < a; i++) {
        let res = Math.pow(2, i);
        if (res == a){
            return console.log("YES");
        }
    }
    return console.log("NO");
};
natTwo(8);

function sum(x) {
    const masiv = String(x).split("");
    let result = 0;
    for (let i = 0; i < masiv.length; i++) {
        result += Number(masiv[i]);
    }
    console.log(result);
    return result;
};
sum(123444);






function depth(obj) {
    const objectCopy = {};
    for (const key in obj) {
        let element = [key];
        objectCopy[element] = obj[key];
    } 
    console.log(objectCopy);
    return objectCopy;
};
const object1 = {
    name: "John",
    surname: "Smit",
    dop: {
        age: 20,
        parents: {
            fatherName: "Tim",
            motherName: "Jane",
        }
    }
}
depth(object1);







const obj2 = {
    name: "John",
    surname: "Smit",
    dopInfo: {
      age: 21,
      mother: {
        name: "Jane",
        age: 40,
      }
    }
}
/*function fnc (obj, str) {
    let value, laneXZ;
    if(Array.isArray(str)){
        str.shift();
        laneXZ = str;
    } else {
        laneXZ = str.split('.');
    }
    if (typeof(obj) !== "object" || obj === null) return obj;
    for(const el of laneXZ){
        value = obj[el];
        return fnc(value, laneXZ);
    }
}
console.log(fnc(obj2, 'dopInfo.mother.name'));*/
function fnc (obj, str) {
    let arr = str.split('.');
    /*let value1 = obj[arr[0]];
    let value2 = value1[arr[1]];
    let value3 = value2[arr[2]];
    console.log(value1);
    console.log(value2);
    console.log(value3);*/
    for(let i = 0; i < arr.length; i++){
        let el = 0;
        i = obj[arr[el]];
        let value;
        console.log(i);
       while (typeof(i) == "object"){
        arr.shift();
        value = i[arr[i]];
       }
       console.log(value);
    }
}
console.log(fnc(obj2, 'dopInfo.mother.name'));