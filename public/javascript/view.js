function View(){
    this._$caughtMice = $('#caughtMice');
    this._$container = $('#container');
    this._$instructions = $('#instructions');
    this._$score = $('#score');
    this._$totalSeconds = $('#totalSeconds');
    this._$wildMice = $('#wildMice');
};

View.prototype = {
    renderCat: function(cat){
        this._$container.append(cat.$cat);
    },
    getContainer: function(){
        return this._$container;
    },
    updateStatistics: function(statistics){
        this._$totalSeconds.text(statistics.getTotalSeconds().toFixed(2));
        this._$caughtMice.text(statistics.getCaughtMice());
        this._$wildMice.text(statistics.getWildMice());
        this._$score.text(statistics.getScore().toFixed(2));
    },
    renderMouse: function(mouse){
        this._positionRandomly(mouse.$mouse);
        this._$container.append(mouse.$mouse);
    },
    _positionRandomly: function($element){
        var containerHeight = this._$container.height();
        var containerWidth = this._$container.width();
        var elementHeight = $element.height();
        var elementWidth = $element.width();
        var top = Math.floor(Math.random() * (containerHeight - elementHeight));
        var left = Math.floor(Math.random() * (containerWidth - elementWidth));
        $element.css({
            top: top,
            left: left,
        });
    },
};