import cipher from './cipher.js';

const code = document.getElementById('buttonCode')
const answer = document.getElementById('answer')
const psw = document.getElementById('password')
const decode = document.getElementById('buttonDecode')
const frase = document.getElementById('text')


code.addEventListener('click', (event) => { 
  event.preventDefault()
    let area = document.getElementById('answer').value     
    let off = document.getElementById('offset').value    
    let password = document.getElementById('password').value    
    answer.value = cipher.cifra(off,area) 

    
});

decode.addEventListener('click', (event)=>{
  event.preventDefault()
  let text = document.getElementById('text')
  let off = document.getElementById('offset').value   
  let area = document.getElementById('answer').value 
  let psw = document.getElementById('pass').value
  let password = document.getElementById('password').value
  text.value = cipher.decode(off,area,password,psw)  
      
});
