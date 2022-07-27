function calcMonthSum() {
    let monthPrice = 0
    $(".config__radio input").each((i,el) => {
        let isChecked = $(el).prop("checked")
        if(isChecked){
            monthPrice = monthPrice + +$(el).parents(".config__item").find(".month-price").html()
        }
    })
    $(".month-sum").html(monthPrice)
}

calcMonthSum()

function oncePaySum() {
    let monthPrice = 0
    $(".config__check--once input").each((i,el) => {
        let isChecked = $(el).prop("checked")

        if(isChecked){
            if($(el).hasClass("tv")){
                monthPrice = monthPrice + (+$(".tv-num").val() * +$(el).parents(".config__item").find(".tv-price").html())
            } else{
                monthPrice = monthPrice + +$(el).parents(".config__item").find(".once-price").html()
            }
        }
    })
    $(".once-sum").html(monthPrice)
}

oncePaySum()

function avansSum() {
    let monthPrice = 0
    $(".config__check--avans input").each((i,el) => {
        let isChecked = $(el).prop("checked")

        if(isChecked){
            monthPrice = monthPrice + +$(el).attr("data-avans-sum")
        }
    })
    $(".avans-sum").html(monthPrice)
}

avansSum()

$(".config__radio input").change(function () {
    calcMonthSum()
})

$(".config__check--once input").change(function () {
    oncePaySum()
})

$(".config__check--avans input").change(function () {
    avansSum()
})

$(".tv-num").change(function () {
    oncePaySum()
})

function showBlocks(){
    $(".config-service__item input").each((i,el) => {
        let isChecked = $(el).prop("checked")
        let path = $(el).attr("data-block")

        if(isChecked){
            $(`.config-part[data-block="${path}"]`).addClass("config-part--active")
        } else{
            $(`.config-part[data-block="${path}"]`).removeClass("config-part--active")
        }
    })

    let activeBlockLength = $(".config-part--active").length
    if(activeBlockLength > 0){
        $(".config-all").show()
    } else{
        $(".config-all").hide()
    }
}

showBlocks()

$(".config-service__item input").change(function () {
    showBlocks()
})
