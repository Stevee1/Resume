$(function(){
  var hex = ['#999','#7ACC29','#00CC7A','#52CCCC','#52A3CC'],
      c = hex[Math.floor(Math.random()*hex.length)];
  $('body').css({ 'box-shadow': 'inset 0 10px '+c });
  $('h1, h2').css({ 'box-shadow': '0 3px '+c });
  $('.article span, a, u').css({ color: c });
  $('head').append('<style>*:before {color:'+c+'!important;}</style>');
});