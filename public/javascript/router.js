$(startListening);

function startListening(){
	trackCat();
	(new mouseController).startPlacingMice();
};

function trackCat(){
	$('#container').one('mouseover', function(){
    	new catController();
	});
};