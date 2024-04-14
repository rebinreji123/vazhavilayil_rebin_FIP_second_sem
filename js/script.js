/*for hero image when user scrolls the page*/
window.addEventListener('scroll', function () {
  var body = document.querySelector('body');
  var backgroundLogo = document.querySelector('.background-image-logo');

  if (window.scrollY > 0) {
    body.classList.add('scroll-down');
    backgroundLogo.classList.add('fade-out-scroll');
  } else {
    body.classList.remove('scroll-down');
    backgroundLogo.classList.remove('fade-out-scroll');
  }
});

/*BUG: when file is opened outside of vscode, the hero image does ntot appera*/

/*promo*/
const promoButton = document.getElementById('promoButton');
const promoLightbox = document.getElementById('promoLightbox');
const promoContent = document.getElementById('promoContent');
const closeButton = document.getElementById('closeButton');

promoButton.addEventListener('click', () => {
    const promoDetails = [
      /* promotion message*/
        "Buy 1 & get 1 for absolutely free",
    ];

    const randomPromo = promoDetails[Math.floor(Math.random() * promoDetails.length)];
    promoContent.textContent = randomPromo;
    
    promoLightbox.style.display = 'flex';
});

closeButton.addEventListener('click', () => {
    promoLightbox.style.display = 'none';
});  




