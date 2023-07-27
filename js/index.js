$(document).ready(function () {
    $('.description3').hide();
    $('.description2').hide();
    $('.description4').hide();
    $('.desc1').click(function (e) { 
        $('.description3').hide();
        $('.description2').hide();
        $('.description4').hide();
        $('.description1').show();
        $('.desc1').addClass('activ');
        $('.desc2').removeClass('activ');
        $('.desc3').removeClass('activ');
        $('.desc4').removeClass('activ');
    });
    $('.desc2').click(function (e) { 
        $('.description3').hide();
        $('.description2').show();
        $('.description4').hide();
        $('.description1').hide();
        $('.desc2').addClass('activ');
        $('.desc1').removeClass('activ');
        $('.desc3').removeClass('activ');
        $('.desc4').removeClass('activ');
    });
    $('.desc3').click(function (e) { 
        $('.description3').show();
        $('.description2').hide();
        $('.description4').hide();
        $('.description1').hide();
        $('.desc2').removeClass('activ');
        $('.desc1').removeClass('activ');
        $('.desc3').addClass('activ');
        $('.desc4').removeClass('activ');
    });
    $('.desc4').click(function (e) { 
        $('.description3').hide();
        $('.description2').hide();
        $('.description4').show();
        $('.description1').hide();
        $('.desc2').removeClass('activ');
        $('.desc1').removeClass('activ');
        $('.desc3').removeClass('activ');
        $('.desc4').addClass('activ');
    });
    
});