function mouseModel(){
	var $mouse;

	this.create = function(){
		$mouse = $('<div/>').addClass('mouse');
		this.disappearOnMouseover();
		return $mouse;
	};

	this.disappearOnMouseover = function(){
		$mouse.mouseover(disappear);
	};

	function disappear(){
		$mouse.animate({
			height: 0,
			width: 0
		}, destroy);
	};

	function destroy(){
		$mouse.remove();
	};
};

function getRandomLocationFor($element){
	var containerHeight = getContainer().height();
	var containerWidth = getContainer().width();
	var elementHeight = $element.height();
	var elementWidth = $element.width();
	var top = Math.floor(Math.random() * (containerHeight - elementHeight));
	var left = Math.floor(Math.random() * (containerWidth - elementWidth));
	return {top: top, left: left};
};

function getContainer(){
	return $('#container');
};