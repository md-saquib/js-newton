let togler = document.getElementById("togler");
let slidepanel = document.querySelector(".slidepanel");
let closetab = document.querySelector(".closetab");
let bodyblur = document.querySelector("body");

togler.addEventListener("click", () => {
    slidepanel.style.width = "30rem";
    // bodyblur.style.opacity="0.1"
})

closetab.addEventListener("click", () => {
    slidepanel.style.width = "0rem";
})

let signin = document.getElementById("sign-in");
let loginclosetab = document.getElementById("login-closetab");
let login = document.getElementById("log-in");

signin.addEventListener("click", () => {
    login.style.width = "35rem";
})

loginclosetab.addEventListener("click", () => {
    login.style.width = "0rem";
})

let searchOpentab = document.getElementById("search-opentab");
let searchClosetab = document.getElementById("search-closetab");
let searchBar = document.getElementById("search-bar");

searchOpentab.addEventListener("click", () => {
    searchBar.style.display = "block";
})
searchClosetab.addEventListener("click", () => {
    searchBar.style.display = "none";


})

let data = [], i = 1;

let createobject = (img, cart, name, stars, title) => {

    let obj = {
        img: img,
        cart: cart,
        name: name,
        stars: stars,
        title: title

    }
    data.push(obj)
    i++;
}
createobject("https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/8a9029f512e2a7a37a8ed381322cec30", "Add-Cart", "Pizza", 4.2, "This is aosome");
createobject("https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/08eee882fda81b68e5c36e3a5d89d8c0", "Add-Cart", "Burger", 4.3, "This is aosome");
createobject("https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/etvxd3obobx5neaja47o", "Add-Cart", "Chicken Tengri", 4.4, "This is aosome");
createobject("https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/56c9ab92bd79745fd152a30fa2525426", "Add-Cart", "KFC combo", 5, "This is aosome");
createobject("https://images.unsplash.com/photo-1592312406345-c6f552c9619f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8&w=1000&q=80", "Add-Cart", "Spagheti", 4.2, "This is aosome");
createobject("https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/8a9029f512e2a7a37a8ed381322cec30", "Add-Cart", "Pizza", 4.2, "This is aosome");
createobject("https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/08eee882fda81b68e5c36e3a5d89d8c0", "Add-Cart", "Burger", 4.3, "This is aosome");
createobject("https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/etvxd3obobx5neaja47o", "Add-Cart", "Chicken Tengri", 4.4, "This is aosome");
createobject("https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/56c9ab92bd79745fd152a30fa2525426", "Add-Cart", "KFC combo", 5, "This is aosome");
createobject("https://images.unsplash.com/photo-1592312406345-c6f552c9619f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8&w=1000&q=80", "Add-Cart", "Spagheti", 4.2, "This is aosome");
let cardContainer = document.getElementById("card-container");
cardContainer.className = " grid grid-cols-5 gap-11 p-20 "

let createcards = data.map((value) => {

    let parentdiv = document.createElement("div");
    cardContainer.appendChild(parentdiv);
    parentdiv.className = "w-60 rounded-lg overflow-hidden shadow-lg"

    let image = document.createElement("img");
    parentdiv.appendChild(image);
    image.src = value.img;
    image.className = "selectimg";

    let span = document.createElement("span");
    parentdiv.appendChild(span);
    span.innerText = value.cart;
    span.className = "add-to-cart font-bold text-xl";

    let belowdiv = document.createElement("div");
    parentdiv.appendChild(belowdiv);
    belowdiv.className = "px-6 py-4";

    let namediv = document.createElement("div");
    belowdiv.appendChild(namediv);
    namediv.className = "font-bold text-xl mb-2";
    namediv.innerText = value.name;

    let reviewcontainer = document.createElement("div");
    belowdiv.appendChild(reviewcontainer);
    reviewcontainer.className = "flex";

    let icon = document.createElement("i");
    reviewcontainer.appendChild(icon);
    icon.className = "fa-solid fa-star star"
    icon.style.color = "#2ab24c";

    let reviewPoint = document.createElement("span");
    reviewcontainer.appendChild(reviewPoint);
    reviewPoint.innerText = value.stars;
    reviewPoint.className = "text-gray-700 text-base px-3"

    let titlePara = document.createElement("p");
    belowdiv.appendChild(titlePara);
    titlePara.innerText = value.title;
    titlePara.className = "text-gray-700 text-base";
})
let addCart = document.querySelectorAll(".add-to-cart");
let selectimg = document.querySelectorAll(".selectimg");
for (let i = 0; i < selectimg.length; i++) {
    selectimg[i].addEventListener("mouseover", () => {
        for (let i = 0; i < addCart.length; i++) {
            addCart[i].style.width = "10rem";

        }
    })

    selectimg[i].addEventListener("mouseout",()=>{
        for (let i = 0; i < addCart.length; i++) {
            addCart[i].style.width = "0rem";

        }
    })
}

