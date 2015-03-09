function mouseController(){
	var view = new mouseView();
	var mouseSpawnTime = 1000;

	this.startPlacingMice = function(){
		setInterval(placeNewMouse, mouseSpawnTime);
	};

	function placeNewMouse(){
		var model = new mouseModel();
		var $mouse = model.create(view.incrementCaughtCounter);
		view.positionRandomly($mouse);
	};
};

