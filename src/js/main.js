$(function() { 
    $('.service2-content-accordeon-toggle').first().slideDown();
    $('.service2-content-accordeon-tab').on('click', function() {
        $('.service2-content-accordeon-toggle').slideUp();
        $(this).next().slideToggle();
    });
});