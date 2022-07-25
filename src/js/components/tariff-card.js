$(".tariff-card .check input").change(function () {
    calcTariffAdditionalChanged($(this))
})

function calcTariffAdditionalChanged(additional){
    let parentCard = $(additional).parents(".tariff-card")
    let fullPriceField = $(parentCard).find(".tariff-card__calc-price")
    let fullPrice = +$(fullPriceField).html()
    let checked = $(additional).prop("checked")
    let price = +$(additional).parents(".tariff-card__prop").find(".tariff-card__add-price").html()
    if(checked){
        $(fullPriceField).html(fullPrice + price)
    } else{
        $(fullPriceField).html(fullPrice - price)
    }
}

$(".tariff-card").each((i, el) => {
    calcTariffAdditional(el)
})

function calcTariffAdditional(card) {

    let checks = $(card).find(".check input")
    let fullPriceField = $(card).find(".tariff-card__calc-price")
    let fullPrice = +$(fullPriceField).html()

    $(checks).each((i, el) => {
        let checked = $(el).prop("checked")
        let price = +$(el).parents(".tariff-card__prop").find(".tariff-card__add-price").html()
        if(checked){
            $(fullPriceField).html(fullPrice + price)
        }
    })


}
