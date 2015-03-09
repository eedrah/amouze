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
    var start = Date.now();
    setInterval(function(){
        $('#totalTime').text(
            ((Date.now() - start) / 1000).toFixed(2)
            );
    }, updateInterval);
};

function startCountingWildMice(updateInterval){
    setInterval(function(){
        $('#wildMice').text($('.mouse').length);
    }, updateInterval);
};