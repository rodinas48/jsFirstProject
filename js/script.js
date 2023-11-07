var allProducts = document.querySelectorAll(".card1 .card-title");
var btnsProducts = document.querySelectorAll(".card1 .btn");
var cart = document.querySelector("#items");
var PriceBtn = document.querySelector("#totalPrice");
var price = document.querySelector("#price")
var priceDiv = document.querySelector(".priceCard")
var totalPrice = 0
btnsProducts.forEach(
     function (btn, index) {
        btn.onclick = function(){
            totalPrice +=  +(allProducts[index].getAttribute("price"));
            cart.innerHTML += allProducts[index].textContent +" "+ '<span class="jsPrice">'+ allProducts[index].getAttribute("price") +"EGP"+'</span>' + "<br>";
            if(cart.innerHTML != ""){
                  PriceBtn.style.display ='block'
            }
        }
     }
    
)

PriceBtn.onclick = function () {
    price.innerHTML = totalPrice + "EGP"
    if(totalPrice.innerHTML != 0){
        priceDiv.style.display ='block'
    }
}
