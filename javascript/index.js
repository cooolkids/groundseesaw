var swiper1 = new Swiper(".mySwiper", {

  slidesPerView: 2,
  centeredSlides: true,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


var swiper2 = new Swiper(".myView", {

  autoplay: {
    Delay: 3000,
    disableOnInteraction: false,
},
  pagination: {
    el: ".swiper-pagination",
  },

});

  $('.menu li').click(function(e){
    e.preventDefault()
    let i=$(this).index()
    $('.menu li a').removeClass('on')
    $(this).find('a').addClass('on')
    swiper2.slideTo(i,1000)
  })

  swiper2.on('slideChange', function(){
    let idx =swiper2.activeIndex
  
    $('.menu li a').removeClass('on')
    $('.menu li').eq(idx).find('a').addClass('on')
  });