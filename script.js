$(document).ready(function() {
    $(window).scroll(function() {
        if (this.scrollY > 20) {
            $(`.navbar`).addClass("sticky");
        } else {
            $(`.navbar`).removeClass("sticky");
        }
    });
    // toggle menu/navbar 
    $(`.menu-btn`).click(function() {
        $(`.navbar .menu`).toggleClass("active");
        $(`.menu-btn i`).toggleClass("active");
    });

    // typing
    var typed = new Typed(".typing", {
        strings: ["a Student", " an Android Developer", "a Web Developer", "a Teacher", "an UI/UX Engineer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
});