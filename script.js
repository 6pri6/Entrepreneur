const menuHamburger = document.querySelector(".burger-menu"); /* vérifier cas d'usage du querySelectorAll ici */
const navLinks = document.querySelector(".nav-links");

document.addEventListener("DOMContentLoaded", function() {
  let menu = document.querySelectorAll(".burger-menu");
  menu.forEach(function(element) {
    element.addEventListener("click", function() {
      navLinks.classList.toggle('mobile-menu');   
    });
  });
});
/*
document.getElementById("interview001").addEventListener('click', function() {
  window.location.href = "interview001.html";
});
*/
document.getElementById('AboutLinks').addEventListener('click', function() {
    // Récupérer la hauteur de la fenêtre en pixels
    var windowHeight = window.innerHeight;
  
    // Calculer la position en pixels pour faire défiler jusqu'à 80vh
    var scrollPosition = (windowHeight * 0.85);
  
    // Utiliser scrollIntoView pour faire défiler la fenêtre jusqu'à la position calculée
    window.scrollTo({ top: scrollPosition, behavior: 'smooth' }); // Le défilement sera fluide
  });
document.getElementById('RecentLink').addEventListener('click', function() {    // Récupérer la hauteur de la fenêtre en pixels
    var windowHeight = window.innerHeight;
  
    // Calculer la position en pixels pour faire défiler jusqu'à 80vh
    var scrollPosition = (windowHeight * 0.67);
  
    // Utiliser scrollIntoView pour faire défiler la fenêtre jusqu'à la position calculée
    window.scrollTo({ top: scrollPosition, behavior: 'smooth' }); // Le défilement sera fluide
  });
  
let page = document.getElementsByClassName('page');
let page1 = document.getElementsByClassName('page1');
let step = 0;
let step1 = 0;
let PageLength = page.length;
let Page1Length = page1.length;
let prev = document.querySelector('.prev');
let prev1 = document.querySelector('.prev1');
let next = document.querySelector('.next');
let next1 = document.querySelector('.next1');



function RemoveActivePage() {
  for(let i = 0 ; i < PageLength ; i++){
    page[i].classList.remove('PageActive');
  }
};
function RemoveActivePage1() {
  for(let i = 0 ; i < Page1Length ; i++){
    page1[i].classList.remove('PageActive');
  }
};

next.addEventListener('click', function(){
  step++;
  if(step >= PageLength) {
    step = 0;
  };
  RemoveActivePage();
  page[step].classList.add('PageActive');
});
next1.addEventListener('click', function(){
  step1++;
  if(step1 >= Page1Length) {
    step1 = 0;
  };
  RemoveActivePage1();
  page1[step1].classList.add('PageActive');
});

prev.addEventListener('click', function() {
  step--;
  if(step < 0) {
    step = PageLength - 1;
  };
  RemoveActivePage();
  page[step].classList.add('PageActive');
});
prev1.addEventListener('click', function() {
  step1--;
  if(step1 < 0) {
    step1 = Page1Length - 1;
  };
  RemoveActivePage1();
  page1[step1].classList.add('PageActive');
});