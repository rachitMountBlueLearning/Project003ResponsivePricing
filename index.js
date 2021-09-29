function changePrice() {
    let price = document.getElementById("basic-price");
    price.innerHTML = price.innerHTML === "199.99" ?  "19.99" : "199.99";
    price = document.getElementById("professional-price");
    price.innerHTML = price.innerHTML === "249.99" ?  "24.99" : "249.99";
    price = document.getElementById("master-price");
    price.innerHTML = price.innerHTML === "399.99" ?  "39.99" : "399.99";
}