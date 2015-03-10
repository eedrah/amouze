function Statistics(){
    this._caughtMice = 0;
    // this._mouseGenerator;
    // this._startTime;
    this._totalMice = 0;
    this._totalMouseAliveSeconds = 0.000001;  // Initialize to small number to save checking for NaNs each loop
    // this._totalTime;
};

Statistics.prototype = {
    registerCaughtMouse: function(birthTime){
        this._caughtMice += 1;
        this._totalMouseAliveSeconds += (Date.now() - birthTime) / 1000;
    },
    update: function(){
        this._totalTime = Date.now() - this._startTime;
        if(this._totalTime >= (this._totalMice + 1) * 1000){
            this._mouseGenerator.addMouse(this.registerCaughtMouse);
            this._totalMice += 1;
        };
    },
    getWildMice: function(){
        return this._totalMice - this._caughtMice;
    },
    getTotalSeconds: function(){
        return this._totalTime / 1000;
    },
    getCaughtMice: function(){
        return this._caughtMice;
    },
    getScore: function(){
        return this._caughtMice / (
            this._totalMouseAliveSeconds + Math.pow(this._totalMice - this._caughtMice, 2)
        );
    },
    setMouseGenerator: function(mouseGenerator){
        this._mouseGenerator = mouseGenerator;
    },
    initialize: function(){
        this._startTime = Date.now();
    },
};