function View(){
    this.$container = $('#container');
};

View.prototype = {
    renderCat: function(cat){
        this.$container.append(cat.$cat);
    },
    getContainer: function(){
        return this.$container;
    },
};