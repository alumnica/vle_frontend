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
import brands from '@fortawesome/fontawesome-free-brands';

// import faStar from '@fortawesome/fontawesome-free-solid/faStar';
// import faFlagCheckered from '@fortawesome/fontawesome-free-solid/faFlagCheckered';
// import faUndoAlt from '@fortawesome/fontawesome-free-solid/faUndoAlt';

// fontawesome.library.add(faStar);
// fontawesome.library.add(faFlagCheckered);
// fontawesome.library.add(faUndoAlt);

fontawesome.library.add(solid);
fontawesome.library.add(regular);
fontawesome.library.add(brands);

//jquery ui

import 'jquery-ui/ui/widgets/tooltip';
import 'jquery-ui/ui/widgets/selectable';
import 'jquery-ui/ui/effects/effect-slide';

// flip

import flip from 'flip';

//fullpage.js

import fullpage from 'fullpage.js';

import Foundation from 'foundation-sites';

// timeing function for data collection

import TimeMe from 'timeme.js';

window.TimeMe = TimeMe;

// progressbar.js

import ProgressBar from 'progressbar.js';
window.ProgressBar = ProgressBar;

$(document).foundation();

//top navigation bar behaviour
$('#search-btn').click(function() {
  searchMenuClick();
});

$('#ham-btn').click(function() {
  menuShow();
  notiVisible();
});

$('.menu-cover').on('click', function() {
  menuShow();
});

$('.search-cover').on('click', function() {
  searchMenuClick();
});

function searchMenuClick() {
  notiVisible();
  var menuSatus = $('.main-menu').css('display');
  if (menuSatus == 'block') {
    menuShow();
  }
  $('#search-box').slideToggle();
  $('.search-cover').fadeToggle();
  if ($('#searcher').is(':focus')) {
    $('#searcher').blur();
  } else {
    $('#searcher').focus();
  }
  $('#search-btn').toggleClass('top-active');
}

function menuShow() {
  var searchStatus = $('#search-box').css('display');
  if (searchStatus == 'block') {
    $('#search-box').slideToggle();
    $('.search-cover').fadeToggle();
    $('#search-btn').toggleClass('top-active');
    $('#searcher').blur();
  }
  var menuSatus = $('.main-menu').css('display');
  if (menuSatus == 'block') {
    $('#ham-btn')
      .hide()
      .html(' <i class="fas fa-bars"></i>')
      .fadeIn();
  } else if (menuSatus == 'none') {
    $('#ham-btn')
      .hide()
      .html(' <i class="fa fa-times"></i>')
      .fadeIn();
  }
  $('.main-menu').slideToggle();
  $('.menu-cover').fadeToggle();
}

$('#ham-btn-out').click(function() {
  var menuSatus = $('.out-menu').css('display');
  if (menuSatus == 'block') {
    $('#ham-btn-out')
      .hide()
      .html(' <i class="fas fa-bars"></i>')
      .fadeIn();
  } else if (menuSatus == 'none') {
    $('#ham-btn-out')
      .hide()
      .html(' <i class="fa fa-times"></i>')
      .fadeIn();
  }
  $('.out-menu').slideToggle();
  $('.menu-cover-out').fadeToggle();
});

// initialize counting time spent on page

TimeMe.initialize({
  idleTimeoutInSeconds: 30, // seconds
});

function notiVisible() {
  var notiStatus = $('.noti-cont').css('display');
  if (notiStatus == 'block') {
    $('.noti-cont').slideToggle(250);
  }
}

var notiCont = $('.noti-cont');

$('#noti-btn').on('click', function() {
  notiCont.slideToggle(250);
  var searchStatus = $('#search-box').css('display');
  if (searchStatus == 'block') {
    $('#search-box').slideToggle();
    $('.search-cover').fadeToggle();
    $('#search-btn').toggleClass('top-active');
    $('#searcher').blur();
  }
  var menuSatus = $('.main-menu').css('display');
  if (menuSatus == 'block') {
    menuShow();
  }
});
