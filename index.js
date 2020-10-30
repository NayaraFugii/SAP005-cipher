import cipher from './cipher.js';

const code = document.getElementById('buttonCode')
const answer = document.getElementById('text')

code.addEventListener('click', () => { 
    let area = document.getElementById('text').value 
    let off = document.getElementById('offset').value
    answer.textContent = cipher(area)
    console.log(a);
});

//const decode = document.getElementById('buttonDecode')
//const password = document.getElementById('password').value


//decode.addEventListener('click', function(){

  //  if (password === true){
        //answer.textContent = area

 //   }

//});
