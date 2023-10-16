/* global $ */

    'use strict';

    // Show small menus
    $('.Navbar .blog').click(function () {

        $('.li-menu').slideToggle();
    });

    // Show nav-links
    $('.Navbar .right .bar').click(function () {

        $('.nav-links').slideToggle();
    });


    // Centralize body section
    $('.header .container').css('paddingTop', ($(window).height() - $('.body').height()) / 2);


    // Centralize Membership box
    $('.membership').css('paddingTop', ($(window).height() - $('.membership .box').height()) / 4);


    // Show the form
    $('.member button').click(function () {

        $('.membership').show();

    });

    // Hide the form
    $('.membership .box i').click(function () {

        $('.membership').hide();

    });

    // Smoothly Scroll To Elements
    $('.Navbar li a, .nav-links li a').click(function () {
        
       $('html, body').animate({
           
           scrollTop : $('#' + $(this).data('scroll')).offset().top + 1
           
       }, 1000);
        
    });

    // Sunc Navbar Links With Sections
    $(window).scroll(function () {
        
       $('.block').each(function () {
           
          if($(window).scrollTop() > $(this).offset().top) {
              
              var blockID = $(this).attr('id');
              
              $('.Navbar li a, .nav-links li a').removeClass('active');
              
              $('.Navbar li a[data-scroll="' + blockID + '"]').addClass('active');
              $('.Nav-links li[data-scroll="' + blockID + '"]').addClass('active');
              
          }
           
       });
        
    });


    // Hide Placeholder
    var placeholder;
    $('[placeholder]').focus(function () {

        placeholder = $(this).attr('placeholder');

        $(this).attr('placeholder', '');        

    }).blur(function () {

        $(this).attr('placeholder', placeholder); 

    });

    // wow Plugin
    $(function () {
        
       new WOW().init();
        
    });