$(document).ready(function(){

    // 인포메이션 내비
    $('.info_nav_1').slideUp();
    $('.info_nav>li:nth-child(4)').click(function(){
        $('.nav_1-1').slideToggle();
    });
    $('.info_nav>li:nth-child(4)').mouseleave(function(){
        $('.nav_1-1').slideUp();
    });

    $('.info_nav>li:nth-child(6)').click(function(){
        $('.nav_2').slideToggle();
    });
    $('.info_nav>li:nth-child(6)').mouseleave(function(){
        $('.nav_2').slideUp();
    });


    // 인포메이션
    $('.info>li').click(function(){
        $('.info>.nav_c>a').css('color','#333');
        $(this).children().addClass('info_bd_click');
        $(this).siblings().children().removeClass('info_bd_click');
        
        return false;
    });

    $('.info_arti4').css('display','none');
    $('.info_arti5').css('display','none');

    $('.info>.nav_c').click(function(){
        $('.info_arti3').css('display','block');
        $('.info_arti4').css('display','none');
        $('.info_arti5').css('display','none');

    });

    $('.info>.nav_d').click(function(){
        $('.info_arti4').css('display','block');
        $('.info_arti3').css('display','none');
        $('.info_arti5').css('display','none');
    });

    $('.info>.nav_e').click(function(){
        $('.info_arti5').css('display','block');
        $('.info_arti3').css('display','none');
        $('.info_arti4').css('display','none');
    });
});