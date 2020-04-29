$(function(){
  $('header a').click(function(){
    var id = $(this).attr('href');
    var position = $(id).offset().top;
    $('html,body').animate({'scrollTop':position},500);
  });

  //bash 写真を4枚自動で流しっぱにするモーション
  $('.slider').slick({
    autoplay:true,
    autoplaySpeed:5000,
    dots:true,
  });

  // bashmemberの写真をhoverした際に、各SNSやYouTubeチャンネル情報
  //を表示させて誘導する。
 });
