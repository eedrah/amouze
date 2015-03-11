function AmouzeController(){
    this.loopTime = 50;

    this._statistics = new Statistics();
    this._cat = new Cat();
    this._view = new View();
};

AmouzeController.prototype = {
    computeLoop: function(){
        this._statistics.update();
        this._view.updateStatistics(this._statistics);
    },
    startLoop: function(){
        this._statistics.initialize();
        this._statistics.setMouseDisplayer(this._view.renderMouse.bind(this._view));
        setInterval(this.computeLoop.bind(this), this.loopTime);
    },
    startCat: function(){
        this._cat.createIn(this._view.getContainer());
        this._view.renderCat(this._cat);
    },
    mousemove: function(event){
        this._cat.moveTo(event.pageX, event.pageY);
    },
    mouseover: function(event){
        this.startCat();
        this.startLoop();
    },
};