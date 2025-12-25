// first function for sidebar

function sidebar (){

    let humbrger = document.querySelector("#humberger");
let closBtn = document.querySelector("#closeSidebar");
let sidebar = document.querySelector("#sidebar")

humbrger.addEventListener("click", () => {
    sidebar.classList.add("active")
})

closBtn.addEventListener("click", () => {
    sidebar.classList.remove("active")
})
}

sidebar();

// 2nd function for navigation left right btns

function leftRightBtnNavBar () {

const container = document.getElementById("inner-div");
const scrollLeftBtn = document.getElementById("scrollLeft");
const scrollRightBtn = document.getElementById("scrollRight");

const scrollAmount = 150;

scrollLeftBtn.addEventListener("click", () => {
    container.scrollBy({
        left: -scrollAmount,
        behavior: "smooth"
    });
});

scrollRightBtn.addEventListener("click", () => {
    container.scrollBy({
        left: scrollAmount,
        behavior: "smooth"
    });
});

}

leftRightBtnNavBar();

// 3rd function for home page slide

function homeSlider () {

    var swiper = new Swiper(".mySwiper", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

}

homeSlider ();


// 4 function for orange card

function orangeCard () {

const wrapperCard = document.querySelector(".wrapper-card-div");
const scrollLeftBtn = document.querySelector(".orange-card-button .left");
const scrollRightBtn = document.querySelector(".orange-card-button .right");

const scrollAmount = 260;

scrollLeftBtn.addEventListener("click", () => {
    console.log("clicked")
    wrapperCard.scrollBy({
        left: -scrollAmount,
        behavior: "smooth"
    });
});

scrollRightBtn.addEventListener("click", () => {
    console.log("clicked")
    wrapperCard.scrollBy({
        left: scrollAmount,
        behavior: "smooth"
    });
});

}
 
orangeCard ();



