const hamburger = document.querySelector('.hamburger');
const navbarlink = document.querySelector('.navbar-list');
console.log(hamburger)


hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle('active');
    navbarlink.classList.toggle('active');
})