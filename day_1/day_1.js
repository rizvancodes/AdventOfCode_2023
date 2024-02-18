const nReadlines = require('n-readlines');

const lines = new nReadlines('input.txt');

const patterns = {
    'one': 1,
    'two': 2,
    'three': 3,
    'four': 4,
    'five': 5,
    'six': 6,
    'seven': 7,
    'eight': 8,
    'nine': 9,
    '1': 1,
    '2': 2,
    '3': 3,
    '4': 4,
    '5': 5,
    '6': 6,
    '7': 7,
    '8': 8,
    '9': 9
}

let line;
let lineNumber = 1;
let keys = Object.keys(patterns);
let sum = 0;

while (line = lines.next()) {
    line = line.toString('ascii');
    console.log(typeof(line));
    let forwards = line;
    let backwards = line;
    let firstDigit = [];
    let lastDigit = []

    firstOuterLoop:
    for ( i = 0; i < line.length; i++) {

        for (j = 0; j < keys.length; j++) {
            let reg = new RegExp(`^${keys[j]}`)
            // console.log(keys[j])
            if(reg.test(forwards) && firstDigit.length == 0) {
                firstDigit.push(patterns[keys[j]]);
                console.log(firstDigit);
                // console.log('hello')
                break firstOuterLoop;
            }
            // console.log(forwards)
        }
        forwards = forwards.slice(1)
    }

    secondOuterLoop:
    for ( i = 0; i < line.length; i++) {

        for (j = 0; j < keys.length; j++) {
            let reg = new RegExp(`${keys[j]}$`)
            if(reg.test(backwards) && lastDigit.length == 0) {
                lastDigit.push(patterns[keys[j]]);
                console.log(lastDigit);
                break secondOuterLoop;
            }
        }
        
        backwards = backwards.slice(0, backwards.length - 1)
    }
const digits = (firstDigit[0] * 10) + lastDigit[0];
sum += digits;
lineNumber++;
}
console.log(sum);