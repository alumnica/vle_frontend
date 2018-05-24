import $ from 'jquery';

// import js libraries with webpack
// requires npm install imports-loader (sudo maybe required)
// check https://foundation.zurb.com/forum/posts/53526-how-to-add-npm-package-js-file-to-foundation-64
import 'imports-loader?jQuery=jquery!owl.carousel';

import whatInput from 'what-input';

window.$ = $;


//Sweet Alert

import swal from 'sweetalert2';

window.swal = swal;


//masonry grid

import Masonry from 'masonry-layout';

// window.masonry = masonry;

//fontawesome

import fontawesome from '@fortawesome/fontawesome';
import faStar from '@fortawesome/fontawesome-free-solid/faStar';

fontawesome.library.add(faStar);

// flip

import flip from 'flip';

import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';

$(document).ready(function(){
    $('#materias-slider').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        items:1,
        dots:false,
        autoplay: true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
    });


    $('#insignias-slider').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        items:4,
        dots:false,
    });

     


  });


$(document).foundation();


$('.title-bar').on('sticky.zf.stuckto:top', function(){
  $(this).addClass('shrink');
}).on('sticky.zf.unstuckfrom:top', function(){
  $(this).removeClass('shrink');
});


$(document).ready(function(){
  
  
    $(".card").flip({
      // trigger: 'hover'
    }); 
  
  
  var msnry = createMasonry();


  });
  

function createMasonry() {
  return new Masonry('.grid', {
    // options...
    itemSelector: '.grid-item',
    gutter: 15,
    isFitWidth: true,
  });
}
// var hamburger = document.querySelector(".hamburger");
// // On click
// hamburger.addEventListener("click", function() {
//   // Toggle class "is-active"
//   hamburger.classList.toggle("is-active");
//   // Do something else, like open/close menu
// });

// swal({
//     title: 'Error!',
//     text: 'Do you want to continue',
//     type: 'error',
//     confirmButtonText: 'Cool'
//   })

