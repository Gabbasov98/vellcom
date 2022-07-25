$(".file-input input").change(function () {
    let file = $(this)[0].files[0]
    let labelName = 'Прикрепить резюме'
    if(file){
        labelName = file.name
    } else{
        labelName = 'Прикрепить резюме'
    }
    $(this).siblings("label").children("span").html(labelName)
})
