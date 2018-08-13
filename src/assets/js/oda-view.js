
$(document).ready(function () {
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

  var videoFile = '../assets/media/uODAs/Activación/mp4/activacion_m_v.mp4';
  var videoFileDesk = '../assets/media/uODAs/Activación/mp4/activacion_desktop.mp4';
  // $('#divVideo video source').attr('src', videoFile);


  // window size change

  // var w = window,
  //   d = document,
  //   e = d.documentElement,
  //   g = d.getElementsByTagName('body')[0],
  //   x = w.innerWidth || e.clientWidth || g.clientWidth,
  //   y = w.innerHeight || e.clientHeight || g.clientHeight;

  // fileLoader(x);

  // window.addEventListener("orientationchange", function () {
  //   var w = window,
  //       d = document,
  //       e = d.documentElement,
  //       g = d.getElementsByTagName('body')[0],
  //       x = w.innerWidth || e.clientWidth || g.clientWidth,
  //       y = w.innerHeight || e.clientHeight || g.clientHeight;

  //     fileLoader(y);

  // });



});










// console.log(window.orientation);
// var theOreintation = window.orientation;
// if (theOreintation == 0) {
//   $('#uoda-video').each(function () {
//     var filePath = '';
//   })
// }
//     .attr('src',videoFile);
//     $('.micro-image video')[0].load();
//     $('.micro-image video')[0].play();
//   } else {
//     $('#uoda-video').attr('src',videoFileDesk);
//     $('.micro-image video')[0].load();
//     $('.micro-image video')[0].play();

//   }