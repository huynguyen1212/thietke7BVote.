$('body').on('click', "[modal-show='show']", function () {
    $($(this).attr("modal-data")).addClass("show-modal");
    $($(this).attr("modal-data")).find(".content-modal").addClass("show-modal");
    $("body").addClass("active-modal");
});
$('body').on('click', "[modal-show='close']", function () {
    setTimeout(function () {
        $(".bs-modal").removeClass("show-modal");
        $("body").removeClass("active-modal");
    }, 500);
    $(this).parents(".bs-modal").find(".content-modal").removeClass("show-modal");
});
