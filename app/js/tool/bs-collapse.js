$('body').on('click', '.collapse-item .collapse-head', function () {
    $(this).parent(".collapse-item").addClass("active");
    $(this).parent(".collapse-item").siblings().removeClass("active");
    $(this).parent(".collapse-item").find(".collapse-content").slideDown(300);
    $(this).parent(".collapse-item").siblings().find(".collapse-content").slideUp(300);
})
