$(function(){
	$('a').click(function(){
		event.preventDefault();
	});

	Waves.attach('.social-media a', ['waves-light']);
	Waves.init()
});