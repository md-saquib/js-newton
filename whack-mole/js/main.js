let start = document.getElementById("start");
let timeLeft = document.getElementById("time-left");
let reset = document.getElementById("reset");
let square = document.querySelectorAll(".square");
let score = document.querySelector("#score")

let stop, stop1 = 1, time = 25,value=0;
start.addEventListener("click", () => {
    if (event.target.value === "Start") {
        start.value = "Pause";
        start.className = "stop";
        stop = setInterval(() => {

            if (time > 0) {
                time--;
                timeLeft.innerText = `00:${time}`;

                let index = Math.floor(Math.random() * 9);
                // for (let i of square) {
                //     i.classList.remove("saquib");
                // }
                // square[index].classList += " saquib";

               if(time>0){
                let mole = document.createElement("img");
                mole.src="./img/1.jpg";
                mole.className="saquib"
                square[index].appendChild(mole);
                setTimeout(()=>{
                    square[index].removeChild(mole); 
                     },1500)
               }

                let scoreCount = document.querySelector(".saquib");
                scoreCount.addEventListener("click", () => {
                    value++;
                    score.innerText=value;
                    console.log(value);
                })
                
                 
                if (time == 0) {
                    timeLeft.innerText = `00:25`;
                    start.value = "Start";
                    start.className = "btn";
                    value=0
                    score.innerText=value;

                }
            }
            else {
                clearInterval(stop);
                time = 25;
            }
        }, 1500)
    } else {
        start.value = "Start";
        start.className = "btn";
        clearInterval(stop);
    }
})

reset.addEventListener("click", () => {
    clearInterval(stop);
    timeLeft.innerText = `00:25`;
    time = 25;
    start.value = "Start";
    start.className = "btn";
})


