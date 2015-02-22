function mouseView(){
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
};