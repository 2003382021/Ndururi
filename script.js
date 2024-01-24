const wrapper = document.querySelector('.wrapper');
const btnpopup = document.querySelector('.admin');
const iconClose = document.querySelector('.icon-close');
const navBar = document.querySelector('.navigation');
const menuBar = document.querySelector('.menu');
const closeIcon = document.querySelector('.close');

 

btnpopup.addEventListener('click', ()=>{
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', ()=>{
    wrapper.classList.remove('active-popup');
});

menuBar.addEventListener('click', ()=>{
    navBar.classList.add('active');
});

closeIcon.addEventListener('click', ()=>{
    navBar.classList.remove('active');
});

btnpopup.addEventListener('click', ()=>{
    navBar.classList.remove('active');
});
