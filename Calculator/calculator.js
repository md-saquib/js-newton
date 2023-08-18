let number = document.getElementsByClassName("number");
let display = document.querySelector(".display");
let operation = document.getElementsByClassName("operation");
let display1 = document.querySelector(".display1");
let evall = document.getElementById("evall");
let allclear = document.getElementById("allclear");
let clear = document.getElementById("clear");

let operator;
for (let i = 0; i < operation.length; i++) {
    operation[i].addEventListener("click", (event) => {
        let value = display1.innerText += event.target.innerText;
        display.innerText = "";
        evall.addEventListener("click", () => {

            let result = eval(display1.innerText);
            display.innerText = result;
            display1.innerText = result;
        })
    })
}
for (let i = 0; i < number.length; i++) {
    number[i].addEventListener("click", () => {
        display.innerText += number[i].innerText;
        display1.innerText += event.target.innerText;
    })
}
clear.addEventListener("click", () => {
    display.innerText = display.innerText.slice(0, display.innerText.length - 1);
    display1.innerText = display1.innerText.slice(0, display1.innerText.length - 1);
    console.log(display.innerText);
    console.log("hello")
})
allclear.addEventListener("click", () => {
    display.innerText = "";
    display1.innerText = "";
})

