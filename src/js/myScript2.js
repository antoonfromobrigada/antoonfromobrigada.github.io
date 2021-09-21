$(document).ready(function(){
   $(window).scroll(() => {
    let scrollDistance = $(window).scrollTop();
    
    $("section").each(i, el) => {
        
        if($(el).offset().top - $("menu").outerHeight() <= scrollDistance){
            $("menu a").each((i, el) => {
                if ($(el).hasClass("active")){
                    $(el).removeClass("active");
                }
            });
            $('menu li:eq("+ i +")').find('a').addClass('active');
        }
        
    });
});