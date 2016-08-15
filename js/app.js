$(document).ready(function(){

    // --- HEADER
    var WH = $(window).height();
    $('#main-header').height(WH);


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
            latitude: 39.892378,
            longitude: 32.783437,
            title: 'Webend'
        }]
    });

});
