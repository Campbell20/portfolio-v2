$(document).ready(function() {
    //your code here


    $('.designer-container').mouseenter(function() {
        $('.designer-container').animate({
            opacity: 1
        }, 500);
        $('.designer-text-box').animate({
            opacity: 1
        }, 500);
        $('.coder-container').animate({
            opacity: .3
        }, 500);
            $('.coder-text-box').animate({
            opacity: .3
        }, 500);
         $(".designerpopout-text-box").animate ({
            left: 346
        }, 500);
    });

    $('.coder-container').mouseenter(function() {
        $('.designer-container').animate({
            opacity: .3
        }, 500);
        $('.designer-text-box').animate({
            opacity: .3
        }, 500);
       
        $('.coder-container').animate({
            opacity: 1
        }, 500);
        $('.coder-text-box').animate({
            opacity: 1
        }, 500);
        
        $(".coderpopout-text-box").animate ({
            left: 1200
        }, 500);
    });


      $('.faceimageanimcation-container').mouseout(function() {
        $('.coder-container').animate({
            opacity: 1
        }, 1);
        $('.coder-text-box').animate({
            opacity: 1
        }, 500);
         $('.designer-text-box').animate({
            opacity: 1
        }, 500);
        $('.designer-container').animate({
            opacity: 1
        }, 1);
        $(".coderpopout-text-box").animate ({
            left: 800
        }, 500);
           $(".designerpopout-text-box").animate ({
            left: 800
        }, 500);
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
