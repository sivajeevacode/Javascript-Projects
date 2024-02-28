// select input ,btn
var input=document.getElementById("input");
var btn=document.getElementById("btn");

btn.addEventListener("click",()=>{
    input.select();
    document.execCommand("copy");
});