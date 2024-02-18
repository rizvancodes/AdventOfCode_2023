const nReadlines = require('n-readlines');

const lines = new nReadlines('input.txt');

const cubes = {
    'red': 12,
    'green': 13,
    'blue': 14
}

let line;
let lineNumber = 1;
let impossibleCount = 0;

while(line = lines.next()) {
    line = line.toString('ascii')
    rounds = line.split(': ')[1].split('; ')

    outerLoop:
    for ( i = 0; i < rounds.length; i++ ) {
        round = rounds[i].split(', ')
        for ( j = 0; j < round.length; j++) {
            const roundArray = round[j].split(' ');
            const colour = roundArray[1];
            const num = +roundArray[0]
            if (num > cubes[colour]) {
                impossibleCount -= lineNumber;
                break outerLoop;
            }
        }
    }
    impossibleCount += lineNumber;
    lineNumber++
}

console.log(impossibleCount);