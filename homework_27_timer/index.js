/*
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

        

        var timerId = setInterval(() => {
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
            else if (s_hour.textContent === '1' && f_min.textContent === '5' && s_min.textContent === '9' 
                                                && f_sec.textContent === '5' && s_sec.textContent === '7') {
                s_hour.textContent = '2'
                f_min.textContent = '0';
                s_min.textContent = '0';
                f_sec.textContent = '0';
                s_sec.textContent = 0;
            } 
        }, 10)

        

    } else if (btnStart.className === 'stop_color'){
            
            btnStart.className = 'start_color';
            btnStart.value = 'start';
            btnStart.innerHTML = 'START';
            clearInterval(timerId);
            console.log(timerId);
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

*/

const el_timer = document.querySelector('#timer #time');
const start = document.getElementById('btn_start_timer');
const reset = document.getElementById('btn_reset_timer');
const save = document.getElementById('btn_save_timer');
const result_list = document.getElementById('list_results');

let ms = 0;
let sec = 0;
let interval = null;




const timer = () => {
    ms++;
    if (ms === 100) {
        sec++;
        ms = 0;
    }
    

    let hours = Math.floor(sec / 3600);
    let mins = Math.floor((sec - (hours * 3600)) / 60);
    let secs = sec % 60;
    let milisec = ms % 100;

    if (ms < 10) {milisec = '0' + milisec};
    if (secs < 10) { secs = '0' + secs};
    if (mins < 10) { mins = '0' + mins};
    if (hours < 10) { hours = '0' + hours};

    el_timer.innerHTML = `${hours}:${mins}:${secs}:${milisec}`;
    el_timer.style.color = 'white';
}

const start_timer = () => {
    console.log(interval);  
    
    if (start.className === 'start_color') {
        interval = setInterval(timer, 10);
        start.className = 'stop_color';
        start.innerHTML = 'Stop';
        console.log(start.className);
        
    } else if (start.className === 'stop_color') {
        stop_timer();
        start.className = 'start_color';
        start.innerHTML = 'Start';
    }

    /*
    if (interval) {
        return;
    }
    */
}

const stop_timer = () => {
    clearInterval(interval);
    interval = null;
}

const reset_timer = () => {
    stop_timer();
    sec = 0;
    el_timer.innerHTML = '00:00:00:00';
    if (start.className === 'stop_color') {
        stop_timer();
        start.className = 'start_color';
        start.innerHTML = 'Start';
    }
}

const save_timer = () => {
    const result = document.createElement('p');
    result_list.append(result);
    result.textContent = el_timer.textContent;

};




start.addEventListener('click', start_timer);
reset.addEventListener('click', reset_timer);
save.addEventListener('click', save_timer)