const basket_container = document.getElementById("basket_container");
      const h2 = document.querySelector("h2");
      let basket_arr = [];

      basket_arr = JSON.parse(localStorage.getItem("basket"));
      getTotal();
      basket_arr.forEach((element) => {
        const div = document.createElement("div");
        const h3 = document.createElement("h3");
        const inc = document.createElement("button");
        const p = document.createElement("p");
        const dec = document.createElement("button");
        const del = document.createElement("button");

        h3.innerHTML = element.name;
        inc.innerHTML = "+";
        p.innerHTML = element.count;
        dec.innerHTML = "-";
        del.innerHTML = "X";

        //artim
        inc.onclick = () => {
          p.innerHTML++;

          basket_arr[basket_arr.findIndex((x) => element.id === x.id)].count++;
          localStorage.setItem("basket", JSON.stringify(basket_arr));
          getTotal();
        };
        //azalma
        dec.onclick = () => {
          if (p.innerHTML === "1") {
            return;
          }
          p.innerHTML--;

          basket_arr[basket_arr.findIndex((x) => element.id === x.id)].count--;
          localStorage.setItem("basket", JSON.stringify(basket_arr));
          getTotal();
        };
        //delete
        del.onclick = () => {
          basket_arr = basket_arr.filter((x) => x.id !== element.id);
          localStorage.setItem("basket", JSON.stringify(basket_arr));
          getTotal();

          del.parentElement.remove();
        };

        div.classList.add("basket_item");

        div.append(h3, inc, p, dec, del);
        basket_container.append(div);
      });

      function getTotal() {
        h2.innerHTML = basket_arr.reduce(
          (sum, prev) => sum + prev.unitPrice * prev.count,
          0
        );
      }