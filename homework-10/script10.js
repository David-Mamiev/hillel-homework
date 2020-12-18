const runner = {
    $$runnerId: null,
    $$tasks: [],
    setSpeed: function (speed) {
        this.stop();
        this.start(speed);
    },
    add: function (task) {
        this.$$tasks.push(task);
    },
    start: function (speed) {
        var _this = this;
        this.$$runnerId = setTimeout(function callback() {
            _this.$$tasks.forEach(function () {
                // Here
            })
            _this.$$runnerId = setTimeout(callback, speed);
        }, speed);
    },
    stop: function () {
        clearTimeout(this.$$runnerId);
    }
}


const arr = [1, 2, 3, 4, 5];

function decr (arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * 5;
    }
    return arr;
}
decr(arr);
console.log(arr);



//const even = (Element) => typeof(Element) === 'string';
//console.log(arr.some(even));
function fncStr (arr) {
    let bool = false;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 5) {
            bool = true;
        };
    };
    console.log(bool);
    return bool;
}
fncStr(arr);



//const even1 = (Element) => typeof(Element) === 'number';
//console.log(arr.every(even1));
function fncNumb (arr) {
    let bool = false;
    let digit = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 2) {
            digit++;
        };
        if (digit === arr.length){
            bool = true;
        }
    };
    console.log(bool);
    return bool;
}
fncNumb(arr);