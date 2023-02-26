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
let arr = []
for(let i = 0; i<expr.length; i= i + 10){
    arr.push(expr.slice(i,i+10))
}
for(let a =0; a<arr.length;a++){
    if(arr[a] == '**********'){
        arr[a] = ' '
    } else if(arr[a] !== '**********'){
        let letter = ''
        for (let b = 0; b<10; b=b+2){
            if(arr[a][b]+arr[a][b+1] == 10){
                letter += '.'
            } else if(arr[a][b]+arr[a][b+1] == 11){
                letter += '-'
            }
        }
        arr[a] = MORSE_TABLE[letter]
    }
    
}
return arr.join('')
}

module.exports = {
    decode
}