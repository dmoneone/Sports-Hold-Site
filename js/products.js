var left = 0;
$(document).ready(function(){
  var line = $('.tabs-line');
  $(document).on('click','.button-new',function(){
    $('.button-new').css("font-family","TruenoBd");
    $('.button-popular').css("font-family","TruenoLt");
    $('.button-top').css("font-family","TruenoLt");
    $('.button-new').css("color","#623232");
    $('.button-popular').css("color","#bdb9b5");
    $('.button-top').css("color","#bdb9b5");
    if(left == 0){
      left =0;
      line.css("margin-left",left + "px");
    }
    if(left == -2220){
      left =0;
      line.css("margin-left",left + "px");
    }
    if(left == -1110){
      left =0;
      line.css("margin-left",left + "px");
    }
  });
  $(document).on('click','.button-popular',function(){
    $('.button-new').css("font-family","TruenoLt");
    $('.button-popular').css("font-family","TruenoBd");
    $('.button-top').css("font-family","TruenoLt");
    $('.button-new').css("color","#bdb9b5");
    $('.button-popular').css("color","#623232");
    $('.button-top').css("color","#bdb9b5");
    if(left == 0){
      left =-1110;
      line.css("margin-left",left + "px");
    }
    if(left == -2220){
      left =-1110;
      line.css("margin-left",left + "px");
    }
  });
    $(document).on('click','.button-top',function(){
      $('.button-new').css("font-family","TruenoLt");
      $('.button-popular').css("font-family","TruenoLt");
      $('.button-top').css("font-family","TruenoBd");
      $('.button-new').css("color","#bdb9b5");
      $('.button-popular').css("color","#bdb9b5");
      $('.button-top').css("color","#623232");
    if(left == 0){
      left =-2220;
      line.css("margin-left",left + "px");
    }
      if(left == -1110){
      left =-2220;
      line.css("margin-left",left + "px");
    }
  });
});