$('.work-items > div').on('click', function(){
    $(this).children('.arrow').toggleClass('active');
    $(this).parent('.work-items').toggleClass('toggleBg');
    $(this).toggleClass('color-name');
    $(this).next('p').slideToggle(600).toggleClass('color-name')
})
$('.work-features > div').on('click', function(){
    $(this).toggleClass('features-color');
    $(this).next('p').slideToggle(500)
})

$('.carusel-slide').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    arrows: false,
});

$(window).scroll(function(){
    if($(this).scrollTop() > 500){
        $('#up').fadeIn();
    } else {
        $('#up').fadeOut();
    }
})

$('#up').on('click', function(){
    $('html, body').animate({scrollTop: 0}, 600)
})

$('#home').on('click', function(e){
    e.preventDefault();
    $('html, body').animate({scrollTop: $('#about').offset().top}, 200)
})