//script for fading in the goto top button only after some scrolling

$(document).ready(function(){

  $(window).scroll(function(){
    if($(window).scrollTop() > 70){
      //function to faid in the button
      $('#button-top').fadeIn();
    }else{
      //function to fade out the button
      $('#button-top').fadeOut();
    }
  });

//script for changing the opacity of the navigation bar only after some scrolling
  $(window).scroll(function(){
      $("header").css({
      	opacity: function(){
      		if($(window).scrollTop() > 70){       //function to check the top scroll amount
      		 opacity = 0.5;
      		return opacity;                     //sets the opacity value
      		}else{
      			opacity = 1;
      			return opacity;
      		}
      	}
      });
  });
});
