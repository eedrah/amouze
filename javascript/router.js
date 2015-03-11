$(bindEvents);

function bindEvents(){
    var controller = new AmouzeController();
    var $container = $('#container');
    $container.one('mouseover', function(){
        controller.mouseover();
    });
    $container.on('mousemove', function(event){
        controller.mousemove(event);
    });
};