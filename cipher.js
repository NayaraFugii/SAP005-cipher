const alfabeto = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
const space = ' ';

const cipher = {
     cifra(offset,message){  
        let string = message.toUpperCase();
        let off = parseInt(offset);
        let text ='';
        
        if(offset === 0){
            alert('Não é possivel cifrar a mensagem, pois o número de casas é igual a zero.');
            return;
        }
    
        for(let f = 0; f <= string.length; f++){
            if(string[f] == space){
                text = text + space
            }
        
            for(let i = 0; i < alfabeto.length; i++){   
                if(alfabeto[i] == string[f]){
                    let formula = (string.charCodeAt(f) - 65 + off) % 26
                    text = text + alfabeto[formula];
                }         
            }
        }console.log(text)
        return text;
    },
}


 
 
 //cifra();
 
export default cipher;