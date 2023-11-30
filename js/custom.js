$(function () {
    $('.visual_slide').slick({
        arrows: false,
        autoplay: true,
        pauseOnHover: false,
        autoplaySpeed: 3000
    });

    $('.btn').on('click', function () {
        $('.popup').hide();
    });
})