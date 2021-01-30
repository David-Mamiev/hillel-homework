//import { sum } from './utils';

const mockRequest = (data, cb, timeout = 1000) => {
    setTimeout(() => {
        cb(data);
    }, timeout);
};
const p = Promise.resolve(2);
p.then((value) => console.log(value));
