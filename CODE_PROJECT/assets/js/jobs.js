

        
      
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
      


const inputss = document.querySelector("#myInput");

const total = document.querySelector(".total");
      const card__box = document.querySelector(".card__box");

      let basket_arr = [];
      let wishlist_arr = [];
      fetch("https://northwind.vercel.app/api/products#" + window.location.hash.slice(1 ,2) )
        .then((res) => res.json())
        .then((data) => {
            let arr=[0];

          data.forEach((element) => {
            
            createCard(element);
           
       
          });
        });
       

        
      // eger data varsa localstorage
      window.onload = function () {
        if (localStorage.getItem("basket") !== null) {
          basket_arr = JSON.parse(localStorage.getItem("basket"));
        }
        if (localStorage.getItem("wishlist") !== null) {
          wishlist_arr = JSON.parse(localStorage.getItem("wishlist"));
        }
      };

      function createCard(data) {
        const div = document.createElement("div");
        const h3 = document.createElement("h3");
        const p = document.createElement("p");
        const basket_btn = document.createElement("button");
        const wishlist_btn = document.createElement("button");

        div.classList.add("card");
       


        h3.innerText = data.name;
        p.innerText = "Money: " + data.unitPrice + "$ for 1 hour" ;

        basket_btn.innerText = "add basket";
        basket_btn.classList.add("basket_btn")
        wishlist_btn.innerText = "add wishlist";
        wishlist_btn.classList.add("wishlist_btn")
        if (wishlist_arr.find((x) => x.id == data.id) !== undefined) {
          wishlist_btn.style.backgroundColor = "red";
        }
        // basket
        basket_btn.onclick = function () {
          //eger bu idli elemnent yoxdursa push et
          if (basket_arr.find((x) => x.id == data.id) === undefined) {
            basket_arr.push({ ...data, count: 1 });
          }
          localStorage.setItem("basket", JSON.stringify(basket_arr));
        };
        // wishlist

        wishlist_btn.onclick = () => {
          if (wishlist_arr.find((x) => x.id == data.id) === undefined) {
            wishlist_arr.push(data);
            wishlist_btn.style.backgroundColor = "red";
          } else {
            wishlist_arr = wishlist_arr.filter((x) => x.id !== data.id);
            wishlist_btn.style.backgroundColor = "white";
          }
          localStorage.setItem("wishlist", JSON.stringify(wishlist_arr));
        };
        div.append(h3, p, basket_btn, wishlist_btn);
        card__box.appendChild(div);
        
        let editbtn = document.createElement('button');
        editbtn.classList.add("edit");
        editbtn.innerHTML = "Edit";
        editbtn.addEventListener('click', function (e) {
            let inputs = document.createElement("input");
            const add = document.createElement('button');
            add.innerHTML = "Add";
            div.appendChild(inputs);
            div.appendChild(add);
            inputs.addEventListener("keyup", function (e) {
                p.innerHTML = '';
                p.innerHTML ="Money: "+ inputs.value;
            })
            add.addEventListener("click", function (e) {
              
                add.style.display = "none";
                inputs.style.display = "none";
            })

        })

        div.appendChild(editbtn);
        let btn = document.createElement("button");
        btn.classList.add("delete");
        btn.innerHTML = "Delete";
        btn.addEventListener('click', function (e) {
           div.remove()

        });
        div.appendChild(btn)

        const text = document.createElement("a");   
        text.innerHTML = "About";
text.href = "./detail.html#" +data.id;  
div.appendChild(text);


      }

   

      const createbtn = document.createElement('a');
      createbtn.classList.add("create")
        createbtn.innerHTML="Create A New Work";
        createbtn.addEventListener('click' , function(e){
            createbtn.href = "./form.html";
            
        });
        card__box.appendChild(createbtn);

        
        


   