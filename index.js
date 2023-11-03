const bodyElement = document.querySelector("body")
bodyElement.style.backgroundColor = "#e9e9e9";
const news =document.querySelector (".news")
news.style.backgroundColor = "white"
news.style.width = "60rem";

const newsTitle = document.querySelector("h1")
newsTitle.classList.add("news__title")
newsTitle.textContent = "Aktuální novinky"

const prvniZprava = document.querySelector("#zprava1")
prvniZprava.classList.add("post--main")

const obrazek = document.querySelector("#zprava3")
const obrazek3 = obrazek.querySelector(".post__picture")
obrazek3.src = "images/zprava3-novy.jpg"




