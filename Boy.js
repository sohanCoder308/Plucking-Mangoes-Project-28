class Boy {
    constructor (x,y){
        var options = {
           isStatic : true
        }
      this.x = x;
      this.y = y;
      this.image = loadImage("Images/boy.png");  
      this.body = Bodies.rectangle(this.x,this.y,10,10,options);
      World.add(world,this.body);  
    }
   display(){
      var pos = this.body.position;
      imageMode(CENTER);
      image(this.image,pos.x,pos.y,250,320);
   } 
}