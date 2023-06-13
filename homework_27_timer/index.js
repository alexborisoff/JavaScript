const btnStart = document.getElementById('btn_start');
const btnReset = document.getElementById('btn_reset');
const btnSave = document.getElementById('btn_save');
const ol = document.getElementById('result');
const f_hour = document.getElementById('f_hour');
const s_hour = document.getElementById('s_hour');
const f_min = document.getElementById('f_min');
const s_min = document.getElementById('s_min');
const f_sec = document.getElementById('f_sec');
const s_sec = document.getElementById('s_sec');
const f_ms = document.getElementById('f_ms');
const s_ms = document.getElementById('s_ms');


btnStart.addEventListener('click', () => {
    console.log(btnStart.className);
    if (btnStart.className === 'start_color') {
        btnStart.className = 'stop_color';
        btnStart.value = 'stop';
        btnStart.innerHTML = 'STOP';

        f_hour.innerHTML = 0;
        s_hour.innerHTML = 0;
        f_min.innerHTML = 0;
        s_min.innerHTML = 0;
        f_sec.innerHTML = 0;
        s_sec.innerHTML = 0;
        f_ms.innerHTML = 0;
        s_ms.innerHTML = 0;

        

        setInterval(() => {
            s_sec.innerHTML = Number(s_sec.innerHTML) + 1;
            
            // СЕКУНДЫ
            if (f_sec.textContent === '0' && s_sec.textContent === '10') {
                f_sec.textContent = 1;
                s_sec.textContent = 0;
            } else if (f_sec.textContent === '1' && s_sec.textContent === '10') {
                f_sec.textContent = '2';
                s_sec.textContent = 0;
            } else if (f_sec.textContent === '2' && s_sec.textContent === '10') {
                f_sec.textContent = '3';
                s_sec.textContent = 0;
            } else if (f_sec.textContent === '3' && s_sec.textContent === '10') {
                f_sec.textContent = '4';
                s_sec.textContent = 0;
            } else if (f_sec.textContent === '4' && s_sec.textContent === '10') {
                f_sec.textContent = '5';
                s_sec.textContent = 0;

            
            // МИНУТЫ ДО 10 МИН
            } else if (f_sec.textContent === '5' && s_sec.textContent === '10') {
                s_min.textContent = '1';
                f_sec.textContent = '0';
                s_sec.textContent = 0;
            } else if (s_min.textContent === '1' && f_sec.textContent === '5' && s_sec.textContent === '9') {
                s_min.textContent = '2';
                f_sec.textContent = '0';
                s_sec.textContent = 0;
            } else if (s_min.textContent === '2' && f_sec.textContent === '5' && s_sec.textContent === '9') {
                s_min.textContent = '3';
                f_sec.textContent = '0';
                s_sec.textContent = 0;
            } else if (s_min.textContent === '3' && f_sec.textContent === '5' && s_sec.textContent === '9') {
                s_min.textContent = '4';
                f_sec.textContent = '0';
                s_sec.textContent = 0;
            } else if (s_min.textContent === '4' && f_sec.textContent === '5' && s_sec.textContent === '9') {
                s_min.textContent = '5';
                f_sec.textContent = '0';
                s_sec.textContent = 0;
            } else if (s_min.textContent === '5' && f_sec.textContent === '5' && s_sec.textContent === '9') {
                s_min.textContent = '6';
                f_sec.textContent = '0';
                s_sec.textContent = 0;
            } else if (s_min.textContent === '6' && f_sec.textContent === '5' && s_sec.textContent === '9') {
                s_min.textContent = '7';
                f_sec.textContent = '0';
                s_sec.textContent = 0;
            } else if (s_min.textContent === '7' && f_sec.textContent === '5' && s_sec.textContent === '9') {
                s_min.textContent = '8';
                f_sec.textContent = '0';
                s_sec.textContent = 0;
            } else if (s_min.textContent === '8' && f_sec.textContent === '5' && s_sec.textContent === '9') {
                s_min.textContent = '9';
                f_sec.textContent = '0';
                s_sec.textContent = 0;
            } else if (s_min.textContent === '9' && f_sec.textContent === '5' && s_sec.textContent === '9') {
                f_min.textContent = '1';
                s_min.textContent = '0';
                f_sec.textContent = '0';
                s_sec.textContent = 0;

            // МИНУТЫ ПОСЛЕ 10МИН И ДО 60МИН
            } else if (f_min.textContent === '1' && s_min.textContent === '9' && f_sec.textContent === '5' && s_sec.textContent === '8') {
                f_min.textContent = '2';
                s_min.textContent = '0';
                f_sec.textContent = '0';
                s_sec.textContent = 0;
            } 
            else if (f_min.textContent === '2' && s_min.textContent === '9' && f_sec.textContent === '5' && s_sec.textContent === '8') {
                f_min.textContent = '3';
                s_min.textContent = '0';
                f_sec.textContent = '0';
                s_sec.textContent = 0;
            } else if (f_min.textContent === '3' && s_min.textContent === '9' && f_sec.textContent === '5' && s_sec.textContent === '8') {
                f_min.textContent = '4';
                s_min.textContent = '0';
                f_sec.textContent = '0';
                s_sec.textContent = 0;
            } else if (f_min.textContent === '4' && s_min.textContent === '9' && f_sec.textContent === '5' && s_sec.textContent === '8') {
                f_min.textContent = '5';
                s_min.textContent = '0';
                f_sec.textContent = '0';
                s_sec.textContent = 0;
            } else if (f_min.textContent === '5' && s_min.textContent === '9' && f_sec.textContent === '5' && s_sec.textContent === '8') {
                s_hour.textContent = '1'
                f_min.textContent = '0';
                s_min.textContent = '0';
                f_sec.textContent = '0';
                s_sec.textContent = 0;
            } 
            
            // ЧАСЫ
            else if (s_hour.textContent === '1' &&f_min.textContent === '5' && s_min.textContent === '9' 
                                                && f_sec.textContent === '5' && s_sec.textContent === '7') {
                s_hour.textContent = '2'
                f_min.textContent = '0';
                s_min.textContent = '0';
                f_sec.textContent = '0';
                s_sec.textContent = 0;
            } 
        }, 10)

        

    } else {
        btnStart.className = 'start_color';
        btnStart.value = 'start';
        btnStart.innerHTML = 'START';
    }

});




btnReset.addEventListener('click', () => {
    
        f_hour.innerHTML = '0';
        s_hour.innerHTML = '0';
        f_min.innerHTML = '0';
        s_min.innerHTML = '0';
        f_sec.innerHTML = '0';
        s_sec.innerHTML = '0';
        f_ms.innerHTML = '0';
        s_ms.innerHTML = '0';

});




btnSave.addEventListener('click', () => {
    const li = document.createElement('li');
    ol.append(li);
    li.textContent = f_hour.textContent + s_hour.textContent + '.' + f_min.textContent + s_min.textContent +
    '.' + f_sec.textContent + s_sec.textContent + '.' + f_ms.textContent + s_ms.textContent;
    localStorage.setItem('s_sec', s_sec.textContent);
});