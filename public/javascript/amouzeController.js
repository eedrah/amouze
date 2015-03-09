function AmouzeController(){
    this._statistics = new Statistics();
    this._mouseGenerator = new MouseGenerator();
    this._cat = new Cat();
    this._view = new View();
};

AmouzeController.prototype.startHunting = function(){
    this._view.startHunting();
};