function mouseController(){
	var model;
	var view;

	function placeNewMouse(){
		var $mouse = model.createMouse();
		view.render($mouse);
	}
};

