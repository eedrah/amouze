$(startListening);

function startListening(){
	$('#container').one('mouseover', function(){
        startUpdatingStatistics();
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

function startUpdatingStatistics(){
    var updateInterval = 30;
    startTimer(updateInterval);
    startCountingWildMice(updateInterval);
};

function startTimer(updateInterval){
    var updateInterval = 30;
    var intervalSeconds = updateInterval / 1000;
    var time = 0;
    setInterval(function(){
        time += intervalSeconds;
        $('#totalTime').text(time.toFixed(2));
    }, updateInterval);
};

function startCountingWildMice(updateInterval){
    setInterval(function(){
        $('#wildMice').text($('.mouse').length);
    }, updateInterval);
};