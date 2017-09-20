$(".cbox").change(function () {
    if ($(".cbox").is(":checked")) {
        $(".cboxOptional").css("display", "block")
    } else {
        $(".cboxOptional").css("display", "none")
    }
})