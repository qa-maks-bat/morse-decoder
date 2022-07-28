const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

// const expr = "00101010100000000010001011101000101110100000111111**********00001011110000111111000010111000101110100000111010";

function decode(expr) {
    // write your solution here

    const dot = "."; // "10"
    const dash = "-"; // "11"
    const space = " "; // "**********"

    const numberOfDigitsInChar = 10;
    const charCount = expr.length / numberOfDigitsInChar;

    let digitArray = [];
    let morseArray = [];

    let decodedExpr = "";

    for (let i = 0; i < charCount; i++) {
        let startCharIndex = 0;

        morseArray[i] = "";

        digitArray[i] = expr.slice(numberOfDigitsInChar * i, numberOfDigitsInChar * (i + 1));

        startCharIndex = digitArray[i].indexOf(1) === -1 ? startCharIndex : digitArray[i].indexOf(1);
        
        digitArray[i] = digitArray[i].slice(startCharIndex);

        function replacer(match, p1, p2, p3) {
            if (p1) {
                morseArray[i] += dot;
            }
            if (p2) {
                morseArray[i] += dash;
            }
            if (p3) {
                morseArray[i] += space;
            }
        }

        digitArray[i].replace(/(10)|(11)|(\*\*\*\*\*\*\*\*\*\*)/g, replacer);
    }

    morseArray.forEach((el) => {
        return el == " " ? (decodedExpr += " ") : (decodedExpr += MORSE_TABLE[el]);
    });

    return decodedExpr;
}

module.exports = {
    decode
}

// decode(expr);
