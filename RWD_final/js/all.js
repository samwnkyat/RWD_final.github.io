$(document).ready(function () {
    $('.showmenu').on('click', function (e) {
        e.preventDefault();
        $('body').toggleClass('menu-show');
    });
    $('.far.fa-heart').click(function (e) {
        e.preventDefault();
        $('this').toggleClass('fill');
    });
});