$(function() {
	var id=1;
	setInterval(generateSnow, 400);	
	
	generateSnow(1);

	function generateSnow(id) {
		var x=Math.floor(Math.random()*95)+1;
		$body=$('body');
		$img=$('<img class="snow'+id+'" src="img/dolar.gif">');
		$img.css({

			left: +x+"%",
			position: 'fixed'
		});
		
		$body.append($img);
		falling(id);		
		id++;
	}

	function falling(id) {
		$('.snow'+id).animate({
				top: +110+"%"
			}, 9000, function() {
				$(this).remove();
			});
	}
	
});





