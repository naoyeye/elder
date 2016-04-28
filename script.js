
$(function() {
    audiojs.events.ready(function() {
        var as = audiojs.createAll();
    });

    $('button').click(function(e) {
        e.preventDefault();
        $(this).find('audio')[0].play();
    });
    
    var ua = navigator.userAgent.toLowerCase();

    var iswechat = !!ua.match(/micromessenger/);;

    if (iswechat) {
        $('#tips').show();
    }
})
