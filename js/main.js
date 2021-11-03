$(function () {
    $('.burger').on('click', function () {
        this.classList.toggle('opened');
        $('.menu').toggleClass('is-open');
    });
    let $page = $('html, body');
    $('a[href*="#"]').click(function() {
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 400);
        return false;
    });
});