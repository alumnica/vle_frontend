$(document).ready(function() {
  // starts fullpage.js

  // $('#moments').fullpage({
  //   anchors: ['firstPage'],
  //   verticalCentered: false,
  //   slidesNavigation: false,
    // slidesNavPosition: 'top',
    // loopHorizontal: false
    // afterSlideLoad: function(section, origin, destination, direction) {
    //   var loadedSlide = this;

    //   //first slide of the 1st section
    //   if (destination == 3 && direction == 3 && ran == false) {
    //     showNum();
    //     ran = true;
    //   }
    // },
    // afterSlideLoad: function( section, origin, destination, direction){
    //   console.log('lol')
    // },
 
  
  // });
  
});



var ran = false;

function upCounter() {
  $('.end-scoring_score').toggleClass('show');
  $('.xp-number').each(function() {
    $(this)
      .prop('Counter', 0)
      .animate(
        {
          Counter: $(this).text(),
        },
        {
          duration: 2000,
          easing: 'swing',
          step: function(now) {
            $(this).text(Math.ceil(now));
          },
        }
      );
  });
}

async function showNum() {
  await showBoxes();
  setTimeout(upCounter, 2000);
}


var items = $('.bonus-box');

async function showBoxes() {
  for (var i = 0; i < items.length; i++) {
    // get function in closure, so i can iterate
    var toggleItemMove = getToggleItemMove(i);
    // stagger transition with setTimeout
    setTimeout(toggleItemMove, i * 500);
  }
}

function getToggleItemMove(i) {
  var item = items[i];
  return function() {
    $(item).toggleClass('show');
  };
}
