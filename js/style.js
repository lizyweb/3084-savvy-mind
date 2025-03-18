document.addEventListener('DOMContentLoaded', () => {
    "use strict";
    $(window).scroll(function () {
        var navbar = $('.navbar');
        if ($(this).scrollTop() > 45) {
            navbar.addClass('sticky-top shadow-sm');
        } else {
            navbar.removeClass('sticky-top shadow-sm');
        }
    });
    
});