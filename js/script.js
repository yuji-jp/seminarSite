$(function () {

//スクロール//
$('a[href^="#"]').on('click', function () {
  var speed = 300;
  var href = $(this).attr("href");
  var target = $(href == "#" || href == "" ? 'html' : href);
  var position = target.offset().top;
  $("html, body").animate({
    scrollTop: position
  }, speed, "swing");
  return false;
});

//ページトップへ戻るボタン
  var $pageTop =$('.page-top');
  $(window).scroll(function() {
    if ($(this).scrollTop() > 300) {
      $pageTop.fadeIn();
    } else {
      $pageTop.fadeOut();
    }
  });
  $pageTop.on('click', function () {
    $('html,body').animate({
      scrollTop:0
    },300);
    return false;
  });

  //ハンバーガーメニュー//
  $('.humburger').on('click',function(){
    $('.humburger , .nav-list , .humburger-line').toggleClass('open');
  });

});