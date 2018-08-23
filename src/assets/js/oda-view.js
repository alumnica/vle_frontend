// for oda.html

$(document).ready(function () {

  //starts fullpage.js

  $('#fullpage').fullpage({
    anchors: ['firstPage', 'secondPage', '3rdPage', '4thPage', '5thPage', '6thPage'],
    // sectionsColor: ['#C63D0F', '#1BBC9B', '#7E8F7C'],
    navigation: true,
    navigationPosition: 'left',
    // navigationTooltips: ['First page', 'Second page', 'Third and last page'],
    paddingBottom: '3rem',
    paddingTop: '3rem',
    verticalCentered: false,
    menu: '#menu',
    onLeave: function(origin, destination, direction){
      // mkaes click instruction appear and dissapear
      var leavingSection = this;
      var indState = $('.indication').css('display');
  
      if(origin== 1 && indState == 'none'){
        $('.indication').fadeIn(1500);
      } 
      else if (origin==2 && direction == 'up')
      {
        $('.indication').fadeOut(500);
      }
    }
    
  });

 

});

