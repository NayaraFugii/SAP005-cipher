import cipher from './cipher.js';

const code = document.getElementById('buttonCode');
const answer = document.getElementById('text')

code.addEventListener('click', () => { 
    let area = document.getElementById('text').value 
    let off = document.getElementById('offset').value
    answer.textContent = cipher(area, off)
    console.log(area);
});

