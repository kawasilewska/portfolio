$('a').click(function() {
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top},
        'slow');
});

$('button').click(function() {
    $('html, body').animate({
        scrollTop: $('.about').offset().top},
        'slow');
});