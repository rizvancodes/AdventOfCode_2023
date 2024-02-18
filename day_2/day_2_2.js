const nReadlines = require('n-readlines');

const lines = new nReadlines('input.txt');

const cubes = {
    'red': 0,
    'green': 0,
    'blue': 0
}

let line;
let lineNumber = 1;
let sumPowers = 0;

while(line = lines.next()) {
    cubes['red'] = 0;
    cubes['green'] = 0;
    cubes['blue'] = 0;

    line = line.toString('ascii')
    rounds = line.split(': ')[1].split('; ')

    for ( i = 0; i < rounds.length; i++ ) {

        round = rounds[i].split(', ')

        for ( j = 0; j < round.length; j++) {

            const roundArray = round[j].split(' ');
            const colour = roundArray[1];
            const num = +roundArray[0]

            if (num > cubes[colour]) {
                cubes[colour] = num;
            }
        }
    }
    sumPowers += cubes['red'] * cubes['green'] * cubes['blue'];
    console.log(cubes);
    lineNumber++
}

console.log(sumPowers);

