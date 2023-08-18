let start = document.getElementById("start");
let display = document.querySelector(".display");
let clear = document.getElementById("clear");
let milisecond = 0;
let second = 0;
let minute = 0;
let pause;
display.innerText = `${minute} : ${second} : ${milisecond}`

clear.addEventListener("click", () => {
    clearInterval(pause);
    milisecond = 0;
    second = 0;
    minute = 0;
    display.innerText = `${minute} : ${second} : ${milisecond}`;
    start.innerText = "Start";
    start.className = "btn";
})

start.addEventListener("click", () => {
    if (start.innerText === "Start") {
        start.innerText = "Stop";
        start.className = "pause";
        pause = setInterval(() => {
            milisecond++;
            if (milisecond == 100) {
                milisecond = 0;
                second++;
                if (second == 60) {
                    second = 0;
                    minute++;
                }
            }
            display.innerText = `${minute} : ${second} : ${milisecond}`;
        }, 10)
    } 
    else {
        clearInterval(pause);
        start.innerText = "Start";
        start.className = "btn";
    }
})