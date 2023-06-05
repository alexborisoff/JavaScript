const list = document.getElementById('list');
const input = document.getElementById('inputFriend');
const btnAdd = document.getElementById('btn');
const count = document.querySelector('span');


    if (localStorage.length !== 0) {
        for (let i = 0; i < localStorage.length; i++) {
        const p = document.createElement('p');
        list.append(p);
        p.textContent += localStorage.getItem('key' + i);
        }

        const numberOfFriends = document.querySelectorAll('p');
        count.innerHTML = +numberOfFriends.length;
    }

    btnAdd.addEventListener('click', () => {
    // Добавление "друга"  
        const p = document.createElement('p');
        if (input.value !== '') {
        list.append(p);
        p.innerHTML += input.value;
        localStorage.setItem('key' + localStorage.length, p.textContent);
        }

    // Отображение количества списка
    const countFriends = list.querySelectorAll('p');
    count.innerHTML = +countFriends.length;
    input.value = '';
    });
