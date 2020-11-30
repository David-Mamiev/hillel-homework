const objectFirst = {
    name: "Johnothon",
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
    console.log(how);
}
function copyObjectFunction (objectFirst) {
    let copyObject = {}; 
    for (const key in objectFirst) {
        copyObject[key] = objectFirst[key] = undefined;
    }
    console.log(copyObject);
}
function copyObjectFunctionLength (objectFirst) {
    let copyObjectLength = {}; 
    for (const key in objectFirst) {
        if (typeof objectFirst[key] === "string"){
            copyObjectLength[key] = objectFirst[key] = (objectFirst[key]).length;
        }
        if (typeof objectFirst[key] === "number") {
            copyObjectLength[key] = objectFirst[key];
        }
        if (typeof objectFirst[key] === "boolean"){
            copyObjectLength[key] = Number(objectFirst[key]);
        }
    }
    console.log(copyObjectLength);
}

lenghtOfOnject (objectFirst);
copyObjectFunctionLength (objectFirst);
copyObjectFunction (objectFirst);