let contVideos = document.querySelector('.contvideos');
let page = document.querySelector('body');
let entete = document.querySelector('header');


page.style.height = '100vh';
let taille = page.offsetHeight - entete.offsetHeight;
contVideos.style.height = taille+'px';
alert(page.offsetHeight);
alert(contVideos.offsetHeight);
alert(taille);
//alert(entete.offsetHeight);
//alert(contVideos.offsetHeight);
//alert(taille);