const Singleton = (() => {
    const uniqueKey = Symbol('instance');
    let instance;
    function Singleton(key) {
      if(key !== uniqueKey) throw new Error('You should you instance static method instead');
    }
   
   Singleton.getInstance = () => {
     return instance ? instance : (instance = new Singleton(uniqueKey));
   }
   
   return Singleton;
 })();
 
 console.log(Singleton.getInstance() === Singleton.getInstance());




 const weapon = {
	modifications: ['total power', 'giant bullet'],
  type: ['boom'],
  [Symbol.iterator]() {
    const values = Object.values(weapon);
    return {
      next() {
        const done = !values.length;
        const nextValue = values.shift();
        return {
          value: nextValue,
          done,
        }
      }
    }
  }
};

const allProperties = [...weapon]; // ['total power', 'giant bullet', 'boom']
console.log(allProperties);

/*const objectIterator = weapon[Symbol.iterator]();
console.log(objectIterator.next());
console.log(objectIterator.next());
console.log(objectIterator.next());
console.log(objectIterator.next());
console.log(objectIterator.next());*/