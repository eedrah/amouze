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
    var startTime = Date.now();
    setInterval(function(){
        updateTimer();
        updateWildMice();
    });

    function updateTimer(){
        $('#totalTime').text(
            ((Date.now() - startTime) / 1000).toFixed(2)
        );
    };

    function updateWildMice(){
        $('#wildMice').text($('.mouse').length);
    };
};