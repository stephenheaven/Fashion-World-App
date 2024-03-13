// Select side-navbar
var side_navbar=document.querySelector(".side_navbar")

function showNavbar()
{
    side_navbar.style.left="0"
}
function closeNavbar()
{
    side_navbar.style.left="-60%"
}
// Select search,product-images
var search=document.querySelector(".search")
var productContainer=document.querySelector(".product-images")
var productItems=productContainer.querySelectorAll("div")

search.addEventListener("keyup",function(){
    var enteredNo=event.target.value.toUpperCase()
    for(var i=0;i<productItems.length;i++)
    {
        var productNames=productItems[i].querySelector("p").textContent
        if(productNames.toUpperCase().indexOf(enteredNo)<0)
        {
            productItems[i].style.display="none"
        }
        else{
            productItems[i].style.display="block"
        }
    }
})