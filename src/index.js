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

function decode(expr) {
    // write your solution here
    let k = expr.split('')
    // .join('**********')
    let str = []
    for (let index = 0; index < k.length; index ++){
        let r = k[index];
        for ( let i = 0; i < Object.keys(MORSE_TABLE).length; i ++) {
            let y = Object.keys(MORSE_TABLE)[i]
            if (r === Object.values(MORSE_TABLE)[i]){
                // return str.concat(y.split('').join('**********')
                str.push(y)
            } 
            }
    }
    return str
}

module.exports = {
    decode
}