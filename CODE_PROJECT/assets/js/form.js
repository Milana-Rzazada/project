function send() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var result = document.getElementById("result");
   
      const json = {
          name: name,
          email: email,
    };

    fetch("https://northwind.vercel.app/api/products", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(json),
    });
}