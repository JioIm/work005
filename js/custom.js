$(function () {
    $('.visual_slide').slick({
        autoplay: true,
        dots: true,
        pauseOnHover: false,
        autoplaySpeed: 3000
    });

    $('.btn').on('click', function () {
        $('.popup').hide();
    });
})