$(".support-qa__tab").click(function () {
    let path = $(this).attr("data-tabs-path")
    console.log(path)
    $(".support-qa__tab").removeClass("support-qa__tab--active")
    $(this).addClass("support-qa__tab--active")
    $(".support-qa__content").removeClass("support-qa__content--active")
    $(`.support-qa__content[data-tabs-path="${path}"]`).addClass("support-qa__content--active")
})
