function init_plugins() {

    $(function() {

        // Audio play

        var audio = $('audio')[0];

        $('.play').on('click', function() {
            audio.ontimeupdate = function() {
                $('.progress').css('width', audio.currentTime / audio.duration * 100 + '%')
            }

        });

    });

}