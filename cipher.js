
const cipher = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
let string = 'ABC DEF GHI';
let offset = parseInt('1');
let text = '';
let space = ' ';


   
for(let f = 0; f <= string.length; f++){
    if(string[f] == space){
        text = text + space
    }

    for(let i = 0; i < cipher.length; i++){   

        if(cipher[i] == string[f]){
            let code = (string.charCodeAt(f) - 65 + offset) % 26
            text = text + cipher[code];
        }
                   
    }
}
console.log(text);
