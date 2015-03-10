function View(){
    this.$container = $('#container');

    this._$caughtMice = $('#caughtMice');
    this._$instructions = $('#instructions');
    this._$score = $('#score');
    this._$totalSeconds = $('#totalSeconds');
    this._$wildMice = $('#wildMice');
};

View.prototype = {
    renderCat: function(cat){
        this.$container.append(cat.$cat);
    },
    getContainer: function(){
        return this.$container;
    },
    updateStatistics: function(statistics){
        this._$totalSeconds.text(statistics.getTotalSeconds().toFixed(2));
        this._$caughtMice.text(statistics.getCaughtMice());
        this._$wildMice.text(statistics.getWildMice());
        this._$score.text(statistics.getScore().toFixed(2));
    },
};