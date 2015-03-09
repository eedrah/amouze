function mouseModel(){
	var $mouse;
	var _callbackOnDestroy;

	this.create = function(callbackOnDestroy){
		_callbackOnDestroy = callbackOnDestroy;
		$mouse = $('<div/>').addClass('mouse');
		this.disappearOnMouseover();
		return $mouse;
	};

	this.disappearOnMouseover = function(){
		$mouse.mouseover(disappear);
	};

	function disappear(){
		var centerWidth = $mouse.width() / 2;
		var centerHeight = $mouse.height() / 2;
		$mouse.animate({
			height: 0,
			width: 0,
			marginLeft: centerWidth,
			marginTop: centerHeight
		}, 'fast', destroy);
	};

	function destroy(){
		$mouse.remove();
		_callbackOnDestroy();
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