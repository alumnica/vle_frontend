
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
    });

    var videoFile = '../assets/media/uODAs/Activación/mp4/activacion_m_v.mp4';
    var videoFileDesk = '../assets/media/uODAs/Activación/mp4/activacion_desktop.mp4';
    // $('#divVideo video source').attr('src', videoFile);

    // window.addEventListener("orientationchange", function() {
    //   console.log(window.orientation);
    //   var theOreintation = window.orientation;
    //   if(theOreintation == 0)
    //   {
    //     $('#uoda-video').each(function(){
    //       var filePath = '';
    //     })
    //     .attr('src',videoFile);
    //     $('.micro-image video')[0].load();
    //     $('.micro-image video')[0].play();
    //   } else {
    //     $('#uoda-video').attr('src',videoFileDesk);
    //     $('.micro-image video')[0].load();
    //     $('.micro-image video')[0].play();

    //   }
    // });



    //document ready
  });
  