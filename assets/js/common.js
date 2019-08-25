$(document).ready(function(){


	$('nav.mobile-nav div.mobile-nav-extend img').on('click',function(){

		$('nav.mobile-nav div.mobile-nav-menu').slideToggle(300);
		$('nav.mobile-nav div.mobile-nav-extend img').toggleClass('active');
	});
})