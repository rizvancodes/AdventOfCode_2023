const nReadlines = require('n-readlines');
const math = require('mathjs');
const R = require('ramda');

const lines = new nReadlines('input.txt');

let line;
let lineNumber = 1;
let x = 0;
let y = 0;
let isSameNumber = false;
let numberCount = 0;
let number = 0;
let numbers = [];
let numberLocations = [];
let symbolLocations = [];
let sum = 0;

while (line = lines.next()) {
    line = line.toString('ascii')
    chars = line.split('');
    x = 0;

    for (i = 0; i < chars.length; i++) {
        char = chars[i];
        
        if (char >= 0) {

            if(isSameNumber) {
                number += char;
                numbers[numberCount - 1] = number;
            } else {
                number = char;
                numbers.push(number);
                numberLocations.push([x, y]);
                numberCount++;
            }

            isSameNumber = true;


        } else {
            isSameNumber = false;
            number = 0;
            if (char !== '.') {
                symbolLocations.push([x, y]);
            }
        }
        x++;
    }
    y++;
    lineNumber++
}

const zipped = zip(numbers, numberLocations);

zipped.forEach(pair => {
    const numberLength = pair[0].length;
    vectorOperator = generateVectorOperator(numberLength);

    vectorOperator.forEach(vector => {
        const vectorSum = math.add(vector, pair[1]);
        if (R.any(R.equals(vectorSum), symbolLocations)) {
            console.log(pair[0])
            sum += +pair[0];
            return;
        }
    })
});

function zip(arr1, arr2) {
    return arr1.map((k, i) => [k, arr2[i]]);
}

function generateVectorOperator(n) {
    let vectorOperator = [];
    for (j = 0; j < 3; j++) {
        for (i = 0; i < (n + 2); i++) {
            vectorOperator.push([i - 1, j - 1])
        }
    }
    return vectorOperator;
}

console.log(sum);






















// x=0
// y=0
//sameNumber = false;
// for each line

//     Read each line and increment y value
//     split line
//     for each item 
//         increment x value
//         if digit 
//              sameNumber = true;
//             append the x and y value to number coordinates Array
//             if isSameNumber is true
//                 number * 10 + currentDigit
//             else 
//                 push digit to numbers Array
//                 sameNumber = false;
//         else if it isn't a full stop
//              sameNumber = false;
//             record x and y value in symbol coordinates Array

// vectors = [[-1,-1],[0,-1],[1,-1],[2,-1],[3,-1],[-1,0],[0,0],[1,0],[2,0],[3,0],[-1,1],[0,1],[1,1],[2,1][3,1]]

// for each number coordinate
//     find the length of the number
//     forbidden coordinates
//     for the legnth of the number
//         add 1 to the x value to get a forbidden coordinate

//     for each vector
//         apply to the coordinate
//         if the coordiante is not in forbidden coordinates and is in symbol coordinates
//             add number to the Sum


