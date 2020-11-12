let user = {
    name: "David",
    age: 17
}
let user2 = {
    name: "object 2",
    age: 0
}
let user3 = {
    name: "object 3",
    age: 2
}
let david = 1;

console.log('Hello world');
console.info("Hola!");
console.dirxml(user);
console.warn(user, [user2, user3]);
console.error(user2, user3);
console.profile(david);