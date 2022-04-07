$(document).ready(function(){
    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    // LOGIN
    $('#login').click(function(){
        $('.login-form').addClass('popup');
    });
    $('.login-form form .fa-times').click(function(){
        $('.login-form').removeClass('popup');
    });


    // REGISTRATION
    $('.registration-form form .fa-times').click(function(){
        $('.registration-form').removeClass('popup');
    });

    // Change Password
    $('.change-password form .fa-times').click(function(){
        $('.change-password').removeClass('popup');
    });
    $('#login').click(function(){
        $('.login-form').addClass('popup');
    });
    $('.login-form form .fa-times').click(function(){
        $('.login-form').removeClass('popup');
    });




    $(window).on('load scroll',function(){
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');
        $('.login-form').removeClass('popup');
        $('.registration-form').removeClass('popup');
    });

    

});
