$(startListening);

function startListening(){
	$('#container').one('mouseover', function(){
    	new catController();
        (new mouseController).startPlacingMice();
	});
};