let box=document.querySelector(".box");
let button=document.querySelector(".buttons button");

button.addEventListener("click",()=>
{
    // after one month cookie will be expired (60seconds - 60-1min - 24-1day - 30-1month)
    document.cookie="cookieBy=siva; max-age="+60*60*24*60;

    if(document.cookie)
    {
        // if cookie set box hide
        box.classList.add("hide");  
    }
    else
    {
        // if cookie not set alert msg show
        alert("cookies can't be set");
    }

})

 // find the cookie if the cookie set
 var check=document.cookie.indexOf("cookieBy=siva");
 //  if the cookies of check element not found return -1 and box show otherwise hide
 check != -1 ? box.classList.add("hide") : box.classList.remove("hide");