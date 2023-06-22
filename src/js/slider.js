export function initSlider() {
  if (document.querySelector('.slider-certificate')) {
    new Swiper('.slider-certificate', {
      loop: true,
      autoHeight: true,
  
      navigation: {
        nextEl: '.slider-certificate__button-next',
        prevEl: '.slider-certificate__button-prev',
      },
  
      pagination: {
        el: '.billets__items',
        type: 'bullets',
        clickable: true,
      },
  
    })
  }
}