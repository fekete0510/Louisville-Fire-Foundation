

/* Humburger Button */

function toggleMenu() {
    document.getElementById("mainNav").classList.toggle("open");
}

let x = document.getElementById('hamburgerBtn');
x.onclick = toggleMenu;