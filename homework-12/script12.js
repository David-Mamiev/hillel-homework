function sum(a,b,c,d) { return a+b+c+d; }

function curry(fnc, a,b){
  return fnc.bind(null, a,b);
}
const curriedFunction = curry(sum, 1,2); // запоминает для вызова sum 2 параметра
//const curriedFunction = sum.bind(null, 1,2);

console.log(curriedFunction(3,4)) // выводит 10 т.е. выполняется функционал sum(1,2,3,4).


function counter () {
  return {
    number: 0,
    inc: function (){
      return this.number++;
    },
    dec: function (){
      return this.number--;
    },
    value: function (){
      return this.number;
    }
  }
}
const iterator = counter();
iterator.inc() // увеличивает значение на 1
iterator.inc() // еще на 1
iterator.dec()// уменьшает на 1
console.log(iterator.value()) // выводит 1





