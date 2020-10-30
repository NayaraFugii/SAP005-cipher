
const cipher = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
let string = 'NAY ARA';
let offset = parseInt('2');
let text = '';
const space = ' ';

function cifra(){  
    
    if(offset === 0){
        alert('Não é possivel cifrar a mensagem, pois o número de casas é igual a zero.');
        return;
    }

    for(let f = 0; f <= string.length; f++){
        if(string[f] == space){
            text = text + space
        }
    
        for(let i = 0; i < cipher.length; i++){   
            if(cipher[i] == string[f]){
                let formula = (string.charCodeAt(f) - 65 + offset) % 26
                text = text + cipher[formula];
            }         
        }
    } console.log(text);
    //return text;
};
 
 
 cifra();
 
export default cifra;