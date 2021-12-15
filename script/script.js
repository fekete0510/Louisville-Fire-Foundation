

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










