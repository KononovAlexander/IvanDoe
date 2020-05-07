$(document).ready(function(){
    $('.skills__btn--active').click(function(){
        $('.skills__web,.skills__front').toggle( function(){
        });
    });
    $('.scroll a[href^="#"]').click( function(){
    var scroll_el = $(this).attr('href');
    if ($(scroll_el).length != 0) {
        $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 800);
        $('html, body').animate({ scrollBottom: $(scroll_el).offset().bottom }, 800);
        // $('')
    }
    return false;
    });
});