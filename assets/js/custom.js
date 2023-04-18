$('.nav-link').click(() => {
    $(".nav-link").removeClass("active");
    $(this).addClass('active');
});

$('#sidebarToggle').click((e) => {
    e.preventDefault();
    $("body").toggleClass("sb-sidenav-toggled");
});

$(function () {
    $('.card-link').on('click', function (e) {
        e.preventDefault();
        var link = $(this).attr("href");
        $(".tab-pane").removeClass("active show");
        $("#id-" + link).addClass("active show");
    });
});