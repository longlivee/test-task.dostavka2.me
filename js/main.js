window.onload = function() {
    initializeTimer();
}

$(".toform").click(function() {
    $('html, body').animate({
        scrollTop: $("#footer-form").offset().top
    }, 2000);
});

$('.button-campaign').click(function() {

    $('.overlay-campaign').fadeIn();
    $('.overlay-campaign').addClass('disabled');
});

$('.close-campaign').click(function() {
    $('.overlay-campaign').fadeOut();

});

$(document).mouseup(function(e) {
    var popup = $('.popup-campaign');
    if (e.target != popup[0] && popup.has(e.target).length === 0) {
        $('.overlay-campaign').fadeOut();

    }
});

$(document).ready(function() {
 
    var media = $('video').not("[autoplay='autoplay']");
    var tolerancePixel = 40;

    function checkMedia() {
        var scrollTop = $(window).scrollTop() + tolerancePixel;
        var scrollBottom = $(window).scrollTop() + $(window).height() - tolerancePixel;

        media.each(function(index, el) {
            var yTopMedia = $(this).offset().top;
            var yBottomMedia = $(this).height() + yTopMedia;

            if (scrollTop < yBottomMedia && scrollBottom > yTopMedia) { 
                $(this).get(0).play();
            } else {
                $(this).get(0).pause();
            }
        });

        //}
    }
    $(document).on('scroll', checkMedia);
});


function initializeTimer() {
    var currentDate = new Date(); 
    var endDate = new Date(currentDate.getFullYear() + "/" + (currentDate.getMonth() + 1) + "/" + currentDate.getDate());
    endDate.setDate(endDate.getDate() + 1); 
    var seconds = (endDate.getTime() - currentDate.getTime()) / 1000 
    if (seconds > 0) { 

        var minutes = seconds / 60; 
        var hours = minutes / 60; 

        minutes = (hours - Math.floor(hours)) * 60; 
        hours = Math.floor(hours); 
        seconds = Math.floor((minutes - Math.floor(minutes)) * 60); 
        minutes = Math.floor(minutes); 

        setTimePage(hours, minutes, seconds); 

        function secOut() {

            if (seconds == 0) { 
                if (minutes == 0) { 
                    if (hours == 0) { 
                        showMessage(timerId); 
                    } else {
                        hours--; 
                        minutes = 59; 
                        seconds = 59; 
                    }
                } else {
                    minutes--; 
                    seconds = 59; 
                }
            } else {
                seconds--; 
            }
            setTimePage(hours, minutes, seconds); 
        }
        timerId = setInterval(secOut, 1000) 
    } else {

        alert("Установленная дата уже прошла");

    }

}

function setTimePage(h, m, s) {
    var hour = document.getElementById("hours"),
        min = document.getElementById("min"),
        sec = document.getElementById("sec");

    hour.innerHTML = +h;
    min.innerHTML = +m;
    sec.innerHTML = +s;

    var hour = document.getElementById("footer-hours"),
        min = document.getElementById("footer-min"),
        sec = document.getElementById("footer-sec");

    hour.innerHTML = +h;
    min.innerHTML = +m;
    sec.innerHTML = +s;
}