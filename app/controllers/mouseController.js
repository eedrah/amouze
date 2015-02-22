function mouseController(){
	var model;
	var view;

	this.placeNewMouse = function(){
		model = new mouseModel();
		view = new mouseView();
		var $mouse = model.create();
		view.positionRandomly($mouse);
	}
};

