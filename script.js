const burgerMenu = document.querySelector('.burger-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const closeIcon = document.querySelector('.close-icon');

burgerMenu.addEventListener('click', () => {
    mobileMenu.style.display= "block";
});
closeIcon.addEventListener('click',()=>{
    mobileMenu.style.display= "none";
})