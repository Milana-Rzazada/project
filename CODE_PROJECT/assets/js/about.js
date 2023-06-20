//change navbar color

$(document).ready(function(){
    $(window).scroll(function(){
        let scroll = $(window).scrollTop();
        if(scroll>150){
            $(".navbar").css("background", "#222");
            $(".navbar").css("background", "rgba(0,0,0,0.1) 0px 4px 12px");
        }
        else{
            $(".navbar").css("background", "transparent");
            $(".navbar").css("background", "none");
        }
    })
});


//smooth scroll

let navbarHeight = $(".navbar").outerHeight();
$(".navbar-menu a").click(function(e){
    let targetHref = $(this).attr("href");
    $("html,body").animate({
        scrollTop: $(targetHref).offset().top - navbarHeight
    },1000)
    e.preventDefault();
})


//navbar mobile version

const mobile = document.querySelector(".menu-toggle");
const mobileLink = document.querySelector(".navbar-menu");

mobile.addEventListener("click" ,function(){
    mobile.classList.toggle("is-active");
    mobileLink.classList.toggle("active");
    mobileLink.classList.toggle("block");
})

mobileLink.addEventListener("click" ,function(){
    const menuBars = document.querySelector(".is-active");
    if(window.innerWidth <= 768 && menuBars){
        mobile.classList.toggle("is-active");
        mobileLink.classList.remove("active");
    }
})



//swiper

let swiper = new Swiper(".mySwiper",
{
    loop: true,
    autoplay:{
        delay:2500,
        disableOnInteraction:false,
    },
    slidesPerView:1,
    spaceBetween:10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        640:{
            slidesPerView:2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 40,
        }, 
        1024: {
            slidesPerView: 3,
            spaceBetween: 50,
        }
    }
})

const box= document.querySelector(".box");

fetch("https://northwind.vercel.app/api/products/" +window.location.hash.slice(1) )
.then((res) => res.json())
.then((data) => {
    const card = document.createElement("div");
    const card2 = document.createElement("p");
    const card3 = document.createElement("p");
    const card4 = document.createElement("p");
    const card5 = document.createElement("p");
    const card6 = document.createElement("p");


    
   

card.innerHTML ="ID: " + data.id;
card2.innerHTML ="Name: "  +data.name;
card3.innerHTML ="SupplierID: " + data.supplierId;
card4.innerHTML = "CategoryID: " +data.categoryId;
card5.innerHTML = "UnitPrice: " +data.unitPrice;
card6.innerHTML = "Discontiuned: " +data.discontinued;


  
    card.appendChild(card2);
    card.appendChild(card3);
    card.appendChild(card4);
    card.appendChild(card5);
    card.appendChild(card6);
    box.appendChild(card);
    card.classList.add("about")

})