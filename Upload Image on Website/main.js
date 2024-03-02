// select input,img
var image=document.getElementById("image");
var input=document.getElementById("input");

input.onchange=function(){
    image.src=URL.createObjectURL(input.files[0]);
}