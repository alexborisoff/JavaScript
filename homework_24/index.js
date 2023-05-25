// EASY Level 1
const arrColors = ['#986464', '#859459','#679542', '#457170', '#695766', 
                '#782121', '#671876', '#833030', '#931362', '#000000'];
const main = document.getElementById('main');
console.log(main.lastElementChild);

main.addEventListener('click', (event) => {
    if (event.target.tagName != 'DIV') return; 
    main.lastElementChild.style.backgroundColor = arrColors[(event.target.textContent)-1];
    main.firstElementChild.nextElementSibling.style.backgroundColor = arrColors[(event.target.textContent)-1];
});