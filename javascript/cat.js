function Cat(){
};

Cat.prototype = {
    moveTo: function(pageLeft, pageTop){
        this.$cat.css({
            left: (pageLeft - this.leftOffset) + 'px',
            top: (pageTop - this.topOffset) + 'px',
        })
    },
    createCat: function(){
        this.$cat = $('<div>').addClass('cat');
    },
    computeDisplayOffsets: function($container){
        var position = $container.offset();
        this.leftOffset = position.left;
        this.topOffset = position.top;
    },
    createIn: function($container){
        this.computeDisplayOffsets($container);
        this.createCat();
    },
};