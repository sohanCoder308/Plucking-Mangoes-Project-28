class Tree {
    constructor (x,y){
        var options = {
          isStatic : true
        }
      this.x = x;
      this.y = y;  
      this.body = Bodies.rectangle(this.x,this.y,this.width,this.height,options);
      this.width = 620;
      this.height = 720;
      this.image = loadImage("Images/tree.png");
      
      World.add(world,this.body);  
    }
   display(){
      var pos1 = this.body.position;
      push();
      imageMode(CENTER);
      
      image(this.image,pos1.x,pos1.y,this.width,this.height);
      pop();
   } 
}