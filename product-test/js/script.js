
var allproducts = document.querySelectorAll(".products .p-content")
var div = document.querySelector("#content")
var btn = document.querySelector("#btn")
var value = document.querySelector("#value")
var totalPrice = 0


allproducts.forEach(function(item){
    item.onclick = function(){
        div.innerHTML += item.textContent + ""
        totalPrice += +(item.getAttribute("price"))

        if(div.innerHTML != ""){
            btn.style.display = "block";
            btn.style.width  = "150px";
            btn.style.height  = "50px";
            btn.style.backgroundColor  = "blue";
            btn.style.color  = "white";
        }
    }
})
btn.onclick = function (){
   value.innerHTML =(totalPrice)
}