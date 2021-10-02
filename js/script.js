$(document).ready(function(){
	$('.container-slick').slick({
		arrows:false,
		dots:true,
		slidesToShow:1,
		
	})
	$('.item-card__slider').slick({
		slidesToShow:4,
		infinite: false,
		
	})
	$('.header-buttom__hamburger-menu').on('click',function(){
      $('.bg-big-nav').toggleClass('active-catalog');
    })
	$('.header-buttom__hamburger-menu').on('click',function(){
      $('.span').toggleClass('span-open');
    })
});