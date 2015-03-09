function mouseView(){
	var caughtMice = 0;

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

	this.incrementCaughtCounter = function(){
		caughtMice += 1;
		$('#caughtMice').text(caughtMice);
	};
};