$(bindEvents);

function bindEvents(){
    var controller = new AmouzeController();
    var $container = $('#container');
    $container.one('mouseover', function(){
        controller.mouseover();
    });
    $container.on('mousemove', function(event){
        controller.mousemove(event);
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
        updateMicePerSecond();
    });

    function updateTimer(){
        $('#totalTime').text(
            ((Date.now() - startTime) / 1000).toFixed(2)
        );
    };

    function updateWildMice(){
        $('#wildMice').text($('.mouse').length);
    };

    function updateMicePerSecond(){
        $('#micePerSecond').text(
            (
                $('#caughtMice').text() / $('#totalTime').text()
            ).toFixed(3)
        );
    };
};

// This is a terrible way to do it
// Refactor into one controller
    // statistics model
    // cat model
    // mouse model
    // one view?
// Want score/amouzement to be (caught)/(totalTimeAlive + uncaught^2)
// Delete mouse per second