var icon=document.querySelector(".theme")

icon.onclick=function(){
    document.body.classList.toggle("dark-theme");

    if(document.body.classList.contains("dark-theme"))
    {
        icon.src="sun.png";
    }
    else
    {
        icon.src="moon.png";
    }
}