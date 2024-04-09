var x=0;

let count=document.getElementById("count");
let meter=document.getElementById("meter");

count.innerHTML=x;

function plus()
{
    if(x>=10)
    {
        return false;
    }
    if(x >=7)
    {
        meter.style.background="#f00";
        meter.style.filter="drop-shadow(0 0 2.5px #f00) drop-shadow(0 0 10px #f00)";
    }
    count.innerHTML=++x;
    meter.style.height=x*10+"%";
}

function minus()
{
    if(x<=0)
    {
        return false;
    }
    if(x<=7)
    {
        meter.style.background="#0f0";
        meter.style.filter="drop-shadow(0 0 2.5px #0f0) drop-shadow(0 0 10px #0f0)";
    }
    count.innerHTML=--x;
    meter.style.height=x*10+"%";
}