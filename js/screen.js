
$(document).ready(function() {
    setTimeout(function() {
        $(".se-pre-con").fadeOut(600, function() {
            $("body").css("background", "gray");
            window.location.href = "sign-in.html"; //path padung sa signin.html human splash screen ni
        });
    }, 1000); // Splash screen display duration, e change lang if gusto ug longer pa
});



