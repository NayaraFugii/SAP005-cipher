const alfabeto = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
const space = ' ';

const cipher = {
     cifra(offset,message){  
       // let string = message;
        //let offset = parseInt('2');
        let text ='';
        
        if(offset === 0){
            alert('Não é possivel cifrar a mensagem, pois o número de casas é igual a zero.');
            return;
        }
    
        for(let f = 0; f <=message.length; f++){
            if(message[f] == space){
                text = text + space
            }
        
            for(let i = 0; i < alfabeto.length; i++){   
                if(alfabeto[i] == message[f]){
                    let formula = (message.charCodeAt(f) - 65 + offset) % 26
                    text = text + alfabeto[formula];
                }         
            }
        }
        return text;
    },
}


 
 
 //cifra();
 
export default cipher;