function Mouse(){
    // this.$mouse;
    // this._birthTime;
    // this._fnWhenCaught;
};

Mouse.prototype = {
    create: function(fnCaught){
        this.$mouse = $('<div>').addClass('mouse');
        this.disappearOnMouseover();
        this._birthTime = Date.now();
        return this.$mouse;
    },
    setFnWhenCaught: function(fnWhenCaught){
        this._fnWhenCaught = fnWhenCaught;
    },
    disappearOnMouseover: function(){
        this.$mouse.mouseover(this.disappear);
    },
    disappear: function(){
        var centerWidth = this.$mouse.width() / 2;
        var centerHeight = this.$mouse.height() / 2;
        this.$mouse.animate({
            height: 0,
            width: 0,
            marginLeft: centerWidth,
            marginTop: centerHeight
        }, 'fast', this.destroy);
    }.bind(this),
    destroy: function(){
        this.$mouse.remove();
        this._fnWhenCaught(this._birthTime);
    }.bind(this),
}