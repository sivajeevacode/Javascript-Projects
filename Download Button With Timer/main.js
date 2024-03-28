var btn=document.querySelector(".btn");

var url=""; 

var inittimer = ()=>
{
    if(btn.classList.contains("hide-timer"))
    {
        return(location.href=url);
    }

    
    var timer=btn.dataset.timer;
    btn.classList.add("timer");
    btn.innerHTML=`Your download will begin in <p>${timer}</p> seconds`;

    var interval=setInterval(()=>
    {
        if(timer > 0 )
        {
            timer--;
            return(btn.innerHTML=`Your download will begin in <p>${timer}</p> seconds`);
        }

        clearInterval(interval);
        // it's not a download function
        location.href=url;  
        btn.textContent="Your file is downloading...";

        setTimeout(()=>{
            btn.classList.replace('timer','hide-timer');
            btn.innerHTML=` <span><i class="fa-solid fa-download"></i></span>
            <span>Download Files</span>`;
        },3000);
        
    },1000);

}

btn.addEventListener("click",inittimer);

