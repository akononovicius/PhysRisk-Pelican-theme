$(function () {
    $.ajax({url:"/theme/img/main-bg.svg"}).done(function() {
        $("body").css("background-image","url(\"/theme/img/main-bg.svg\")")
                 .css("background-repeat","repeat-y")
                 .css("background-position","center top")
                 .css("background-size","100% auto");
    });
    $("#js-load-sidebar").load("/sidebar-widgets.html");
});
