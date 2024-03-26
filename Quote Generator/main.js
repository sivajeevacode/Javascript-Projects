// select the quote,author
var quote=document.getElementById("quote");
var author=document.getElementById("author");

// API section
var api_url="https://api.quotable.io/random";

async function generate(url)
{
    var response=await fetch(url);
    var data=await response.json();

    quote.innerHTML=data.content;
    author.innerHTML=data.author;
}

generate(api_url);

// tweet section

function tweet()
{
    window.open("https://twitter.com/intent/tweet?text="+ quote.innerHTML +"-----by"+author.innerHTML ,
    "Tweet Window","height=300px,width=600px");
}