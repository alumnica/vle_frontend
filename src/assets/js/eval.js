$(document).ready(function() {
	$('#evaluate').fullpage({
        verticalCentered: false,

    });

    $.fn.fullpage.setAllowScrolling(false, 'down');
    $.fn.fullpage.setKeyboardScrolling(false);

    $('.multi-answers li').on('click', function(){
        
        $('.multi-answers li').removeClass('multi-chosen');
        $(this).toggleClass('multi-chosen');
    });


    $('.multi-multi li').on('click', function(){
        $(this).toggleClass('multi-chosen');
    });

    $('.next').on('click', '.button', function(){
        $.fn.fullpage.moveSectionDown();
    })

});

