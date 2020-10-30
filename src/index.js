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
    console.log(password);
    answer.value = cipher.cifra(off,area)  

    
});


decode.addEventListener('click', (event)=>{
  event.preventDefault()
  let area = document.getElementById('answer').value 
  let password = document.getElementById('password').value
  const psw = document.getElementById('password').value
  console.log(psw)
    if (password == psw ){
      frase.textContent = area.value;
      
    }else{
      alert('A senha inserida está incorreta');
     }   

});
