const createBtn = document.getElementById('createChessboard');
const table = document.getElementById('tableBoard')
const row = document.getElementById('rows');
const column = document.getElementById('columns');

createBtn.addEventListener('click', ()=> {
    row.value += row.textContent;
    column.value += column.textContent;
    if (row.value !== '' && column.value !== ''){
        for (let i = 0; i < row.value; i++){
            const tr = document.createElement('tr');
            table.append(tr);
            for (let j = 0; j < column.value; j++){
                const td = document.createElement('td');
                tr.append(td);
                td.className = 'white';
            }
        }

        const listTr = table.querySelectorAll('tr');
        for (let i = 0; i < listTr.length; i++) {
            if (!(i % 2)){
                let tds = listTr[i].querySelectorAll('td');
                for (let j = 0; j < tds.length; j++){
                    if (!(j % 2)) tds[j].className = 'black';        
                }            
            } else {
                let tds = listTr[i].querySelectorAll('td');
                    for (let j = 0; j < tds.length; j++){
                        if (j % 2 !== 0) tds[j].className = 'black';
                    }            
                }
            } 
            
        } else {
            const p = document.createElement('p');
                if (row.value === '') {
                    row.nextElementSibling.append(p);
                    p.innerHTML += 'Erorr: input count rows';
                } else {
                    column.nextElementSibling.append(p);
                    p.innerHTML += 'Erorr: input count columns';
                }
        };
})

table.addEventListener('click', (event) => {
    if (event.target.tagName != 'TD') return;
    if (event.target.className === 'white'){
        let test = table.querySelectorAll('td');
        test.forEach((item) => {
            (item.className === 'black') ? item.className = 'white' : item.className = 'black';
        })
    } else {
        let test = table.querySelectorAll('td');
        test.forEach((item) => {
            (item.className === 'white') ? item.className = 'black' : item.className = 'white';
        })
    }
})