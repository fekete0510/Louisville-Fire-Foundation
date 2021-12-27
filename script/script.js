

/* Humburger Button */

function toggleMenu() {
    document.getElementById("mainNav").classList.toggle("open");
}

let x = document.getElementById('hamburgerBtn');
x.onclick = toggleMenu;




/* Cookie Consent Popup Session Storage

const storageType = sessionStorage;
const consentPropertyName = 'lff_consent';

const shouldSHowPopup =  () => !storageType.getItem(consentPropertyName);
const saveToStorage = () => storageType.setItem(consentPropertyName, true);

window.onload = () => {
    if  (shouldSHowPopup()) {
        const consent = confirm ('Agree to the terms and conditions of the site?');
        if (consent) {
            saveToStorage();
        }
    }

};

I decided against using this pop up because i wanted to stylize a banner pop up.
*/ 




/* Banner Cookie Consent */
//  https://www.youtube.com/watch?v=R_-oGJBg3nw  
//Saved in Local storage once clicked the banner will not reappear until I clear local storage




const cookiebox = document.querySelector(".cookiebox");
const cookieacceptBtn = document.querySelector(".cookieacceptBtn");

cookieacceptBtn.addEventListener("click",() => {
    cookiebox.classList.remove("active");
    localStorage.setItem("cookieBannerDisplayed", "true"); 

});

setTimeout(() => {
    if(!localStorage.getItem("cookieBannerDisplayed"))
    cookiebox.classList.add("active");
}, 2000);  //calculated in milliseconds// 




/* Validate EMail Contact Form     couldnt get this to work   

function Validate(){
    var email = document.getElementById("emailaddress").value;

    var regex = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)([.a-z]+)?$/;  

    if(regex.text( email)){
        alert("Your form has been submitted")
        return true
    }
    else{
        alert("PLease enter a valid Email Address")
        return(false)
    }

}
 */   




function ValidateEmail(input) {

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
    if (input.value.match(validRegex)) {
  
      alert("YOur form has been submmitted");
  
      document.form1.text1.focus();
  
      return true;
  
    } else {
  
      alert("Invalid email address!");
  
      document.form1.text1.focus();
  
      return false;
  
    }
  
  }