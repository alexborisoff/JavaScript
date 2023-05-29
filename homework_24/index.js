const arrColors = ['#986464', '#859459','#679542', '#457170', '#695766', 
                '#782121', '#671876', '#833030', '#931362', '#000000'];
const main = document.getElementById('main');

// EASY Level 1
/*
main.addEventListener('click', (event) => {
    if (event.target.tagName != 'DIV') return;
    const listBlocks = main.querySelectorAll('div'); 
    for (let item of listBlocks) {
        item.style.backgroundColor = arrColors[(event.target.textContent)-1];
    }
});
*/

// MEDIUM Level 2
main.addEventListener('click', (event) => {
    if (event.target.tagName != 'DIV') return;
    const listBlocks = main.querySelectorAll('div'); 
    for (let item of listBlocks) {
        item.style.backgroundColor = arrColors[(event.target.textContent)-1];
        console.log(event.target.style.backgroundColor);
        console.log(item);
    }
})