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

  //フォームエラーチェック//
  $('.js-btn').on('click',function(){
    $('#type-error').text("");
    $('#name-error').text("");
    $('#tel-error').text("");
    $('#email-error').text("");
    $('#comment-error').text("");
    $('#job-error').text("");

    if($('input[name="type"]').val() == "") {
      $("#type-error").text("選択してください。");
    }

    if($('input[name="name"]').val() == "") {
      $('#name-error').text("お名前をご入力してください。");
    }

    if($('input[name=email]').val()=="") {
      $('#email-error').text("メールアドレスをご入力してください");
    }

    if($('input[name=tel]').val() == "") {
      $('#tel-error').text("お電話番号をご入力してください");
    }

    if($('textarea[name=comment]').val() == "") {
      $('#comment-error').text("内容をお書きください")
    }

    if($('select[name=job]').val() == "") {
      $('#job-error').text("選択してください")
    }
});
