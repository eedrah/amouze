$(startListening);

function startListening(){
	$('#container').one('mouseover', function(){
        startTimer();
    	new catController();
        (new mouseController).startPlacingMice();
        removeInstructions();
	});
};

function removeInstructions(){
    $('#instructions').fadeOut(function(){
        $(this).remove();
    });
};

function startTimer(){
    var interval = 30;
    var intervalSeconds = interval / 1000;
    var time = 0;
    setInterval(function(){
        time += intervalSeconds;
        $('#totalTime').text(time.toFixed(2));
    }, interval);
};