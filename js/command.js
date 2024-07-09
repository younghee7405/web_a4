$(function(){

    // 메뉴

    $(".main > li , .sub_bg").mouseover(function(){
        $(".sub , .sub_bg").stop().slideDown();
    })//mouseover

    $(".main > li , .sub_bg").mouseout(function(){
        $(".sub , .sub_bg").stop().slideUp();
    })//mouseout


    // 이미지 영역

    // $(".fade li").eq(0).siblings().hide();
    
    $(".fade li").hide();
    $(".fade li").eq(0).show();

    var n = 0 ; //    0    1   2

    setInterval(function(){

        // $(".fade li").eq(n).fadeOut();

        if(n == 2){
            n=0;
        }else{
            n++;
        }//

        // $(".fade li").eq(n).fadeIn()

        $(".fade li").eq(n).fadeIn().siblings().fadeOut();

        console.log(n);

    } , 2500);


    // 팝업
    $(".p_up").click(function(){
        $(".popup").show();
    })//click

    $(".close").click(function(){
        $(".popup").hide();
    })//click

})//jquery