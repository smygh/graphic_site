$(document).ready(function(){
    $(".progress-bar").animate({
        width:$(".progress-bar").attr("aria-valuenow")+"%"
    },1000);
})