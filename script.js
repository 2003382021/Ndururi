
const navBar = document.querySelector('.navigation');
const menuBar = document.querySelector('.menu');
const closeIcon = document.querySelector('.close');
const page = document.querySelector('.iron');
const updateButton =document.querySelector('#mount');


menuBar.addEventListener('click', ()=>{
    navBar.classList.add('active');
});

closeIcon.addEventListener('click', ()=>{
    navBar.classList.remove('active');
});

btnpopup.addEventListener('click', ()=>{
    navBar.classList.remove('active');
});

updateButton.addEventListener('click', ()=>{
    page.classList.toggle('active');
});

window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY = 0);
})

