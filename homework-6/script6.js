const objectFirst = {
    name: "John",
    surname: "Smit",
    age: 24,
    bool: true,
};
function lenghtOfOnject (objectFirst) {
    let how = 0;
    for (key in objectFirst) {
        let index = (objectFirst[key]).length;
        if (typeof objectFirst[key] === "string") {
            how += index;
        }
    }
    return how;
}
const stringLengthObj = lenghtOfOnject(objectFirst);
console.log(stringLengthObj);
function copyObjectFunction (objectFirst) {
    let copyObject = {}; 
    for (const key in objectFirst) {
        copyObject[key] = undefined;
    }
    return copyObject;
}
const copyObjectConst = copyObjectFunction(objectFirst);
console.log(copyObjectConst);

function copyObjectFunctionLength (objectFirst) {
    let copyObjectLength = {}; 
    for (const key in objectFirst) {
        if (typeof objectFirst[key] === "string"){
            copyObjectLength[key] = (objectFirst[key]).length;
        }
        if (typeof objectFirst[key] === "number") {
            copyObjectLength[key] = objectFirst[key];
        }
        if (typeof objectFirst[key] === "boolean"){
            copyObjectLength[key] = Number(objectFirst[key]);
        }
    }
    return copyObjectLength;
}
const copyObjectLengthConst = copyObjectFunctionLength(objectFirst);
console.log(copyObjectLengthConst);