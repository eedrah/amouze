function AmouzeController(){
    this._statistics = new Statistics();
    this._mouseGenerator = new MouseGenerator();
    this._cat = new Cat();
    this._view = new View();
};

AmouzeController.prototype = {
    startCat: function(){
        this._cat.createIn(this._view.getContainer());
        this._view.renderCat(this._cat);
    },
    mousemove: function(event){
        this._cat.moveTo(event.pageX, event.pageY);
    },
    mouseover: function(event){
        this.startCat();
    },
};