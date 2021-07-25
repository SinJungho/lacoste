$(document).ready(function(){
    $(function(){
        $('.inside-slider__bxslider').bxSlider({
            mode: 'horizontal',// 가로 방향 수평 슬라이드
            speed: 500,        // 이동 속도를 설정
            pager: true,             // 현재 위치 페이징 표시 여부 설정
            pagerType: 'short',      // 현재 위치 페이징 표시 여부 설정
            moveSlides: 1,     // 슬라이드 이동시 개수  
            minSlides: 1,      // 최소 노출 개수
            maxSlides: 1,      // 최대 노출 개수
            slideMargin: 5,    // 슬라이드간의 간격
            auto: false,        // 자동 실행 여부
            autoHover: true,   // 마우스 호버시 정지 여부
            controls: true,    // 이전 다음 버튼 노출 여부
            
            onBeforeSlide: function(currentSlide, totalSlides, currentSlideHtmlObject){
                $(' .bx-controls-direction > a').removeClass('bx-prev__pos');   
                 $(currentSlideHtmlObject).addClass('bx-prev__pos');
            }     
        });
      });
  });

$('.inside-slider__btn-next').on('click', function () {
    mySlider.goToNextSlide();  //이전 슬라이드 배너로 이동
    return false;              //<a>에 링크 차단
});

$('.inside-slider__btn-prev').on('click', function () {
    mySlider.goToPrevSlide();  //이전 슬라이드 배너로 이동
    return false;              //<a>에 링크 차단
});

$(function(){
    var btn_pos = $('.bx-prev');
    $('.bx-wrapper .bx-controls-direction a').addClass('bx-prev__pos');
})