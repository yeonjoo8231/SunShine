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
    responsive:[{
        breakpoint:1025,
        settings:{
            arrows: false
        }
    }]
})


var elPlaystop = document.querySelector('.article1 .playstop')
var ibtn = elPlaystop.childNodes
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

// ----------------------------------------------------------


$('#header .open').on('click',function(){
    $(this).toggleClass('on')
    $(this).next().toggleClass('on')
})


// ----------------------------------------------------------

var deviceSize = 1024;
function scrollOX(status) {
    $('html').css({
        overflowY:status
    })
    var htmlWidth = $('html').width()
    return htmlWidth
}
var swh = scrollOX('hiddnn')
var sws = scrollOX('scroll')
var swd = swh - sws
if (swd>0) {
    deviceSize = deviceSize - swd
}


// 함수선언
// 전역변수가 되어 여기저기서 쓰일수있음 / function문안에서 쓰면 그안에서만 쓸수있음.
var ww;
function init(){
    ww = $(window).width()
    if (ww>deviceSize && !$('html').hasClass('pc') ) {
        $('html').addClass('pc').removeClass('mobile')
        $('.depth1 > li').removeClass('on')
        $('html').scrollTop(0)
    } else if ( ww<=deviceSize && !$('html').hasClass('mobile') ) {
        $('html').addClass('mobile').removeClass('pc')
        $('#header .nav').removeClass('on')
        $('#header .open').removeClass('on')
        $('html').scrollTop(0)
    }
}

// 함수호출
init()

$(window).on('resize', function(){
    init()
})

$('.depth1 > li').on('click', function(e){
    if ($('html').hasClass('mobile')) {
        e.preventDefault()
        $(this).toggleClass('on').siblings().removeClass('on')
    }
})

$('.depth2 > li').on('click', function(e){
    e.stopPropagation()
})

$('.depth1 > li').hover(
    function(){ //mouseon
        if ($('html').hasClass('pc')){
            $(this).addClass('on')
        }
    },
    function(){ //mouseout
        if ($('html').hasClass('pc')){
            $(this).removeClass('on')
        }
    }
)

$(window).on('scroll', function(){
    var sct = $(this).scrollTop()
    if ( sct >= 50 && !$('#header').hasClass('on')) {
        $('#header').addClass('on')
    } else if (sct<50 && $('#header').hasClass('on')) {
        $('#header').removeClass('on')
    }
})



