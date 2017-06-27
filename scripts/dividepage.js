$(document).ready(function() {
    //your code here


    $('.designer-container').mouseenter(function() {
        $('.designer-container').animate({
            opacity: 1
        }, 500);
        $('.coder-container').animate({
            opacity: .3
        }, 500);
    });

    $('.coder-container').mouseenter(function() {
        $('.designer-container').animate({
            opacity: .3
        }, 500);
        $('.coder-container').animate({
            opacity: 1
        }, 500);
    });


      $('.faceimageanimcation-container').mouseout(function() {
        $('.coder-container').animate({
            opacity: 1
        }, 1);
        $('.designer-container').animate({
            opacity: 1
        }, 1);
    });


    //  $('.designer-container').mouseout(function() {
    //     $('.coder-container').animate({
    //         left: $(".designer-container").parent().width() / 2 - $(".designer-container").width() / 2
    //     }, 200);
    //     $('.designer-container').animate({
    //         left:0
    //     }, 200);
    // });


});
