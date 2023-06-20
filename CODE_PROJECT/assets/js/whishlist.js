
// const wishlist_container = document.getElementById("wishlist_container");
// let wishlist_arr = [];
// wishlist_arr = JSON.parse(localStorage.getItem("wishlist"));

// wishlist_arr.forEach((element) => {
//   const div = document.createElement("div");
//   const h1 = document.createElement("h1");
//   const btn = document.createElement("button");

//   div.style.border = "1px solid black";

//   h1.innerHTML = element.name;
//   btn.innerHTML = "remove";

//   btn.onclick = () => {
//     console.log(element.id);
//     wishlist_arr = wishlist_arr.filter((x) => x.id !== element.id);
//     localStorage.setItem("wishlist", JSON.stringify(wishlist_arr));
//     btn.parentElement.remove();
//   };

//   div.append(h1, btn);
//   wishlist_container.append(div);
// });
