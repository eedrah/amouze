function mouseView(){
	var caughtMice = 0;
	var mouseLivingTime = 0;

	this.positionRandomly = function($mouse){
		this.positionInContainer($mouse);
		var place = getRandomLocationFor($mouse);
		$mouse.css({
			top: place.top, 
			left: place.left
		});
	};

	this.positionInContainer = function($mouse){
		getContainer().append($mouse);
	};

	this.incrementCaughtCounter = function(timeAlive){
		caughtMice += 1;
		mouseLivingTime += timeAlive;
		$('#caughtMice').text(caughtMice);
		$('#mouseLivingTime').text(mouseLivingTime);
	};
};