
function show(anything)
{
    document.querySelector(".box").value=anything;
}

var dropdown=document.querySelector(".dropdown")
dropdown.onclick=function(){
    dropdown.classList.toggle("active");
}