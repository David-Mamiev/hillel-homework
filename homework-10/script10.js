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
            _this.$$tasks.forEach(function (cb) {
                cb();
            })
            _this.$$runnerId = setTimeout(callback, speed);
        }, speed);
    },
    stop: function () {
        clearTimeout(this.$$runnerId);
    }
}

runner.add(() => console.log("Hello"));
runner.add(() => console.log("World"));
runner.setSpeed(1000);



const arr3 = [1, 2, 3, 4, 5];

const funcForEach = function (arr, callback) {
    for (let i = 0; i < arr.length; i++){
        callback(arr[i], i, arr);
    }
}
funcForEach(arr3, i => console.log(i));

const funcSome = function (arr, cb) {
    for (let i = 0; i <= arr.length; i++){
        if (cb.call(arr[i], i, arr)) {
            return true;
        }
    }
    return false;
}
const ret = funcSome(arr3, element => element == 5);
console.log(ret);



const fncEver = function (arr, cb) {
    if(arr.length === 0){
        return true;
    }
    for (let i = 0; i <= arr.length; i++){
        let iElem = arr[i];
        if (i in arr) {
          let result = cb.apply(arr, [iElem, i, arr])
            if (!result) {
                return false;
            }
        };
    };
    return true;
}
const ret2 = fncEver(arr3, element => element === 2);
console.log(ret2);