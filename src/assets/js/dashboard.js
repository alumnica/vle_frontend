$('#materias-slider').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    responsive:{
        0:{
            items:3,
            nav:true
        },
        600:{
            items:4,
            nav:false
        },
    },
    dots: false,
    autoplay: true,
    autoplayTimeout: 3500,
    autoplayHoverPause: true,
    
  });


  $('#insignias-slider').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    items: 4,
    dots: false,
  });