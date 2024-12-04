const timer = document.querySelector('.timer');
const title = document.querySelector('.title');
const buttons = document.querySelector('.buttons');
const start_button = document.querySelector('.start_button');
const pause_button = document.querySelector('.pause_button');
const resume_button = document.querySelector('.resume_button');
const reset_button = document.querySelector('.reset_button');

const work_time = 1 * 60;
const break_time = 0.5 * 60;
let timerID = null;
let one_round_completed = false; // One round complete = work_time + break_time

const count_down = (time) => {
    return() => {
            timer.textContent = time;
            time--;
            if(time < 0){
                stop_timer();
                if(!one_round_completed){
                    timeID = start_timer(break_time);
                    one_round_completed = true;
                }
            }
    }
}

const start_timer = (start_time) => {
    if(timerID !== null){
        stop_timer();
    }
    return setInterval(count_down(start_time), 1000);
}
const stop_timer = () => {
    clearInterval(timerID);
    timerID = null;
}

start_button.addEventListener('click', ()=>{
    timerID = start_timer(work_time);
})