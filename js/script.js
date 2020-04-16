$(document).ready(function(){
	$('.slider-castom').slick({
		arrows:true,
		dots:false,
		speed: 500,
		slidesToShow: 2,
		slidesToScroll: 1,
		vertical:true,
		autoplay: true,
		speed: 500,
		autoplaySpeed: 1500,
	});
});

$(document).ready(function(){
	$('.team__slider').slick({
		infinite: true,
		arrows:false,
		dots:false,
		slidesToShow: 3,
		slidesToScroll: 1,
		centerMode: true,
		autoplay: true,
		speed: 500,
		autoplaySpeed: 1500,
		responsive: [
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			},
		],
	});
});

//Меню бургер
$(document).ready(function() {
	$('.burger__menu').click(function(event){
		$('.burger__menu,.header__menu-sbar').toggleClass('active');
		$('body').toggleClass('lock');
	});
	
});

//Для картинок
function ibg(){
	$.each($('.ibg'), function(index, val) {
		if($(this).find('img').length>0){
			$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
		}
	});
}
ibg();

//Акардион
$(document).ready(function() {
	$('.services__button').click(function(event) {
		if($('.services__row').hasClass('one')){
			$('.services__button').not($(this)).removeClass('active');
			$('.services__content').not($(this).next()).slideUp(300);
		}
		$(this).toggleClass('active').next().slideToggle(300);
	});
});