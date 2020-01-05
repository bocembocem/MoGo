$(function() { 
    let menuCheck = false;
    let countBody = 0;
    let countQuote = 0;
    let countTestimonial = 0;

    $('.banner-header-mini').on('click', function() {
        if(menuCheck) {
            $('.banner-header-menu').slideToggle(function() {
                $('.banner-header').css({
                    backgroundColor: 'transparent'
                });
            });            
        } else {
            $('.banner-header').css({
                backgroundColor: 'rgba(0, 0, 0, 0.7)'
            });
            $('.banner-header-menu').slideToggle();
        }
        menuCheck = !menuCheck;        
    });
    
    $(window).on('resize', function() {
        if($(this).outerWidth() >= 576) {
            $('.banner-header-menu').css({
                display: 'flex'
            });
        } else {
            $('.banner-header-menu').css({
                display: 'none'
            });
        }
        $('.banner-header').css({
            backgroundColor: 'transparent'
        });
        menuCheck = false;
    });

    $('.banner-header-menu-item').on('mouseenter', function() {
        $(this).children('.banner-header-menu-item-border').stop().animate({
            width: '100%',
            opacity: 1
        });
    });
    $('.banner-header-menu-item').on('mouseleave', function() {
        $(this).children('.banner-header-menu-item-border').stop().animate({
            width: 0,
            opacity: 0
        });
    });

    $('.banner-slider-item').each(function() {
        $(this).attr('data-num', countBody);
        $(this).on('click', function() {
            slideStart($(this));        
        });
        countBody++;
    });
    slideStart($('.banner-slider-item').first());

    $('.service2-content-accordeon-toggle').first().slideDown();
    $('.service2-content-accordeon-tab').first().children('.service2-content-accordeon-tab-arrow').css({
        transform: 'rotate(0deg)'
    });
    $('.service2-content-accordeon-tab').on('click', function() {
        $('.service2-content-accordeon-toggle').slideUp();
        $('.service2-content-accordeon-tab').children('.service2-content-accordeon-tab-arrow').css({
            transform: 'rotate(180deg)'
        });
        $(this).next().slideToggle();
        $(this).children('.service2-content-accordeon-tab-arrow').css({
            transform: 'rotate(0deg)'
        });
    });
    
    $('.quote-body-arrow-left').on('click', function() {
        if(countQuote == 0) {
            countQuote = $('.quote-body-comment-slide').length - 1;
            let goLeft = -100 * countQuote;
            $('.quote-body-comment-slide').first().animate({
                marginLeft: goLeft + '%'
            });
            
        } else {
            let goLeft = -100 * (countQuote - 1);
            $('.quote-body-comment-slide').first().animate({
                marginLeft: goLeft + '%'
            }); 
            countQuote--;
        }        
    });
    $('.quote-body-arrow-right').on('click', function() {
        if(countQuote == $('.quote-body-comment-slide').length - 1) {
            $('.quote-body-comment-slide').first().animate({
                marginLeft: 0
            });
            countQuote = 0;
        } else {
            let goLeft = -100 * (countQuote + 1);
            $('.quote-body-comment-slide').first().animate({
                marginLeft: goLeft + '%'
            }); 
            countQuote++;
        }   
    });

    $('.testimonial-body-arrow-left').on('click', function() {
        if(countTestimonial == 0) {
            countTestimonial = $('.testimonial-body-slide-phrase').length - 1;
            let goLeft = -100 * countTestimonial;
            $('.testimonial-body-slide-phrase').first().animate({
                marginLeft: goLeft + '%'
            });
            
        } else {
            let goLeft = -100 * (countTestimonial - 1);
            $('.testimonial-body-slide-phrase').first().animate({
                marginLeft: goLeft + '%'
            }); 
            countTestimonial--;
        }        
    });
    $('.testimonial-body-arrow-right').on('click', function() {
        if(countTestimonial == $('.testimonial-body-slide-phrase').length - 1) {
            $('.testimonial-body-slide-phrase').first().animate({
                marginLeft: 0
            });
            countTestimonial = 0;
        } else {
            let goLeft = -100 * (countTestimonial + 1);
            $('.testimonial-body-slide-phrase').first().animate({
                marginLeft: goLeft + '%'
            }); 
            countTestimonial++;
        }   
    });

    $('.about-images-item-inner').on('mouseenter', function() {
        $(this).children('.about-images-item-inner-img').stop().animate({
            marginLeft: '-10px',
            marginTop: '-10px'
        });
        let getWidth = Math.ceil($(this).children('.about-images-item-inner-img').outerWidth());
        let getHeight = Math.ceil($(this).children('.about-images-item-inner-img').outerHeight());
        $(this).css({
            height: getHeight,
            width: getWidth
        });
        $(this).children('.about-images-item-inner-layer').stop().animate({
            opacity: 1,
            marginLeft: '-10px',
            marginTop: '-10px',
            width: getWidth,
            height: getHeight
        });
    });
    $('.about-images-item-inner').on('mouseleave', function() {
        $(this).children('.about-images-item-inner-img').stop().animate({
            marginLeft: 0,
            marginTop: 0
        }, function() {
            $(this).parent().css({
                height: '100%',
                width: 'auto'
            });
        });        
        $(this).children('.about-images-item-inner-layer').stop().animate({
            opacity: 0,
            marginLeft: 0,
            marginTop: 0,
            width: '100%',
            height: '100%'
        });
    });
     
    $('.team-images-item-inner').on('mouseenter', function() {
        $(this).children('.team-images-item-inner-img').stop().animate({
            marginLeft: '-20px',
            marginTop: '-10px'
        });
        let getWidth = Math.ceil($(this).children('.team-images-item-inner-img').outerWidth());
        let getHeight = Math.ceil($(this).children('.team-images-item-inner-img').outerHeight());
        $(this).css({
            height: getHeight,
            width: getWidth
        });
        $(this).children('.team-images-item-inner-layer').stop().animate({
            opacity: 1,
            marginLeft: '-10px',
            marginTop: '-10px',
            width: getWidth,
            height: getHeight
        });
    });
    $('.team-images-item-inner').on('mouseleave', function() {
        $(this).children('.team-images-item-inner-img').stop().animate({
            marginLeft: 0,
            marginTop: 0
        }, function() {
            $(this).parent().css({
                height: '100%',
                width: 'auto'
            });
        });        
        $(this).children('.team-images-item-inner-layer').stop().animate({
            opacity: 0,
            marginLeft: 0,
            marginTop: 0,
            width: '100%',
            height: '100%'
        });
    });

    $('.work2-item-image').on('mouseenter', function() {
        $(this).children('.work2-item-image-layer').stop().animate({
            opacity: 1
        });
        
    });
    $('.work2-item-image').on('mouseleave', function() {
        $(this).children('.work2-item-image-layer').stop().animate({
            opacity: 0
        });
    });
});

function slideStart(item) {
    $('.banner-slider-item-text').css({
        opacity: 0.7
    });
    $('.banner-slider-item-time').css({
        opacity: 0.5
    }).children('.banner-slider-item-time-loader').stop().css({
        width: 0
    });

    item.children('.banner-slider-item-text').css({
        opacity: 1
    });
    item.children('.banner-slider-item-time').css({
        opacity: 1
    }).children('.banner-slider-item-time-loader').animate({
        width: '100%'
    }, 5000, 'linear', function() {
        $('.banner-slider-item-text').css({
            opacity: 0.7
        });
        $('.banner-slider-item-time').css({
            opacity: 0.5
        }).children('.banner-slider-item-time-loader').css({
            width: 0
        });
        if(item.attr('data-num') == $('.banner-slider-item').length - 1) {
            slideStart($('.banner-slider-item').first());
        } else {
           slideStart(item.next('.banner-slider-item')); 
        }        
    });
}