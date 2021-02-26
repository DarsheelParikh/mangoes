class Stone {
    constructor(x,y){
      var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
    }
      super(x,y,50,50);
      this.image = loadImage("images/stone.png");
    }
  
    display() {
      super.display();
    }
  }
  