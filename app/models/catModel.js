function catModel(){
  var $cat;

  this.create = function(){
    $cat = $('<div/>').addClass('cat');
    return $cat;
  };

  this.move = function(top, left){
    $cat.css({
      top: top + 'px',
      left: left + 'px'
    });
  };
};
