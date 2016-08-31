$(document).ready(function(){

    // --- HEADER
    var WH = $(window).height();
    $('#main-header').height(WH);

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
