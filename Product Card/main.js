var image=document.getElementById("image")
var btns=document.getElementsByClassName("btn")

btns[0].onclick=function(){
    image.src="1.png";
    for(bt of btns)
    {
        bt.classList.remove("active")
    }
    this.classList.add("active")
}
btns[1].onclick=function(){
    image.src="2.png";
    for(bt of btns)
    {
        bt.classList.remove("active")
    }
    this.classList.add("active")
}
btns[2].onclick=function(){
    image.src="3.png";
    for(bt of btns)
    {
        bt.classList.remove("active")
    }
    this.classList.add("active")
}