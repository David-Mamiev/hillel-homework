function nat(c) {
    return c > 0 ? nat(c - 1) + String(c) +" " : "";
};
console.log(nat(4));

function fncTwo(a, i = 1) {
    let res = Math.pow(2, i);
    if(i < a){
      return a == res ? console.log("YES") : fncTwo(a, ++i);
    } 
    return console.log("NO");
};
fncTwo(8);

function sum(x) {
    if (x !== 0){
        return (x % 10) + sum(Math.floor(x/10))
    }
    return 0;
}
console.log(sum(123));

function depth(obj) {
    const objectCopy = {};
    for (const key in obj) {
        if(obj.hasOwnProperty(key)){
            let element = [key];
            objectCopy[element] = typeof(obj[key]) == "object" || obj[key] == null ? depth(obj[key]) : obj[key]; 
        }
    } 
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
console.log(depth(object1));

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
  function fnc (obj, str) {
    for (const key in obj) {
      let arr;
        if (Array.isArray(str)){
          arr = str;
        } else {
          arr = str.split(".");
        }
        for(let i = 0; i < arr.length; i++){
            let key1 = arr[i];
            if (typeof(obj[key1]) == "object" || obj[key1] == null) {
                arr.shift();
                return fnc(obj[key1], arr);
            } else{
              return obj[key1];
            }
        }
        return 0;
    }
  }
  console.log(fnc(obj2, 'dopInfo.mother.age'));

