$(document).ready(function(){

    // --- HEADER
    // get header's content height to define min-height
    var lastHeaderElement = document.getElementsByClassName("scroll-down")[0];
    var lastHeaderElementPosition = lastHeaderElement.getBoundingClientRect();
    var minHeight = lastHeaderElementPosition.bottom + 20;
    var windowHeight = $(window).height();
    var newHeight = windowHeight;
    if(windowHeight<minHeight) newHeight = minHeight;
    $('#main-header').height(newHeight);


    // --- COUNTDOWN
    $('.countdown-area').countdown("2016/10/08 09:00:00", function (event) {
        $('.count-month').html("<span>"+event.strftime('%m')+"</span>AY");
        $('.count-day').html("<span>"+event.strftime('%n')+"</span>GÜN");
        $('.count-hour').html("<span>"+event.strftime('%H')+"</span>SAAT");
        $('.count-minute').html("<span>"+event.strftime('%M')+"</span>DAKİKA");
        $('.count-second').html("<span>"+event.strftime('%S')+"</span>SANİYE");
    });

    // --- ANIMATE
    $('.go').on('click', function(e) {
        var id = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(id).offset().top
        }, 500);
        e.preventDefault();
    });

    // --- MAP
    $('.map').goMap({
        zoom: 17,
        maptype: 'ROADMAP',
        markers: [{
            latitude: 39.893420,
            longitude: 32.785750,
            title: 'Webend'
        }]
    });

});
