$(document).ready(function(){
    $('.skills__btn--active').click(function(){
        $('.skills__web,.skills__front').toggle( function(){
            console.log("toggle completed");
        });
    }); 

});