const scriptURL = 'https://script.google.com/macros/s/AKfycbz1FArJy4YaIGmTEJAXvqLQkPjSJKREgK7Rj79Q79MUgphtbLdGUiAzMwYJX7lVoNOU/exec'
const form = document.forms['submit-to-google-sheet']
var msg=document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response =>{
        msg.innerHTML="Thank You for Subscribing!";
        setTimeout(function(){
            msg.innerHTML="";
        },3000)
        form.reset();
    })
    .catch(error => console.error('Error!', error.message))
})