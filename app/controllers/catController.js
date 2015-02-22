function catController(top, left){
  var model;
  var view;
  var $cat;
  var leftOffset;
  var topOffset;

  initialize(top, left);

  function initialize(top, left){
    model = new catModel();
    view = new catView();
    $cat = model.create();
    view.render($cat);
    model.move(top, left);

    computeOffsets();
    startTracking();
  };

  function computeOffsets(){
    var pos = $('#container').offset();
    leftOffset = pos.left;
    topOffset = pos.top;
  };

  function startTracking(){
    $('#container').on('mousemove', function(event){
      model.move(event.pageY - topOffset, event.pageX - leftOffset);
    });
  };
};
