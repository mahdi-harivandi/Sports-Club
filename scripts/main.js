$(document).ready(function(){
    $(".nav_button").click(function(){
        $(".nav_button").toggleClass("change")
    })
})

$(window).scroll(function(){
    let position = $(this).scrollTop();
    // console.log(position); برای فهمیدن عدد متغیر
    if(position >= 200 ){
        $('.nav_menu').addClass('custom_navbar')
    }else{
        $('.nav_menu').removeClass('custom_navbar')
    }
})
$(window).scroll(function(){
    let position = $(this).scrollTop();
    // console.log(position); 
    // برای فهمیدن عدد متغیر
    if(position >= 700 ){
        $('.award_text').addClass('formright')
        $('.award_img').addClass('formleft')
    }else{
        $('.award_text').removeClass('formright')
        $('.award_img').removeClass('formleft')
    }
})

$(".gallery-list-item").click(function(){
    let value = $(this).attr("data-filter");
    $(this).addClass("active-item").siblings().removeClass("active-item")
    if(value === "all"){
        $(".all").show(300)
    }
    else{
        $(".all").filter("." + value).show(300)
        $(".all").not("." + value).hide(300)
    }
})

$(window).scroll(function(){
    let position = $(this).scrollTop();
    console.log(position)
    if(position >= 4600 ){
        $('.card-1').addClass('movefromright')
        $('.card-2').addClass('movefromcenter')
        $('.card-3').addClass('movefromleft')

    }else{
        $('.card-1').removeClass('movefromright')
        $('.card-2').removeClass('movefromcenter')
        $('.card-3').removeClass('movefromleft')

    }
})