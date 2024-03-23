var nameerror=document.getElementById("name-error");
var phoneerror=document.getElementById("phone-error");
var emailerror=document.getElementById("email-error");
var messageerror=document.getElementById("message-error");
var submiterror=document.getElementById("submit-error");

// name validate
function validatename()
{
    var name=document.getElementById("name").value;

    if(name.length == 0)
    {
        nameerror.innerHTML="name is required";
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/))
    {
        nameerror.innerHTML="write full name";
        return false;
    }
    nameerror.innerHTML=`<i class="fa-regular fa-circle-check"></i>`;
    return true;
}
// phone validate
function validatephone()
{
    var phone=document.getElementById("phone").value;

    if(phone.length == 0)
    {
        phoneerror.innerHTML="phone no is required";
        return false;
    }
    if(phone.length!==10)
    {
        phoneerror.innerHTML="phone no should be 10 digits";
        return false;
    }
    if(!phone.match(/^[0-9]{10}$/))
    {
        phoneerror.innerHTML="only digits please";
        return false;
    }
    phoneerror.innerHTML=`<i class="fa-regular fa-circle-check"></i>`;
    return true;
}

// email validate
function validateemail()
{
    var email=document.getElementById("email").value;

    if(email.length == 0)
    {
        emailerror.innerHTML="email is required";
        return false;
    }
    if(!email.match(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/))
    {
        emailerror.innerHTML="email invalid";
        return false;
    }
   
    emailerror.innerHTML=`<i class="fa-regular fa-circle-check"></i>`;
    return true;
}

// message validate
function validatemessage()
{
    var msg=document.getElementById("msg").value;
    var count=30;
    var left=count - msg.length;

    if(left > 0)
    {
        messageerror.innerHTML=left + " more characters required";
        return false;
    }
    messageerror.innerHTML=`<i class="fa-regular fa-circle-check"></i>`;
    return true;
}

function validateform()
{
    if( !validatename() ||!validatephone() ||!validateemail() ||!validatemessage() )
    {
        submiterror.style.display='block';
        submiterror.textContent="please fix error";

        setTimeout(function(){
            submiterror.style.display='none';
        },3000)

        return false;
    }
}


