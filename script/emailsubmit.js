

/* Validate EMail Contact Form */

function Validate(){
    var mail = document.getElementById("emailaddress").value;

    var regx = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)([.a-z]+)?$/  //checking email id

    if(regx.text(mail)){
        alert("Your form has been submitted")
        return true
    }
    else{
        alert("PLease enter a valid Email Address")
        return(false)
    }

}