$(".article1 .slide_group").slick({
    autoplay: true, // 자동재생
    autoplaySpeed: 3000, // 간격시간
    dots: true, // 동그라미버튼 번호버튼
    speed: 600, // 바뀌는시간(생략가능)
    slidesToShow: 1, // 보여질슬라이드수(생략가능)
    slidesToScroll: 1, // 이동슬라이드수(생략가능)
    pauseOnHover: true, // 마우스오버시 멈춤여부(생략가능)
    pauseOnDotsHover: true, // 동그라미번호버튼에 호버시 멈춤여부(생략가능)
    pauseOnFocus: false, // 동그라미번호버튼 클릭시 자동실행 멈춤여부
    cssEase: 'linear', // 속도함수(생략가능)
    draggable: true, // 마우스드래그시 슬라이드 교체가능여부(생략가능)
    fade: false, // 슬라이드가 수평으로 이동하지 않고, 제자리에서 사라지고 나타남(생략가능)
    arrows: true, // 좌우화살표 사용여부(생략가능)
    prevArrow: '<button class="prev"><i class="fas fa-angle-left"></i></button>',
    nextArrow: '<button class="next"><i class="fas fa-angle-right"></i></button>',
})

// $('.article1 .playstop').on('click', function(){
//     var $ibtn = $(this).find('i')
//     if ($ibtn.hasClass('fas fa-pause')) {
//         $('.article1 .slide_group').slick('slickPause')
//         $ibtn.removeClass('fas fa-pause').addClass('fas fa-play')
//     } else {
//         $('.article1 .slide_group').slick('slickPlay')
//         $ibtn.removeClass('fas fa-play').addClass('fas fa-pause')
//     }
// })

var elPlaystop = document.querySelector('.article1 .playstop')
var ibtn = elPlaystop.childNodes
// var elSlideGroup = document.querySelector('article1 .slide_group')
elPlaystop.addEventListener('click',function(){
    if ( ibtn[0].classList.contains('fa-pause')) {
        $('.article1 .slide_group').slick('slickPause')
        ibtn[0].classList.remove('fa-pause')
        ibtn[0].classList.add('fa-play')
    } else {
        $('.article1 .slide_group').slick('slickPlay')
        ibtn[0].classList.remove('fa-play')
        ibtn[0].classList.add('fa-pause')
    }
})

$('#header .open').on('click',function(){
    // $(this).toggleClass('on')
    if ( !$(this).hasClass('on') ){
        $(this).addClass('on')
    } else {
        $(this).removeClass( 'on' )
    }

    // $(this).next().toggleClass('on')
    if ( !$(this).next().hasClass('on') ){
        $(this).next().addClass('on')
    } else {
        $(this).next().removeClass( 'on' )
    }
})

var ww = $(window).width()
console.log(ww)

if ( ww>1024 ) {
    $('.nav .depth1 > li').hover(
        function(){
            $(this).addClass('on')
        },
        function(){
            $(this).removeClass('on')
        }
    )
} else {
    $('.nav .depth1 > li').on('click', function(){
        // $(this).toggleClass('on')
        // $(this).siblings().removeClass('on')
        if( !$(this).hasClass('on') ){
            $(this).addClass('on')
            $(this).siblings().removeClass('on')
        }else {
            $(this).removeClass('on')
        }
    })
}