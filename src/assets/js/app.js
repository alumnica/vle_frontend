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

window.Masonry = Masonry;

//fontawesome

import fontawesome from '@fortawesome/fontawesome';
import solid from '@fortawesome/fontawesome-free-solid';
import regular from '@fortawesome/fontawesome-free-regular';

// import faStar from '@fortawesome/fontawesome-free-solid/faStar';
// import faFlagCheckered from '@fortawesome/fontawesome-free-solid/faFlagCheckered';
// import faUndoAlt from '@fortawesome/fontawesome-free-solid/faUndoAlt';

// fontawesome.library.add(faStar);
// fontawesome.library.add(faFlagCheckered);
// fontawesome.library.add(faUndoAlt);

fontawesome.library.add(solid);
fontawesome.library.add(regular);

//jquery ui 

import 'jquery-ui/ui/widgets/tooltip';
import 'jquery-ui/ui/widgets/selectable';
import 'jquery-ui/ui/effects/effect-slide';

// flip

import flip from 'flip';


//fullpage.js

import fullpage from 'fullpage.js';

import Foundation from 'foundation-sites';

// import TinCan from 'tincanjs';

// window.TinCan = TinCan;

import TimeMe from 'timeme.js';

window.TimeMe = TimeMe;

// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';


// Register service worker to control making site work offline

// if('serviceWorker' in navigator) {
//   navigator.serviceWorker
//            .register('/static/webapp/PWA/serviceWorker.js')
//            .then(function() { console.log('Service Worker Registered'); });
// }


$(document).foundation();

//top navigation bar behaviour
$( "#search-btn" ).click(function() {
  searchMenuClick();
});


$( "#ham-btn" ).click(function() {
  menuShow();
});

$('.menu-cover').on('click', function(){
  menuShow();
});

$('.search-cover').on('click', function(){
  searchMenuClick();
})

function searchMenuClick() {
  var menuSatus = $('.main-menu').css('display');
  if (menuSatus == 'block') {
    menuShow();
  }
  $("#search-box").slideToggle();
  $(".search-cover").fadeToggle();
  if ($("#searcher").is(":focus")) {
    $("#searcher").blur();
  }
  else {
    $("#searcher").focus();
  }
  $("#search-btn").toggleClass("top-active");
}

function menuShow() {
  var searchStatus = $('#search-box').css('display');
  if (searchStatus == 'block'){
    $( "#search-box" ).slideToggle();
    $(".search-cover").fadeToggle();
    $( "#search-btn" ).toggleClass("top-active");
    $("#searcher").blur();
  }
  var menuSatus = $('.main-menu').css('display');
  if (menuSatus == 'block'){
    $("#ham-btn").hide().html(' <i class="fas fa-bars"></i>').fadeIn();
  } else if (menuSatus == 'none') {
    $("#ham-btn").hide().html(' <i class="fa fa-times"></i>').fadeIn();
  }
  $(".main-menu").slideToggle();
  $('.menu-cover').fadeToggle();
}
// $('.title-bar').on('sticky.zf.stuckto:top', function () {
//   $(this).addClass('shrink');
// }).on('sticky.zf.unstuckfrom:top', function () {
//   $(this).removeClass('shrink');
// });



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

// time


TimeMe.initialize({
  // currentPageName: document.title, // current page
  idleTimeoutInSeconds: 30 // seconds
});		


// window.onbeforeunload = function (event) {
// 	// xmlhttp=new XMLHttpRequest();
// 	// xmlhttp.open("POST","ENTER_URL_HERE", true);
// 	// xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
//   var timeSpentOnPage = TimeMe.getTimeOnCurrentPageInSeconds();
//   var duration = timeSpentOnPage.toString().slice(0,-1);
//   duration = `P${duration}S`;
//   console.log(duration);
//   // xmlhttp.send(duration);
// };