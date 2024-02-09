const header = document.querySelector('header');

window.addEventListener("scroll", function() {
    header.classList.toggle('sticky', window.scrollY > 60)
});

var  menu = document.querySelector('#menu-icon');
var navbar = document.querySelector('.navbar');


function menuOpen() {
    menu.classList.toggle('#menu-open');
    navbar.classList.toggle('open');
};

var signinbtn = document.getElementById("signinbtn");
var signupbtn = document.getElementById("signupbtn");
var field = document.getElementById("field");
var title = document.getElementById("title");   

function handleClick() {
    field.style.maxHeight = "0";
    title.innerHTML = "Log In";
    signupbtn.classList.add("disable");
    signinbtn.classList.remove("disable");
  }
  function handleCl1ck() {
    field.style.maxHeight = "60px";
    title.innerHTML = "Register";
    signupbtn.classList.remove("disable");
    signinbtn.classList.add("disable");
  }