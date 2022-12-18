$(document).ready(function() {
    $('input[type="tel"]').mask('+7 999 999-9999', { autoclear: false }, { placeholder: '+7             ' });
    $(".my-select").niceSelect()
});


$(window).scroll(function() {
    if ($(window).scrollTop() > 100) {
        $(".scroll-up").addClass("scroll-up--active")
    } else {
        $(".scroll-up").removeClass("scroll-up--active")
    }
})

$(".scroll-up").click(function() {
    $(window).scrollTop(0);
})


$("._add-info input[type='checkbox']").change(function () {
    checkCheckedServices()
    let info = $(this).attr("data-info")

    if($(this).prop("checked")){
        $(`.more-info__group[data-info="${info}"]`).addClass("_active")
    } else{
        $(`.more-info__group[data-info="${info}"]`).removeClass("_active")
    }
})


function checkCheckedServices() {
    let checkedArray = []
    $("._add-info input[type='checkbox']").each(function (index, el){
        checkedArray.push($(el).prop("checked"))
    });

    if(checkedArray.indexOf( true ) != -1 ){
        $(".more-info").addClass("_active")
    } else {
        $(".more-info").removeClass("_active")
    }
}
